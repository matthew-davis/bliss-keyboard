# bliss-keyboard
An application that renders a keyboard of bliss symbols.

## Current idea for loading SVG files
Setup @svgr/cli
transform all svg files in assets/bliss_svg_id (probably test with a smaller group)
  use the -icon flag
  use the typescript flag
  Look through other flags
Remove custom.d.ts
Remove @svg/webpack

## Basic layout of the application
Output Box (where to output the bliss symbols to)
Translation Box (where to write the translations to under the output box)
  Use a switch for the translation box
Header Menu Box (start with the initial symbols)
Flags Box (list flags for all translation lagnauges)
  This guides the translation language and the search language 
Search Box text input that takes text and translates into symbols in the Characters box
Characters Box (output of the menu selection or search box)
