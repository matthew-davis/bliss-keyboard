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
  * Each character gets s tooltip with the default language used to indicate the 
    character
  * Need to indicate on each key a colour tab representing the POS colour
  * Need to indicate where in the tree structure the user is as well as letting them
    return to a higher up menu
  * This is a mandatory component

### Tasks
* Menu Logic
  * Add menu level indicator on the left side
    * Have this look like an up arrow with a small diacritic
      * H (small version) for Home Menu
      * 2 (small version) for Second Tier Menu
      * 3 (small version) for Third Tier Menu
      * I (small version) for Indicator Menu
  * Add ability to go up a level by clicking level indicator (disabled at Home)
  * Add in Special menu stacked on top of each other on the right side
  * Do the math to make the buttons 16 wide (using calc() in CSS)
  
* Structure
  * Block out the html sections for the various components in the keyboard
  * Set up the props required to turn off and on the display of certain components
  * Create key containers for each of the characters
  * Create key containers for words
  * Build functionality to display them flexibly and responsively
  * Build in the colour coding for each of the keys
  * Figure out how to consume the icon font
  
* Finish Menu
  * Create indicator menu
  * Link indicator menu to final character selection in menu functions
  * Confirm all indicators are used in the final menu for a character
  * When visible, look through every menu and group/order symbols
    * Roughly maneuver symbols into 15 groups of about 70
    * Count both Tier 2 and 3 together to get the 70 number
  * Connect characters to their equivalent on the keyboard
    * Connect these special characters to their equivalents on a keyboard
    * If easy connect numbers and letters to their respective keys as well
    * Also punctuation

* Tests
  * Create tests for all of this work
  
* Accessibility
  * Read up on accessibility
  * Support all tools supporting hard of hearing 
  * Support all tools supporting poor eye sight
  * Support highest level of web accessibility WCAG 2.0 AAA

### Colour Details
Red: #f9c7b0
Green: #dce8ba
Blue: #d6ecf7
Yellow: #fee885
Grey: #cccccc
White: #ffffff

Mark each key with a coloured strip across the top corresponding to it's 
POS and the above colours

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



