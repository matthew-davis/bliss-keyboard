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
  * Add unused symbols (that fit) into the tier 2 menus
  * Group remaining symbols into Tier 3
  * Roughly maneuver symbols into 15 groups of about 70
    * Count both Tier 2 and 3 together to get the 70 number
  * Build special character menu
    * Create svgs for space, backspace and enter
    * Connect these special characters to their equivalents on a keyboard
    * If easy connect numbers and letters to their respective keys as well
    * Also punctuation
  * Create function to return list of character IDs from a character ID 
    * Also create ability to fetch home and special character menus
  * Create function to return the parent menu of any ID
  * Confirm all indicators are used in the final menu for a character
  * Confirm there are no duplicates on the keyboard
  * When visible, look through every menu and group/order symbols

* Structure
  * Block out the html sections for the various components in teh keyboard
  * Set up the props required to turn off and on the display of certain components
  * Create key containers for each of the characters
  * Create key containers for words
  * Build functionality to display them flexibly and responsively
  * Create tree navigation/indicators 
  * Build in the colour coding for each of the keys
  * Figure out how to consume the icon font
  
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




