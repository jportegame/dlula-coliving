#!/usr/bin/env node
/**
 * Generate sitemap.xml from siteConfig
 * Usage: node scripts/generate-sitemap.js
 * 
 * This script generates a sitemap.xml file based on all routes and dynamic content.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const siteUrl = 'https://dlulacoliving.com';

// Manual configuration based on current siteConfig
const staticPages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/our-rooms', priority: 0.9, changefreq: 'weekly' },
  { path: '/common-areas', priority: 0.9, changefreq: 'weekly' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.8, changefreq: 'monthly' },
];

const rooms = [
  'bedroom-1',
  'bedroom-2',
  'bedroom-3',
  'bedroom-4',
  'bedroom-5',
  'bedroom-6',
];

const commonAreas = [
  'coworking',
  'house',
  'kitchen',
  'living-room',
];

function generateSitemap() {
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  const today = new Date().toISOString().split('T')[0];

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${siteUrl}${page.path}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += `  </url>\n`;
  });

  // Add room pages
  rooms.forEach(room => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${siteUrl}/rooms/${room}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>weekly</changefreq>\n`;
    sitemap += `    <priority>0.8</priority>\n`;
    sitemap += `  </url>\n`;
  });

  // Add common area pages
  commonAreas.forEach(area => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>${siteUrl}/common-areas/${area}</loc>\n`;
    sitemap += `    <lastmod>${today}</lastmod>\n`;
    sitemap += `    <changefreq>weekly</changefreq>\n`;
    sitemap += `    <priority>0.8</priority>\n`;
    sitemap += `  </url>\n`;
  });

  sitemap += '</urlset>\n';

  return sitemap;
}

function main() {
  try {
    const sitemap = generateSitemap();
    const outputPath = path.join(__dirname, '../public/sitemap.xml');
    
    fs.writeFileSync(outputPath, sitemap, 'utf8');
    console.log(`✅ Sitemap generated successfully at ${outputPath}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

main();
