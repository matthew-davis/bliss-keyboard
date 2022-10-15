# bliss-keyboard
An application that renders a keyboard of bliss symbols. The intention is to build
an npm package to allow for the integration of a bliss-keyboard into projects. 
Currently, there are roughly 1200 Bliss Characters and 4800 Bliss Words available.

Looking to use TypeScript and React

The symbols are arranged in a three tier menu system. The first menu or a home menu 
dictates the overall shape or theme of them objects in the next menu. Examples include
a long vertical line or animals. Then from the second menu you choose the specific 
symbol you'd like to pick which leads on to a third menu displaying that specific 
symbol with a series of diacritical marks that can be either chose or not from.

Finally clicking on a symbol in the diacritical menu will type the symbol in the
output.

### Tasks

OCTOBER

* Menus
  * Order 8 menus
  * Order 7 menus
  * Try to consolidate and remove smaller menus


* Languages
  * Create structure aesthetics for language list
  * Add in flags for each language
  * Function when a flag is clicked it updates the language selection
  * Generate 13 (one for each language) keyboard character lists for each language
  * Change keyboard key characters in response to language selection

NOVEMBER

* Search
  * Create text input structure to accept characters
  * Write function to search definitions for matches (use the selected language)
  * Limit what is in the characters menu to search matches
  * Allow search to return words
  * Create key containers for words
  * Add function to add words to messageState


* Definitions
  * Sort aesthetics of the component
  * Make that area available 100% of the time even if the definitions are turned off
  * onMouseOver of each flag writes the language in the area where definitions go
  * Add definition of last typed character
  * Change to the definition of the character being hovered over
  * If in the home menu the definition is the menu name
  * Including characters/words that pop up in search results

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
bliss symbols appear to be derived from common shapes. The above keyboard however, does
not include the symbols, and it had a habit of including symbols twice if it
made sense in multiple locations. I removed the duplicates and included all missing
symbols.

I considered breaking up the symbols by the POS colours, but the distribution of the 
colour types are very uneven across the characters.

The keyboard layout was stolen from this work by Gregory Schier:
[https://codepen.io/gschier/pen/VKgyaY](https://codepen.io/gschier/pen/VKgyaY)
