import * as React from 'react'

function sample() {
  const name = 'Rambo',
    suffix = 'Mister'
  return (
    <div className="simple2">
      Hello
      <span dangerouslySetInnerHTML={{__html: `\n<strong>${suffix}</strong>\n<em className="name">${name}</em>\n`}} />!
    </div>
  )
}
