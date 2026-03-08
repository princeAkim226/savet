/**
 * Crée un utilisateur et l'ajoute à data/users.json
 * Usage: node scripts/create-user.js <email> <nom> <mot de passe>
 * Exemple: node scripts/create-user.js client@savet.com "Jean Dupont" MonMotDePasse123
 */

const { pbkdf2Sync } = require('crypto')
const { readFileSync, writeFileSync, mkdirSync } = require('fs')
const { join } = require('path')

const SALT = process.env.SAVET_SECRET || 'savet-default-salt-change-in-production'
const DATA_DIR = join(process.cwd(), 'data')
const USERS_FILE = join(DATA_DIR, 'users.json')

function hashPassword(password) {
  return pbkdf2Sync(password, SALT, 100000, 64, 'sha512').toString('hex')
}

const [, , email, name, password] = process.argv
if (!email || !name || !password) {
  console.error('Usage: node scripts/create-user.js <email> <nom> <mot de passe>')
  process.exit(1)
}

let users = []
try {
  mkdirSync(DATA_DIR, { recursive: true })
  const raw = readFileSync(USERS_FILE, 'utf-8')
  users = JSON.parse(raw)
} catch {
  users = []
}

if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
  console.error('Un utilisateur avec cet email existe déjà.')
  process.exit(1)
}

users.push({
  email: email.trim().toLowerCase(),
  name: name.trim(),
  passwordHash: hashPassword(password),
})

writeFileSync(USERS_FILE, JSON.stringify(users, null, 2))
console.log('Utilisateur créé:', email)
console.log('Fichier:', USERS_FILE)
