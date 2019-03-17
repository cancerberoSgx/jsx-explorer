# JSX Explorer

(https://cancerberosgx.github.io/jsx-explorer/)[JSX Explorer Playground]
Playground to Write, parse, analyze, visualize JSX/TSX code in several ways: 

 * Elements Explorer shows the result JSX expressions translated to React.createElement() or similar call.
 * JSX AST Explorer shows the abstract syntax tree of the JavaScript code
 * Gallery and editor of JSX syntax highlight

Based on:

 * TypeScript
 * monaco-editor
 * jsx-alone
 * ts-simple-ast
 * react
 * redux
 * redux-sagas
 * bulma.css

Dev tools based on:

 * parcel
 * fs-to-json
 * jest
 * jest-puppeteer-to-have
 

# TODO

 * finish src/codeWorker/typeStructure.ts and put it in another repo
 * syntax highlight could be improved : by using hierarchy we dont repeat classes and we have more flexibility - test if monaco supports it - is monaco supports adding a classname to a range ?
 * another explorer that shows emitted js code with the createElements
 * use monaco to highlight html snippets : https://microsoft.github.io/monaco-editor/playground.html#creating-the-editor-syntax-highlighting-for-html-elements

 * issue to ts-simple-ast: getEndLinePos doesn't exist
 * idea for better representing and understanding Types: could be a feature for ts-simple-ast Type.getStructure() : see src/codeWorker/typeStructure.ts 
# Notes
