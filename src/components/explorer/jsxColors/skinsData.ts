import {JsxSyntaxSkin} from './jsxColorsTypes'
import {CSSProperties} from 'jsx-alone-core'
import {JsxColorSkins} from './JsxColorSkins'

export const jsxColorSkins: JsxSyntaxSkin[] = [
  {
    name: 'crazy',
    description: 'Very crazy experiment with shadows, fonts, colors and sizes',
    JsxTagName: {
      backgroundColor: '#fdecff',
      color: '#ff3131',
      fontSize: '1.3em',
      fontWeight: 'bold',
    },
    JsxText: {
      fontSize: '1.2em',
      color: '#583d11',
      fontVariant: 'petite-caps',
      fontStyle: 'italic',
      textShadow: '-3px -2px 5px #3e1919a6',
      fontFamily: 'serif',
    },
    JsxAttributeEqualsToken: {
      fontSize: '1.3em',
      fontWeight: 800,
      color: '#ce03da',
    },
    JsxAttributeName: {
      backgroundColor: '#fff0e0',
      color: '#005b28',
    },
    JsxAttributeInitializer: {
      color: '#005619',
      textDecoration: 'underline',
      textShadow: '3px -3px 3px #145f06a6',
    },
    JsxExpression: {
      color: '#3664ff',
      fontSize: '1.4em',
    },
    JSXTagTokens: {
      color: '#7a1818',
      fontSize: '1.3em',
      backgroundColor: '#fdecff',
    },
    JSXFragmentToken: {
      color: '#7a1818',
      fontSize: '1.3em',
      backgroundColor: '#fdecff',
    },
    JsxSpreadAttribute: {
      color: '#3664ff',
      fontSize: '1.3em',
    },
  },

  {
    name: 'Open Close',
    description: 'Differentiate opening and closing tags with colors',
    JSXTagTokensOpeningElement: {
      backgroundColor: '#c1ffb0',
      color: '#047200',
      fontWeight: 'bolder',
    },
    JSXTagTokensClosingElement: {
      backgroundColor: '#ffdede',
      color: '#900000',
      fontWeight: 'bolder',
    },
    JSXTagTokensSelfClosingElement: {
      color: '#010477',
      backgroundColor: '#ccd5ff',
      fontWeight: 'bolder',
    },
    JsxTagNameOpeningElement: {
      color: '#06a000',
      fontWeight: 'bolder',
      backgroundColor: '#c1ffb0',
    },
    JsxTagNameClosingElement: {
      backgroundColor: '#ffdede',
      color: '#8d0404',
      fontWeight: 'bolder',
    },
    JsxText: {
      color: '#51567c',
    },
    JsxTagNameSelfClosingElement: {
      color: '#041cda',
      backgroundColor: '#ccd5ff',
      fontWeight: 'bolder',
    },
    JsxAttributeInitializer: {
      color: '#60611a',
    },
    JsxAttributeName: {
      color: '#b302ca',
    },
    JsxAttributeEqualsToken: {
      color: '#0090ff',
    },
    JSXOpeningFragmentToken: {
      backgroundColor: '#c1ffb0',
      color: '#047200',
      fontWeight: 'bolder',
    },
    JSXClosingFragmentToken: {
      backgroundColor: '#ffdede',
      color: '#900000',
      fontWeight: 'bolder',
    },
  },

  {
    name: 'Default Light',
    description:
      'A simple JSX skin for light editor themes. This is the one used by default in this application and perhaps a good starting point to start building a new theme',
    JsxText: {
      color: '#434c56',
      fontStyle: 'italic',
    },
    JsxExpression: {
      color: '#226c09',
    },
    JSXTagTokens: {
      color: '#000da7',
      fontWeight: 'bold',
    },
    JSXFragmentToken: {
      color: '#000da7',
      fontWeight: 'bold',
    },
    JsxTagName: {
      color: '#3382a9',
      fontWeight: 'bold',
    },
    JsxAttributeName: {
      color: '#f08c36',
    },
    JsxAttributeInitializer: {
      color: '#66cc09',
    },
    JsxAttributeEqualsToken: {
      color: '#226c09',
    },
    JsxSpreadAttribute: {
      color: '#226c09',
    },
  },

  {
    name: 'Default Dark',
    description:
      'A simple JSX skin for dark editor themes. This is the one used by default in this application and perhaps a good starting point to start building a new theme',
    JsxText: {
      color: '#8a97b3',
      fontStyle: 'italic',
    },
    JsxExpression: {
      color: '#00bb00',
    },
    JSXTagTokens: {
      color: '#cccc88',
      fontWeight: 'bold',
    },
    JSXFragmentToken: {
      color: '#cccc88',
      fontWeight: 'bold',
    },
    JsxTagName: {
      color: '#8dc5d5',
    },
    JsxAttributeName: {
      color: '#f08c36',
    },
    JsxAttributeInitializer: {
      color: '#226c09',
    },
    JsxAttributeEqualsToken: {
      color: '#00bb00',
    },
    JsxSpreadAttribute: {
      color: '#00bb00',
    },
  },

  tsUnifierSkin(),
]

function tsUnifierSkin() {
  const declaration = {
    color: '#fe6a1e',
  }
  const token = {
    color: '#6a7e11',
  }
  const stringLiteral = {
    color: '#a31555',
  }

  const identifier = {
    color: '#4455aa',
  }
  var skin = {
    name: 'Jsx / Js Unifier',
    description:
      'A theme that highlight JSX according with existing Js node kinds if correspond. Note: You wont be able to edit this skin since it cheats and is not respecting JSX ClassName enum so we can reference non JSX node kinds',
    JsxText: stringLiteral,
    stringLiteral: {
      ...stringLiteral,
      name: 'stringLiteral',
      selector: `.StringLiteral, .NumericLiteral`,
      _isArtificial: true,
    },
    JsxExpression: token,
    tokens: {
      ...token,
      name: 'tokens',
      selector: `.OpenBraceToken, .CloseBraceToken, .OpenBracketToken, .CloseBracketToken, .OpenParenToken, .CloseParenToken, .LessThanToken, .GreaterThanToken, .PlusToken, .MinusToken, .AmpersandToken, .AmpersandAmpersandToken, .BarToken, .BarBarToken , .EqualsToken, .TemplateHead, .TemplateTail`,
      _isArtificial: true,
    },
    JSXTagTokens: token,
    identifiers: {
      ...identifier,
      name: 'identifiers',
      _isArtificial: true,
      selector: '.Identifier',
    },
    declarationIdentifier: {
      ...declaration,
      name: 'declarationIdentifier',
      _isArtificial: true,
      selector:
        '.Identifier.FunctionDeclaration, .Identifier.VariableDeclaration, .Identifier.ClassDeclaration, .Identifier.InterfaceDeclaration, .Identifier.ImportSpecifier ',
    },
    JsxTagName: declaration,
    JsxAttributeName: identifier,
    JsxSpreadAttribute: token,
  }
  return skin as any
}
