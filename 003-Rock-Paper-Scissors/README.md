# Rock Paper Scissors

A simple rock, paper and scissors game for your browser.

### Why did I go off instructions?
First thing I noticed when I started this project was how as soon as loading the page the prompt would pop up before I could open the console.  The only option was to cancel the dialog, open the console and reload the page.  This really bothered me.

Using some of the code from the 'What Went Wrong?' from the previous lesson I decided to implement a basic gui.

Due to the fact that the game was now event driven, it didn't make sense to use loops.

As well I added some basic functionality for resetting the game, rather than having to reload the page.

I was intending to style it up and make it pretty then found the following at the bottom of the instructions:

"When making interactive projects, like this one, you might be tempted to add more features, improve interactivity, user experience, design and styling of your website, and so on.

We recommend not doing that, and saving this effort for your portfolio projects."

I couldn't help but laugh cause they called me on it.

As well, due to the fact that I am trying to keep all my Odin Project work in a single repo I posted the live solution to my own domain at https://rock-paper-scissors.nullrider.com

# UPDATE
Update gui to use a basic implementation of Tailwind CSS.  There was no additional functionality added because it didn't seem to need it.

Among UI changes:
* Dark mode
* Centered elements
* Better use of flexboxes for mobile response
* Added clipart images for the user selection buttons
* Added 'round result' area to better show the user the results
    * Images for both player and computer choice
    * Borders change color based on who won or if it was a tie

Overall a much better user experience!
