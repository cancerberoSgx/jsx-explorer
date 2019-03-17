import {Theme} from '../store/types'
import {css} from '../util/media'

export function globalStyles(theme: Theme) {
  return `
body *::-webkit-scrollbar {
  width: 0.8em;
}
body *::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px ${theme.colors.bg}66;
}
body *::-webkit-scrollbar-thumb {
  background-color: ${theme.colors.fg}66;
  outline: 1px solid ${theme.colors.bg}66;
}

${css('.modal .modal-card', `width: 100%;`, `width: 80%;`)}

.tabs.is-small {
  margin: 0;
}
.media, .media .media, .media .media .media {
  padding: 0;
  margin: 0;
  border: 0;
}
.media table td {
  border: 0;
  border-width: 0;
  padding: 0;
}
.media table, .media table:not(:last-child) {
  width: 0;
  margin: 0;
}
.media table caption {
  text-align: left;
  vertical-align: bottom;
}
.navbar .navbar-burger {
  font-weight: bolder;
  font-size: 1.1em;
}


${css('.section', `padding: 0; margin: 0;`, `padding: 0 1.5em;`)}

.navbar-dropdown.collapsed{
  height: 10px;
  overflow: hidden;
  transition: height 600ms ease-out;
}
.tile.is-ancestor:last-child , .tile.is-ancestor {
  margin: 0;
  padding: 0;
  margin-top: -2em;
}
`
}
