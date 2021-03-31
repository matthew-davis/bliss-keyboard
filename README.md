# bliss-keyboard
An application that renders a keyboard of bliss symbols. The intention is to build
a performant npm package to allow for the integration of a bliss-keyboard into 
projects. Currently, there are roughly 1200 Bliss Characters and 4800 Bliss Words 
available.

Looking to use TypeScript and React

### Tasks
* Keyboard
  * Look at ways to minimize number of element in each menu
  * Move each menu's items to all qualifying menus
  * Order each menu's items
  * Re-distribute all items and even them up: attempt home menu of 28 items (2 rows)
  * Re-distribute all items in sub-menus try to cap at 70 (5 rows)
  * In home menu instead of definition put the menu name 
  * Sub-menu items get their definition shown
  * Indicator menus get their definition with character definition shown
  * Improve the Level indicator, add the menu name in the left of the definition box: Home, Menu Name, Character Name Indicator


* Output
  * Need to build the output box structurally/aesthetically 
  * Need to build the ability to accept Characters and depict them
    * Perhaps an array of objects holding the character/indicator pair
    * Build functionality to translate this stream to characters
  * Need to set up function to type character when in the indicator menu
  * Need to build special functionality to respond to special characters
  

* Translation
  * Sort structure/aesthetics of the translation box
  * Create a translation using the first word in the series of words from the 
    definition for each character/word in the output box
  * Run this from the same character array that runs the output box


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
    

* Tests
  * Create tests for all of this work
  

* Accessibility
  * Read up on accessibility
  * Support all tools supporting hard of hearing 
  * Support all tools supporting poor eye sight
  * Support highest level of web accessibility WCAG 2.0 AAA
  

* Further down the line
  * Connect special characters to their equivalents on a keyboard
  * If easy connect numbers and letters to their respective keys as well
  * Also punctuation

### Keyboard Changes/Justification
I started with the bliss-keyboard from owencm: 
[https://github.com/owencm/bliss-keyboard](https://github.com/owencm/bliss-keyboard)

This keyboard appears to be arranged roughly by shape. This seems logical as 
bliss symbols appear to be derived from common shapes. This keyboard however, does
not include the symbols, and it had a habit of including symbols twice if it 
made sense in multiple locations. I removed the duplicates and included all missing 
symbols.

I considered using the POS colours, but the distribution of the types are very uneven
across the characters.
