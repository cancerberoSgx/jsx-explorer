import {jsxColorsClasses} from '../classesData'
import {buildSelectorFor} from '../jsxColorsCssBuilder'

describe('buildSelectorFor', () => {
  it('should support classes referencing other classes', async () => {
    const sel = buildSelectorFor(jsxColorsClasses.find(c => c.name === 'JSXTagTokensOpeningElement')!)

    expect(sel).toEqual(
      `
.JsxOpeningElement.LessThanToken,
.JsxOpeningElement.GreaterThanToken
    `.trim(),
    )
  })
})
