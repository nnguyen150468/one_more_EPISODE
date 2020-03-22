Required Features 🎯
[ ] The user can see the top 20 "Currently Playing" movies on a page.
[ ] For each movie, the user can see the Movie Title, Year, Rating, and Poster.
[ ] The user can see this information clearly on devices of various screen sizes.
[ ] The user can see "more" movies by tapping a "See More" button at the bottom.




*** Planning:
Planning your move from the beginning helps save a ton of time later. Think about:

What are the major components?
What are the props for each component? What component will be its parent?
What state should each component hold? Should it have a state, or should it just be a dumb component?
Be flexible. In the process, if you found the component either too big or too small, you could always break it down to smaller components, or combine it with other components.
Decide what you should put in your state. How each Component state will interact with one another?
Sketch through your component, its position and how it would render on the page.



Rockets 🚀
[ ] The user can enter a term into a search box to filter the currently loaded movies by search term. E.g.; the user can type "mar" and the results are reduced to show "Captain Marvel".
[ ] The user can change the "source" from "Currently Playing" movies to "Top Rated" movies (or any other of the endpoints supplied by MovieDB).
[ ] Sort by Rating and Popularity (from Lowest to Highest and Vice Versa)
[ ] Have Year, Rating as a slider. Change the display dynamically when the slider is changed. You could use React Input Range package for this task.
[ ] Pagination: Replace the "See More" with a page control, with a previous and next Button at the end. Click it will move user to the next 20 (or previous 20) movies. Remember at first load, the Previous button should be disabled.

In addition to Previous and Next, use Number Pagination. Click on Number 3 will get them to Page3 and display movies 61st - 79th.

For each movie, include a link (movie/id) to display the full Movie Info on another page (URL). Use React Router for this. You'll also have to figure out how to retrieve the parameters from the URL. This last one is a topic that we'll discuss in depth next week, but feel free to get acquainted now. :)
