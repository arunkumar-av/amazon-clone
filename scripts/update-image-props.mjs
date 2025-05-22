#!/usr/bin/env node
/**
 * This script updates Next.js Image components from legacy props (layout, objectFit) 
 * to the new Image component API in Next.js 13+.
 * 
 * Usage:
 * - Install the required dependencies: npm install glob
 * - Run: node scripts/update-image-props.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

async function findFiles() {
  return await glob('**/*.{js,jsx,ts,tsx}', {
    cwd: projectRoot,
    ignore: ['**/node_modules/**', '**/.next/**', '**/scripts/**']
  });
}

function updateImageProps(content) {
  // Replace layout="fill" with fill
  let updatedContent = content.replace(/layout=["']fill["']/g, 'fill');
  
  // Replace objectFit with style
  updatedContent = updatedContent.replace(/objectFit=["'](\w+)["']/g, 'style={{ objectFit: "$1" }}');
  
  // If there's layout="responsive", adjust according to new API
  updatedContent = updatedContent.replace(/layout=["']responsive["']/g, '');
  
  // Add sizes attribute if not present for responsive images
  const sizeAttributeMissing = !content.includes('sizes=') && 
    (content.includes('layout="fill"') || content.includes('layout="responsive"'));
  
  if (sizeAttributeMissing) {
    updatedContent = updatedContent.replace(/<Image([^>]+)>/g, (match, p1) => {
      if (p1.includes('fill')) {
        return `<Image${p1} sizes="100vw">`;
      }
      return match;
    });
  }
  
  return updatedContent;
}

async function main() {
  const files = await findFiles();
  console.log(`Found ${files.length} files to check.`);
  
  let modifiedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(projectRoot, file);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (content.includes('layout=') || content.includes('objectFit=')) {
        const updatedContent = updateImageProps(content);
        
        if (content !== updatedContent) {
          fs.writeFileSync(filePath, updatedContent, 'utf8');
          modifiedCount++;
          console.log(`Updated: ${file}`);
        }
      }
    } catch (error) {
      console.error(`Error processing ${file}: ${error.message}`);
    }
  }
  
  console.log(`Completed. Modified ${modifiedCount} files.`);
}

main().catch(console.error);
