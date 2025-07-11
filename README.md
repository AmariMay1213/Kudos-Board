
## Unit Assignment: Kudos Board

Submitted by: **Kenna Nyuga, Amari May, Jessica Obi**

Deployed Application (optional): N/A

### Application Features

#### CORE FEATURES

##### Home Page

- [x] **Home Page Display**
  - [x] Home page includes the following features:
    - [x] Header
    - [x] Banner
    - [x] Search bar
    - [x] List of boards
    - [x] Footer
- [x] **Display Boards**
  - [x] Users can view a list of all boards in a grid view on the home page.
  - [x] For each board displayed, users can see:
    - [x] An image/gif
    - [x] A board title
- [x] **Filter Boards**
  - [x] Home page includes navigation bar, drop down, or some other mechanism which allows users to filter boards by the following categories:
    - [x] All/Home (displays all boards)
    - [x] Recent (displays the 6 most recently created boards)
    - [x] Celebration
    - [x] Thank you
    - [x] Inspiration
  - [x] When a category is clicked, boards matching the specified category are displayed.
- [x] **Search Functionality**
  - [x] Users can use a search bar to search for boards by title on the home page.
  - [x] The search bar should include:
    - [x] Text input field
    - [x] Submit/Search Button
    - [x] Clear Mechanism
  - [x] Boards with a title containing the search query in the text input field are displayed in a grid view when the user:
    - [x] Presses the Enter key
    - [x] Clicks the Submit/Search button 
  - [x] User can delete all text from the text input field. 
  - [x] When all text is cleared from the text input field, all boards are displayed in a grid view
- [x] **View Board** 
  - [x] Users can click on a board in the grid view to navigate to a new page containing that board's details.
- [x] **Add New Board**
  - [x] Users can create a new board on the home page.
  - [x] When creating a new board, users can specify the:
    - [x] Title (required)
    - [x] Category (required)
    - [x] Author (optional)
  - [x] Items listed as required above must have a value to succesffuly create a new board.
  - [x] When the board is successfully created, it appears in the grid of boards. 
- [x] **Delete Board**
  - [x] User can delete boards on the home page. 
  - [x] When the board is deleted, the board disappears from the grid of boards. 

##### Board Page

- [x] **Display Cards**
  - [x] For a given board, the board's page displays a list of all cards for that board in a grid view.
  - [x] For each card should displayed, users can see the card's:
    - [x] Message
    - [x] Gif 
    - [x] Number of upvotes
    - [x] Delete button
- [x] **Add New Card**
  - [x] Users can make a new card associated with the current board. 
  - [x] To successfully create a new card, users must specify the following:
    - [x] Text message (required).
    - [x] A gif users can search for and select within the form using the [GIPHY API](https://developers.giphy.com/docs/api/) (required).
  - [x] Users are given the option to specify the author of the card.
  - [x] When the new card is successfully created, it appears in the grid of cards. 
- [x] **Upvote Card**
  - [x] Users can upvote a card.
  - [x] Update the vote count on the card tile when a user clicks the upvote icon.
  - [x] When the upvote icon is clicked the upvote count increases by 1. 
  - [ x A user can upvote a card multiple times. 
- [x] **Delete Card**
  - [x] Users can delete cards.
  - [x] When the user clicks the delete button for a card, the card disappears from the grid of cards. 


####  Stretch Features

- [ ] **Deployment**
  - [ ] Website is deployed via Render.
- [ ] **Comments**
  - [ ] Users can add comments to cards.
  - [ ] To successfully add a comment, users must specify a text message body.
  - [ ] Users are given the option to specify the author of the comment.
  - [ ] Users can view comments on card in a pop-up modal that displays the card's:
    - [ ] Text message 
    - [ ] Gif
    - [ ] Author (if specified)
    - [ ] A list of the card's comments and each comment's:
      - [ ] Message body
      - [ ] Author (if specified)
  - [ ] Users can add multiple comments to a single card.
- [ ] **Dark Mode** 
  - [ ] Users can toggle between light mode and dark mode using a button displayed on the:
    - [ ] Home Page
    - [ ] Board Pages
  - [ ] When the button is clicked, the color theme switches to the opposite of the current mode. 
  - [ ] When dark mode is enabled:
    - [ ] Text and icons use a light color
    - [ ] The background uses a dark color
    - [ ] Color contrast has at least a 4.5:1 ratio using this [color contrast checker](https://webaim.org/resources/contrastchecker/)
  - [ ] When light mode is enabled:
    - [ ] Text and icons use a dark color
    - [ ] The background uses a light color
    - [ ] Color contrast has at least a 4.5:1 ratio using this [color contrast checker](https://webaim.org/resources/contrastchecker/)
  - [ ] The chosen mode (light or dark) persists when navigating from home page to board pages and vice versa.
  - [ ] When the user first visits the site the theme defaults to light mode.
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS**: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast in both light and dark mode. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it. 
- [ ] **Pinned Cards**
  - [ ] Users can pin a card to the top of the board.
  - [ ] A Pin button is displayed on each card.
  - [ ] When the user clicks the Pin button of an unpinned card:
    - [ ] The card moves to the top of the grid view for that board.
    - [ ] There is some visual feedback to indicate a card's pin status (e.g., a pin icon, a border highlight).
    - [ ] The pin action is saved so that the card remains pinned after page refreshes.
  - [ ] When the user clicks the Pin button of a pinned card:
    - [ ] The card returns to its original position in the grid based on its creation time or to the end of the grid.
    - [ ] The card's pin status (e.g., a pin icon or highlight)  is removed.
    - [ ] The unpin action is saved so that the card remains unpinned after page refresh.
  - [ ] Pinned cards always appear at the top of the board, above unpinned cards.
  - [ ] If multiple cards are pinned, they maintain their pinned order based on the time they were pinned.
    - [ ] More recent pins should appear first.
- [ ] The pinned state of a card persists when:
  - [ ] navigating away from and back to the board.
  - [ ] refreshing the page. 
- [ ] **User Accounts**
  - [ ] Users should be able to log in with a username and password.
  - [ ] Users should be able to sign up for a new account.
  - [ ] Boards and cards should be associated with a user.
    - [ ] Anonymous cards or cards by guest users should still be allowed.
  - [ ] Add a new filter option on the home page to display only the current user's boards.
  - [ ] Allow boards to be deleted only if they are owned by the user.


### Walkthrough Video
https://www.loom.com/share/deddac96645540d5b0dbade46f1bd872?sid=e212f37c-b553-4ce7-841b-a0f5bf2a327a


### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete* 

We did not have labs this week, but we do think that the previous projects and labs were very helpful for this project. We were able to look at Flixster and Student Store to help with our CSS for the modals and utilizing an API. We felt a little bit unprepared to complete the connecting of the database just because it was relatively difficult to do individually, and then the complexity of working in a team for the first time also seemed like it would be a barrier.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
Kenna - If I had more time I would clean up the CSS and utilize divs better so that the stlying was more cohesive. I would also try and add a light and dark mode because that is a great accessibility feature I would like to increase my experience in.
Amari - If I had more time I would complete the user authentication functionality. I set it up in the backend, but it created a blocker when we were trying to connect and test out frontend, so we didn't end up utilizing the routes.
Jessica - If I had more time I would add a comment section to the modals so that users are able to react and communicate more inside of the boards and the cards they are making. 

We all also agreed that we would want to host this using Render because it would have been great practice and a learning opportunity.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Our project demo went well. We were not finished when we demoed, but we gave a great presentation, described as staying north of neutral, to showcase what we had done and what we planned to fix. At the point of our presentation, we only had the create board modal, search bar (no functionality), categories such as all, recents, thank yous(no functionality), and some CSS for the modals and page. Despite this, we were able to share what we felt was our next steps. In the 4 hours after our presentation, we were able to get the images on cards working, search functionality, category functionality, the names on the card to display on the board, and the delete board button to work. We plan to finish the project, but we are not on track to do that on time.

### Open-source libraries used

- Add any links to open-source libraries used in your project.
- ChatGPT.com
- w3schools.com
- PostMan
- https://publicapi.dev/lorem-picsum-api
- https://developers.giphy.com/

### Shout out

A huge thank you to all the instructors, Lucia, Keith, and Alex, for being quick and willing to help us while we were stressed and had major setbacks. Thank you to our mentors for always giving us guidance and grace as we are navigating fullstack development
as a team for the first time. Thank you to all our peers for always being encouraging and lending a helping hand.
