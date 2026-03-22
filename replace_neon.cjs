const fs = require('fs');
const path = require('path');

const cssDir = path.join(__dirname, 'src');
const exts = ['.css'];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace neon cyan
  content = content.replace(/rgba\(0,\s*242,\s*254,\s*0\.15\)/g, 'var(--neon-glow-subtle)');
  content = content.replace(/rgba\(0,\s*242,\s*254,\s*0\.1\)/g, 'var(--neon-glow-subtle)');
  content = content.replace(/rgba\(0,\s*242,\s*254,\s*0\.2\)/g, 'var(--neon-glow-subtle)');
  content = content.replace(/rgba\(0,\s*242,\s*254,\s*0\.3\)/g, 'var(--neon-glow)');
  content = content.replace(/rgba\(0,\s*242,\s*254,\s*0\.4\)/g, 'var(--neon-glow)');
  content = content.replace(/rgba\(0,\s*242,\s*254,\s*0\.5\)/g, 'var(--neon-glow)');
  content = content.replace(/rgba\(0,\s*242,\s*254,\s*0\.6\)/g, 'var(--neon-glow-strong)');
  content = content.replace(/rgba\(0,\s*242,\s*254,\s*0\.8\)/g, 'var(--neon-glow-strong)');

  // Replace neon magenta
  content = content.replace(/rgba\(254,\s*9,\s*121,\s*0\.15\)/g, 'var(--neon-glow-secondary)');
  content = content.replace(/rgba\(254,\s*9,\s*121,\s*0\.1\)/g, 'var(--neon-glow-secondary)');
  content = content.replace(/rgba\(254,\s*9,\s*121,\s*0\.5\)/g, 'var(--neon-glow-secondary)');

  // Hardcoded colors that should be variables
  content = content.replace(/color:\s*#000;/g, 'color: var(--neon-btn-text);');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

function traverse(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverse(fullPath);
    } else if (exts.includes(path.extname(fullPath))) {
      replaceInFile(fullPath);
    }
  }
}

traverse(cssDir);
console.log("Replacements complete!");
