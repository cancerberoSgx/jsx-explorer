import {Page} from 'puppeteer'
import 'jest-puppeteer-to-have'

export async function expectElement(
  page: Page,
  selector: string,
  text?: string,
  negate = false,
  mode: 'asCodeIncludes' | undefined = undefined,
) {
  return expect(page).toHave({
    selector,
    text,
    asCode: true,
    caseInsensitive: true,
    extractAs: 'outerHTML', 
  })
}

export async function expectNotExist(page: Page, selector: string, text?: string) {
  return expect(page).not.toHave({
    selector,
    text,
    asCode: true,
    caseInsensitive: true,
    extractAs: 'outerHTML',
  })
}

export async function expectClick(page: Page, selector: string, text?: string) {
  await expectElement(page, selector, text)
  await page.click(selector)
}

export async function clearText(page: Page, selector: string) {
  await selectAll(page, selector)
  await page.keyboard.press('Backspace')
}

export async function selectAll(page: Page, selector: string) {
  await expect(page).toClick(selector)
  await page.keyboard.down('Control')
  await page.keyboard.press('a')
  await page.keyboard.up('Control')
}

export async function enter(page: Page, selector: string, text: string, ignoreExceptions = false) {
  await expect(page).toClick(selector)
  await Promise.all(
    text.split('').map(async c => {
      return await page.keyboard.press(c, {delay: 100})
    }),
  )
}

export function wait(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

