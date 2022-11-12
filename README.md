# bliss-keyboard
An application that renders a keyboard of bliss symbols. The intention is to build
a npm package with typescript and react to allow for the integration of a bliss-keyboard 
into projects. Currently, there are roughly 1200 Bliss Characters and 4800 Bliss Words 
available.

There are 7 key elements to the keyboard, from the bottom up there is the keyboard itself.
Symbols are mapped onto a keyboard which can either be clicked with a mouse or a button
press. Next there is a small display listing the users menu level. A display of the 
definition of the hovered over character, and a selection of language which will affect
the language of all related sections. Above that a search selection which not
only searches the characters, but also words and allows the user to add them into their
message. A translations section that displays a one to one translation of the characters
selected. Then finally an output that displays the characters as they are selected.

The symbols are arranged in a three tier menu system. The first menu or a home menu 
dictates the overall shape or theme of them objects in the next menu. Examples include
a long vertical line or animals. Then from the second menu you choose the specific 
symbol you'd like to pick which leads on to a third menu displaying that specific 
symbol with a series of diacritical marks that can be either chose or not from.

Finally clicking on a symbol in the diacritical menu will type the symbol in the
output.

### Tasks

* Look at the kerning of characters
* Create a npm library
* Support the highest level of web accessibility WCAG 2.0 AAA

### Keyboard Changes/Justification
I started with the bliss-keyboard from owencm:
[https://github.com/owencm/bliss-keyboard](https://github.com/owencm/bliss-keyboard)

This keyboard appears to be arranged roughly by shape. This seems logical as
bliss symbols appear to be derived from common shapes. The above keyboard however, does
not include all the symbols, and it had a habit of including symbols twice if it
made sense in multiple locations. I removed the duplicates and included all missing
symbols.

I considered breaking up the symbols by the POS colours, but the distribution of the 
colour types are very uneven across the characters.

The keyboard layout was stolen from this work by Gregory Schier:
[https://codepen.io/gschier/pen/VKgyaY](https://codepen.io/gschier/pen/VKgyaY)
