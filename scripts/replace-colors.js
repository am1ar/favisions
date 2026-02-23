import fs from 'fs'
import path from 'path'

const appDir = '/vercel/share/v0-project/app'

// Recursively get all .tsx files
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

// Replacement map - order matters (longer/more specific patterns first)
const replacements = [
  // Wrapper div
  ['bg-luxury-ivory text-dark-text', 'bg-background text-foreground'],
  
  // Hero/gradient sections
  ['bg-luxury-gradient text-luxury-ivory', 'bg-hero-gradient text-white'],
  ['bg-luxury-gradient', 'bg-hero-gradient'],
  ['bg-luxury-navy text-luxury-ivory', 'bg-charcoal-700 text-white'],
  
  // Background colors
  ['bg-luxury-navy/95', 'bg-charcoal-700/95'],
  ['bg-luxury-navy/90', 'bg-charcoal-700/90'],
  ['bg-luxury-navy', 'bg-charcoal-700'],
  ['bg-luxury-ivory', 'bg-background'],
  ['bg-light-background', 'bg-background'],
  
  // Gold/accent backgrounds → teal
  ['bg-luxury-gold rounded-full', 'bg-teal-50 rounded-full'],
  ['bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full', 'bg-teal-50 rounded-full'],
  ['bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-lg', 'bg-teal-50 rounded-lg'],
  ['bg-gradient-to-br from-luxury-gold to-luxury-gold-light', 'bg-teal-50'],
  ['bg-luxury-gold', 'bg-teal-600'],
  ['bg-luxury-gold-light', 'bg-teal-500'],
  
  // Text colors
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
  
  // Border colors
  ['border-luxury-gold/30', 'border-border'],
  ['border-luxury-gold/20', 'border-border'],
  ['border-luxury-gold/10', 'border-border'],
  ['border-luxury-gold', 'border-teal-200'],
  
  // Hover states
  ['hover:text-luxury-gold', 'hover:text-teal-600'],
  ['hover:bg-luxury-gold-light', 'hover:bg-teal-500'],
  ['hover:bg-luxury-gold', 'hover:bg-teal-600'],
  
  // Gradient backgrounds in sections
  ['bg-gradient-to-br from-luxury-ivory to-gray-50', 'bg-muted'],
  ['bg-gradient-to-br from-luxury-ivory', 'bg-muted'],
  
  // Icon colors in gold/navy context
  ['text-luxury-navy', 'text-foreground'],
  
  // Card specific
  ['bg-white text-dark-text border-luxury-gold/30', 'bg-card text-card-foreground border-border'],
  ['bg-white border-luxury-gold/20', 'bg-card border-border'],
  ['bg-white border-luxury-gold/10', 'bg-card border-border'],
  
  // Gradient specific
  ['from-gradient-blue via-gradient-purple to-gradient-pink', 'from-teal-600 via-teal-500 to-coral-400'],
  ['from-luxury-navy to-luxury-navy-dark', 'from-charcoal-700 to-charcoal-800'],
  
  // Color hex in className context
  ['bg-\\[#0A2E5A\\]', 'bg-charcoal-700'],
  ['text-\\[#0A2E5A\\]', 'text-foreground'],
  ['text-\\[#D4AF37\\]', 'text-teal-600'],
  ['bg-\\[#D4AF37\\]', 'bg-teal-600'],
  
  // Remaining luxury references
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
    console.log(`[v0] Modified: ${path.relative('/vercel/share/v0-project', filePath)}`)
  }
}

console.log(`\n[v0] Done! Modified ${filesModified} files with ${totalReplacements} replacements.`)
