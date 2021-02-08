# bliss-keyboard
An application that renders a keyboard of bliss symbols. The intention is to build
a performant npm package to allow for the integration of a bliss-keyboard into 
projects. Currently, there are roughly 1200 Bliss Characters and 4800 Bliss Words 
available.

Looking to use TypeScript and React

### Basic layout of the application
* Output Box 
  * this is where to output the bliss symbols
* Translation Box 
  * this is where to write the translations to
  * it sits under the Output Box
  * Use a switch to turn this on or off
* Header Menu Box 
  * start with the initial symbols
  * Each symbol represents a hidden tree of sub menus
* Flags Box
  * list flags for all translation languages
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
  * The chosen flag influences the translation and the search language
  * Use a switch to turn this on or off
* Search Box 
  * text input that limits displayed characters in the Characters box
* Characters Box 
  * output of the menu selection or search box

### Ideas to include
* Adding in a default language property
* adding in properties to toggle the inclusion of the translation, search and 
  flag boxes
* Need to include a tooltip, or some other way to rollover a translation of the 
  individual symbols
* need to indicate on each symbol if it has a sub-menu or is the final character
