// Renders cv/cv.html to public/cv.pdf (A4, one page). Usage: npm run build:cv
import { chromium } from 'playwright'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
// system Chrome: no pinned Playwright browser download needed
const browser = await chromium.launch({ channel: 'chrome' })
const page = await browser.newPage()
await page.goto(pathToFileURL(path.join(root, 'cv/cv.html')).href, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
const overflow = await page.evaluate(() => document.querySelector('.page').scrollHeight > document.querySelector('.page').clientHeight + 1)
if (overflow) throw new Error('CV content overflows one A4 page')
await page.pdf({ path: path.join(root, 'public/cv.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true })
await browser.close()
console.log('wrote public/cv.pdf')
