import { readFile, writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

const DATA_DIR = join(process.cwd(), 'data')

export type Registration = {
  name: string
  email: string
  phone?: string
  company?: string
  message?: string
  createdAt: string
}

export type User = {
  email: string
  name: string
  passwordHash: string
}

const REGISTRATIONS_FILE = join(DATA_DIR, 'registrations.json')
const USERS_FILE = join(DATA_DIR, 'users.json')

async function ensureDataDir() {
  try {
    await mkdir(DATA_DIR, { recursive: true })
  } catch {}
}

export async function getRegistrations(): Promise<Registration[]> {
  await ensureDataDir()
  try {
    const raw = await readFile(REGISTRATIONS_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export async function addRegistration(data: Omit<Registration, 'createdAt'>): Promise<void> {
  const list = await getRegistrations()
  list.push({ ...data, createdAt: new Date().toISOString() })
  await writeFile(REGISTRATIONS_FILE, JSON.stringify(list, null, 2))
}

export async function getUsers(): Promise<User[]> {
  await ensureDataDir()
  try {
    const raw = await readFile(USERS_FILE, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return []
  }
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const users = await getUsers()
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) ?? null
}
