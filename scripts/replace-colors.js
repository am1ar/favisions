import fs from 'fs'
import path from 'path'

// Try to find the project root
const possibleRoots = [
  '/vercel/share/v0-project',
  '/home/user/v0-project',
  process.cwd(),
  path.resolve('.'),
]

let projectRoot = null
for (const root of possibleRoots) {
  console.log(`[v0] Checking: ${root} -> exists: ${fs.existsSync(root)}`)
  if (fs.existsSync(path.join(root, 'app'))) {
    projectRoot = root
    break
  }
}

if (!projectRoot) {
  // Try listing current dir
  console.log(`[v0] CWD: ${process.cwd()}`)
  try {
    const entries = fs.readdirSync(process.cwd())
    console.log(`[v0] CWD contents: ${entries.join(', ')}`)
  } catch(e) {
    console.log(`[v0] Cannot read CWD: ${e.message}`)
  }
  // Try /home/user
  try {
    const entries = fs.readdirSync('/home/user')
    console.log(`[v0] /home/user contents: ${entries.join(', ')}`)
  } catch(e) {
    console.log(`[v0] Cannot read /home/user: ${e.message}`)
  }
  process.exit(1)
}

console.log(`[v0] Using project root: ${projectRoot}`)
const appDir = path.join(projectRoot, 'app')

function getAllFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      getAllFiles(fullPath, files)
    } else if (entry.name.endsWith('.tsx')) {
      files.push(fullPath)
    }
  }
  return files
}

const files = getAllFiles(appDir)
console.log(`[v0] Found ${files.length} .tsx files`)

const replacements = [
  ['bg-luxury-ivory text-dark-text', 'bg-background text-foreground'],
  ['bg-luxury-gradient text-luxury-ivory', 'bg-hero-gradient text-white'],
  ['bg-luxury-gradient', 'bg-hero-gradient'],
  ['bg-luxury-navy text-luxury-ivory', 'bg-charcoal-700 text-white'],
  ['bg-luxury-navy/95', 'bg-charcoal-700/95'],
  ['bg-luxury-navy/90', 'bg-charcoal-700/90'],
  ['bg-luxury-navy', 'bg-charcoal-700'],
  ['bg-luxury-ivory', 'bg-background'],
  ['bg-light-background', 'bg-background'],
  ['bg-luxury-gold rounded-full', 'bg-teal-50 rounded-full'],
  ['bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full', 'bg-teal-50 rounded-full'],
  ['bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-lg', 'bg-teal-50 rounded-lg'],
  ['bg-gradient-to-br from-luxury-gold to-luxury-gold-light', 'bg-teal-50'],
  ['bg-luxury-gold', 'bg-teal-600'],
  ['bg-luxury-gold-light', 'bg-teal-500'],
  ['text-luxury-ivory/80', 'text-white/60'],
  ['text-luxury-ivory/60', 'text-white/40'],
  ['text-luxury-ivory', 'text-white'],
  ['text-luxury-navy', 'text-foreground'],
  ['text-luxury-gold-dark', 'text-teal-700'],
  ['text-luxury-gold-light', 'text-teal-400'],
  ['text-luxury-gold', 'text-teal-600'],
  ['text-dark-text', 'text-foreground'],
  ['text-medium-text', 'text-muted-foreground'],
  ['text-accent-text', 'text-teal-600'],
  ['border-luxury-gold/30', 'border-border'],
  ['border-luxury-gold/20', 'border-border'],
  ['border-luxury-gold/10', 'border-border'],
  ['border-luxury-gold', 'border-teal-200'],
  ['hover:text-luxury-gold', 'hover:text-teal-600'],
  ['hover:bg-luxury-gold-light', 'hover:bg-teal-500'],
  ['hover:bg-luxury-gold', 'hover:bg-teal-600'],
  ['bg-gradient-to-br from-luxury-ivory to-gray-50', 'bg-muted'],
  ['bg-gradient-to-br from-luxury-ivory', 'bg-muted'],
  ['bg-white text-dark-text border-luxury-gold/30', 'bg-card text-card-foreground border-border'],
  ['bg-white border-luxury-gold/20', 'bg-card border-border'],
  ['bg-white border-luxury-gold/10', 'bg-card border-border'],
  ['from-gradient-blue via-gradient-purple to-gradient-pink', 'from-teal-600 via-teal-500 to-coral-400'],
  ['from-luxury-navy to-luxury-navy-dark', 'from-charcoal-700 to-charcoal-800'],
  ['luxury-navy-light', 'charcoal-500'],
  ['luxury-navy-dark', 'charcoal-800'],
  ['luxury-ivory-dark', 'muted'],
  ['luxury-silver', 'muted'],
]

let totalReplacements = 0
let filesModified = 0

for (const filePath of files) {
  let content = fs.readFileSync(filePath, 'utf-8')
  let modified = false
  
  for (const [search, replace] of replacements) {
    if (content.includes(search)) {
      const count = content.split(search).length - 1
      content = content.replaceAll(search, replace)
      totalReplacements += count
      modified = true
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8')
    filesModified++
    console.log(`[v0] Modified: ${path.relative(projectRoot, filePath)}`)
  }
}

console.log(`\n[v0] Done! Modified ${filesModified} files with ${totalReplacements} replacements.`)
