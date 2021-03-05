# bliss-keyboard
An application that renders a keyboard of bliss symbols. The intention is to build
a performant npm package to allow for the integration of a bliss-keyboard into 
projects. Currently, there are roughly 1200 Bliss Characters and 4800 Bliss Words 
available.

Looking to use TypeScript and React

### Basic layout of the application
* Output Box 
  * This is where to output the bliss symbols
  * Needs to respond to keyboard (space, backspace and enter at least)
  * This is mandatory in the app
* Translation Box 
  * This is where to write the translations of the characters/words to
  * It sits under the Output Box
  * Use a property to turn this component visibility on or off
* Search Box
  * Text input that limits displayed characters/words/diacrtics in the Characters box
  * Use a property to turn this component visibility on or off
* Flags Box
  * List flags for all translation languages
    * English
    * Swedish
    * Norwegian
    * Finnish
    * Hungarian
    * German
    * Dutch
    * Afrikaans
    * Russian
    * Latvian
    * Polish
    * French
    * Spanish
  * The chosen flag influences the translation, and the search language as well as
    the language used in the roll over tooltips for each character and finally for
    the alt tags for each symbol (and any accessibility text included)
  * You can use a property to set a default language
  * Use a property to turn this component visibility on or off this can be turned
    off while a default language is set
* Header Menu Box 
  * Start with the initial symbols
  * Each symbol represents a hidden tree of sub menus
  * This is a mandatory component
* Characters Box 
  * Output for characters/words returned from menu selection or searching
  * Each character gets a tooltip with the default language used to indicate the 
    character
  * Need to indicate on each key a colour tab representing the POS colour
  * Need to indicate where in the tree structure the user is as well as letting them
    return to a higher up menu
  * This is a mandatory component

### Tasks

* Figure out how to consume the icon font
* Create indicator menu
* Confirm all indicators are used in the final menu for a character
* When visible, look through every menu and group/order symbols
  * Roughly maneuver symbols into 15 groups of about 70
  * Count both Tier 2 and 3 together to get the 70 number
* Create key containers for words


* Plan Additional Sections Functionality


* Tests
  * Create tests for all of this work
  

* Accessibility
  * Read up on accessibility
  * Support all tools supporting hard of hearing 
  * Support all tools supporting poor eye sight
  * Support highest level of web accessibility WCAG 2.0 AAA
  

* Further down the line
  * Connect characters to their equivalent on the keyboard
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



