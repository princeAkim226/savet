import { cookies } from 'next/headers'
import { createHmac, pbkdf2Sync, timingSafeEqual } from 'crypto'

const SESSION_COOKIE = 'savet_session'
const SALT = process.env.SAVET_SECRET || 'savet-default-salt-change-in-production'
const SESSION_SECRET = process.env.SAVET_SECRET || 'savet-session-secret-change-me'

export type SessionData = { email: string; name: string }

function getSecret() {
  const s = process.env.SAVET_SECRET
  if (!s && process.env.NODE_ENV === 'production') {
    throw new Error('SAVET_SECRET must be set in production')
  }
  return s || 'dev-secret'
}

export function hashPassword(password: string): string {
  return pbkdf2Sync(password, SALT, 100000, 64, 'sha512').toString('hex')
}

export function verifyPassword(password: string, hash: string): boolean {
  const computed = pbkdf2Sync(password, SALT, 100000, 64, 'sha512').toString('hex')
  try {
    return timingSafeEqual(Buffer.from(computed, 'hex'), Buffer.from(hash, 'hex'))
  } catch {
    return false
  }
}

export function signSession(data: SessionData): string {
  const payload = Buffer.from(JSON.stringify(data)).toString('base64url')
  const sig = createHmac('sha256', getSecret()).update(payload).digest('hex')
  return `${payload}.${sig}`
}

export function verifySession(token: string): SessionData | null {
  const i = token.lastIndexOf('.')
  if (i === -1) return null
  const payload = token.slice(0, i)
  const sig = token.slice(i + 1)
  const expected = createHmac('sha256', getSecret()).update(payload).digest('hex')
  if (sig !== expected) return null
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString())
    if (data?.email && data?.name) return data as SessionData
  } catch {}
  return null
}

export async function getSession(): Promise<SessionData | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  if (!token) return null
  return verifySession(token)
}

export function sessionCookieName() {
  return SESSION_COOKIE
}
