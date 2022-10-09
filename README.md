# bliss-keyboard
An application that renders a keyboard of bliss symbols. The intention is to build
an npm package to allow for the integration of a bliss-keyboard into projects. 
Currently, there are roughly 1200 Bliss Characters and 4800 Bliss Words available.

Looking to use TypeScript and React

### Tasks

OCTOBER

* Menus
  * Order each menu's characters
  
NOVEMBER

* Search
  * Create text input structure to accept characters
  * Write function to search definitions for matches (use the selected language)
  * Limit what is in the characters menu to search matches
  * Allow search to return words
  * Create key containers for words


* Languages
  * Create structure aesthetics for language list
  * Add in flags for each language
  * onMouseOver of each flag writes the language in the area where definitions
    go
  * Make that area available 100% of the time even if the definitions are
    turned off
  * Change keyboard key characters in response to language selection
  * Generate 13 (one for each language) keyboard character lists for each language

DECEMBER

* Accessibility
  * Read up on accessibility
  * Support all tools supporting hard of hearing
  * Support all tools supporting poor eyesight
  * Support the highest level of web accessibility WCAG 2.0 AAA
  * Ability to control size and stroke size of symbols


* Further down the line
  * Check if there are new symbols to be included
  * Settings page or menu to set the master values of translation, search, posColours, etc.
  * Work on cursorBlink function

### Keyboard Changes/Justification
I started with the bliss-keyboard from owencm:
[https://github.com/owencm/bliss-keyboard](https://github.com/owencm/bliss-keyboard)

This keyboard appears to be arranged roughly by shape. This seems logical as
bliss symbols appear to be derived from common shapes. This keyboard however, does
not include the symbols, and it had a habit of including symbols twice if it
made sense in multiple locations. I removed the duplicates and included all missing
symbols.

I considered breaking up the symbols by the POS colours, but the distribution of the 
types are very uneven across the characters.

The layout was stolen from this work by Gregory Schier:
[https://codepen.io/gschier/pen/VKgyaY](https://codepen.io/gschier/pen/VKgyaY)
