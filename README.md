# bliss-keyboard
An application that renders a keyboard of bliss symbols. The intention is to build
a performant npm package to allow for the integration of a bliss-keyboard into
projects. Currently, there are roughly 1200 Bliss Characters and 4800 Bliss Words
available.

Looking to use TypeScript and React

### Tasks

SEPTEMBER

* Remove unecessary junk from project (web vitals etc)

* Keyboard
  * Given a list of character keys write them to the keyboard
  * Write characters to the keyboard keys instead of their keys
  * Add the POS colours to the keys
  
  * Aiming to group 35 base character shapes to a home-menu
  * Each home-menu character then relating to 35 characters in a sub-menu
  * Each sub-menu character then has a diacritic-menu 
  * Order each menu's characters
  
  * Create a function that takes a home/sub menu character and moves down a menu
    * Create a function that lets you move back up menus with the menu up button
  * Find a way to define/indicate the menu level (home, sub, diacritic)
  
  * Write keyboard tests

OCTOBER

* Output
  * Need to build the output box structurally/aesthetically
    * Add in a blinking cursor vertical line
  * Need to build the ability to accept Characters and depict them
    * Perhaps an array of objects holding the character/indicator pair
    * Build functionality to translate this stream to characters
  * Need to set up function to type character when in the indicator menu
  * Need to build special functionality to respond to special characters (space, backspace and return)
  * create output tests

* Translation
  * Sort structure/aesthetics of the translation box
  * Create a translation using the first word in the series of words from the
    definition for each character/word in the output box
  * Run this from the same character array that runs the output box
  * create translation tests

NOVEMBER

* Search
  * Create text input structure to accept characters
  * Write function to search definitions for matches (use the selected language)
  * Limit what is in the characters menu to search matches
  * Allow search to return words
  * Create key containers for words
  * Create search tests


* Languages
  * Create structure aesthetics for language list
  * Add in flags for each language
  * onMouseOver of each flag writes the language in the area where definitions
    go
  * Make that area available 100% of the time even if the definitions are
    turned off
  * Change keyboard key characters in response to language selection
  * Generate 13 (one for each language) keyboard character lists for each language
  * Create language tests

DECEMBER

* Accessibility
  * Read up on accessibility
  * Support all tools supporting hard of hearing
  * Support all tools supporting poor eyesight
  * Support the highest level of web accessibility WCAG 2.0 AAA


* Further down the line
  * Connect special characters to their equivalents on a keyboard
  * If easy connect numbers and letters to their respective keys as well
  * Also punctuation 

### Keyboard Changes/Justification
I started with the bliss-keyboard from owencm:
[https://github.com/owencm/bliss-keyboard](https://github.com/owencm/bliss-keyboard)

The layout was begun from this work by Gregory Schier:
[https://codepen.io/gschier/pen/VKgyaY](https://codepen.io/gschier/pen/VKgyaY)

This keyboard appears to be arranged roughly by shape. This seems logical as
bliss symbols appear to be derived from common shapes. This keyboard however, does
not include the symbols, and it had a habit of including symbols twice if it
made sense in multiple locations. I removed the duplicates and included all missing
symbols.

I considered breaking up the symbols by the POS colours, but the distribution of the 
types are very uneven across the characters.
