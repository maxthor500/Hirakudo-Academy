## Testing

Main [README.md](README.md)

#### Validation

- [W3C CSS validation](https://jigsaw.w3.org/css-validator/)
- [W3C Markup Validation](https://validator.w3.org/)
  - The developer used the **W3C CSS Validation Service** and **W3C Markup Validation Service** to check the validity of the website code.
- [JShint](https://jshint.com/) check the validity of the javascript code.
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

##### Error during the validation

- I checked every HTML file an error occurs in calendar.html from line 69 because <tr> tag has no cells beginning on it.
- The CSS files have no error.
- In every Javascript files there are warnings due to ES6 syntax.



**User Stories testing:**

- as a new user I am looking for a website where I can learn the names of the aikido techniques so that I can name the aikido techniques:
  - ​	the memory cards have 6 different techniques each game.
- as a user I want get to know the Master del Plato and where he practises so that I can know him better:
  - to click on the user icon and a modal open the description of the Master.
  - to click on the marker icon open a map.
  - on the map the users can see the positions of the dojos.
- as a recurring user I need to know where is located the aikido dojo so that I can find information at what time and where will take place the aikido lesson today:
  - to click on calendar icon the page with calendar loads and it show the today event and where it is.
- as a user I can find the name of 'aikido' in Japanese:
  - on the homepage there are an image with the aikido kanji.
- as a user I can use dark mode so that I can quickly turn the screen do dark whenever I want:
  - the adjust icon works on every page.
- as a user I can contact the website founder so that I can send him a message if I want know more about the website or aikido:
  - to click on envelope icon open a modal with a form.
  - the user can send a form and I get a message from EmailJS with the message, the name and mail of the user.
  - when the user send request an alert says him the "Your request is sent!", otherwise I get an error.
- as a user I can use the map so that I can check the map of all the earth:
  - the users can zoom and pan the map.
- as a user I can find how looks like the logo of the Hirakudo Academy:
  - the Hirakudo Academy logo is on every pages.

**General Testing**

* Tested all internal links within the pages.
* Tested all buttons work.
* Tested the responsive behaviour of images and text on desktops, laptops, notebooks and various smartphones.
* Reduce and expand the width of the window to verify that each line of text behaves the way expected and that the text arrangement looks good on all device widths.
* CSS was put through a [CSS Autoprefixer](https://autoprefixer.github.io/) and the changes were added to the website.

**Navbar**

- Click on each navigation menu item and verify that it links to the correct page.
- Hover over call to action button and verify the hover colour change
- Change the screen size from desktop to tablet and mobile to verify that the navigation bar is responsive.
- Tested the logo linked back to the home page on all pages.

**Memory Game**

- Tests were done to ensure the Card Matching game functions as intended. This was done on desktop PC and mobile.
- The first screen to be seen on the Card Matching page will be a window describing to the player with instructions on how to play the game. Once the “Play” button is clicked, this window will disappear and the cards will appear, along with the Time, Attempts.
- The player has 60 seconds to find and match the cards. The timer decreases by 1 for each second correctly.
- Each click on a card will increase the Attempts counter by 1. This is also working correctly.
- When the player has found all matching pairs, the “victory” overlay will appear.
- When the timer reaches zero, the player has lost the game and the “Loss” overlay will appear along.
- When the user clicks either of the two overlays to restart the game, the “Time” and “Attempts” are reverted to their original state. 60 for the Time and 0 for the Attempts.

**Modals**

- The user icon opens a modal with description of Master Del Plato.
- The content of the modal is responsive.
- The modal is closed when clicking on [x] or outside of it.

**Map**

- The marker icon loads a page with the map.
- The dojos are indicating with an icon on the map.
- The map is responsive.

**Calendar**

- The calendar shows every days of the month.
- The user can check the event of the day.
- The current day is in evidence.
- The calendar is responsive.

**Form contact**

- Try to submit the empty form and verify that an error message about the required fields appears
- Try to submit the form with an invalid email address and verify that a relevant error message appears
- Try to submit the form with all inputs valid and verify that a success message appears.
- Try to to submit the form with all inputs valid to verify the emailJS works and I receive the template.
- Reduce and expand the width of the window to verify that the form display behaves and centres the way expected and that it looks good on all device widths.

**Dark Mode**

- If the users press the adjust icon every elements change look.
- When the adjust icon is pressed the dark mode is active in every pages.
- The users are able to disable the dark mode from every pages.

#### Bug

- the map and the calendar don't open modals but load different pages.
- On the mobile the techniques of the cards is turned of the 90 degree.
- The calendar shows the events of today. The users don't have feedback when pressing another day.
- When on the mobile, the users open the navbar menu of the map page the map is covered.