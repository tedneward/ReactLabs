# ReactLabs
This is a series of steps towards doing the Hands-On-Labs for ReactJS training. Each lab step is in its own Git branch, so that each step can be done independently if desired.

## Lab 3: Play with me!

Our app is now displaying jokes, but the Product Owner remains unimpressed. "I want to be able to upvote the jokes that I found made me laugh, and the CEO wants to be able to upvote the jokes that are really, really bad, probably so that we can highlight those on the home page or something. And showing the punchlines without the setup text is not what we want. Show the setup text, but hide the punchline until the user clicks on it." Clearly we need to add some interactivity to the app. Ready?

### Step 1: Modify JokeUI to hide the punchline

We need to modify the JokeUI to display the setup text, hide the punchine behind some clickable text, and display LOLs and Groans for the Joke. All these changes should be scoped entirely to the JokeUI component, so if we did our job right, JokeList (and App) will not need to be touched while we do this.

* *Modify `render` to return a new UI.* Since this is now getting more complicated, have `render` return a JSX expression that renders each Joke as a paragraph, with spans for setup, punchline, LOLs, and Groans. Put a line break between setup and punchline, and between punchline and LOLs/Groans. (Depending on how you format your code, you may want to put a `&nbsp;` in between LOLs and Groans so they appear nicely on the same line.)

* *Add a state for visibility.* Whether or not the punchline is visible is something that will change as the component is used, so it needs to be state (as opposed to props). In the constructor, add a like to assign an anonymous object to `this.state`, with that anonymous object containing one field, `visible`, which will start as false. Then, in the render() function, render either "CLICK TO REVEAL" if `this.state.visible` is false, or the joke's punchline if it is true.

* *Add a click handler to flip visibility on and off.* Create a method on JokeUI called handlePunchlineClick to be called when somebody clicks on the punchline span. (Don't forget to bind() the method, which is usually done in the constructor.) This should just set the `visible` state to be the inverse of whatever it currently is.

### Step 2: Create an Upvote component

Next we need a component to track the upvotes that a given joke gets. This is actually entirely non-Joke related, so we want to design it so that it could be reused in other contexts. That means that (a) the Joke will not be passed to the Upvote component, but also (b) the Upvote component has to be able to tell the JokeUI when somebody "upvotes", so that the JokeUI can nudge the Joke's LOL or Groan count up one. Strap yourself in, this may take a bit longer than other steps have before now.

* *Create a new Upvote component.* For convenience's sake, you can do this in Joke.js, but ideally it should be in its own file (Upvote.js). We can always do that refactoring later, though, so for right now, let's just work entirely inside Joke.js. Create and export a class, UpvoteCounter. 

* *Define the count.* UpvoteCounter needs to track the vote-count as state, but also be initialized to a new value via a prop of the same name.

* *Render the vote count.* Render the vote count display as a `span` of text that displays the current count from state. The `span` is necessary to wrap the text and a clickable button indicating that it can be upvoted; you can use the Unicode codepoint `&#x25B2;` (&#x25B2;) to create a simple up-arrow, or wimp out and just use the caret, `^`, instead.

* *Define a click handler.* Create a method on the UpvoteCounter that, when invoked, bumps the current state count up by one and sets that as the new state. Wire up the button's onClick to the click handler.

* *Modify UpvoteCounter to invoke a user-defined function when a vote happens.* The Upvote needs to signal to components using it that the user has clicked to upvote, so we do that by capturing a new prop, "onVote", which is expected to be a function. In the click handler, check to see if it's defined and non-null, and if it is, invoke it.

* (This step is optional.) *Add defaultProps and propTypes to the UpvoteCounter.* In order to make the UpvoteCounter more robust, add a defaultProps to the UpvoteCounter to set the count to 0 if none is specified, and add a propTypes to the UpvoteCounter, as well, to ensure that count is always numeric.

* *Use UpvoteCounter in the JokeUI.* Put UpvoteCounter instances in for the LOLs and Groans. For each one's onVote, create a method (onLOLVote and onGroanVote) that will modify the joke state to bump the counts up one. Remember that React wants to replace the state, so a whole new Joke object that contains the new state is the preferred approach. (This will probably also require putting the joke into state, because we've not needed the joke to be in the state before now. Refactor accordingly, and remember that render() gets called repeatedly, so it will need to use the joke in state, not props, since the Joke object is now changing to reflect user actions.)

### Step 3: Making an editable JokeUI

We'd like to have some functionality to allow us to add jokes to the "database", which requires some kind of editing capability. (In other scenarios, it's common to want to edit an existing item, as well.) So we need to modify the JokeUI to allow for an "editing" experience, although we will purpose it towards allowing for the creation of new jokes in the system, rather than editing existing ones. (Adapting the code to allow for editing of the current joke is left as an exercise to the reader--which is usually "workshopSpeak" for "the instructor didn't want to do it".)

Almost all of the work we will do in this step will be in the JokeUI component, although we will add to the JokeList component as well (to add a button that will add a new Joke/JokeUI to the rendered list, but in an editable state). It is fair to note that there's a fair amount of debate as to the approach taken in here: some Reactians will argue that it should be split between two (or three) different components, to keep the code simpler. We prefer to see it as one component, to keep the code localized to one place, although it does add to the complexity. Feel free to experiment when the mood strikes you.

* *Modify the JokeList component to add to the list of jokes.* Let's start by adding a button to the bottom of the JokeList that will add a new, empty Joke to the end of its internal array and re-render. This will require moving the jokelist to the component's state. Note that the Array.concat() method appends an element to an existing array and returning the new array, making it an excellent candidate for use in the setState() call.

* *Add an `editing` value to JokeUI state.* This value will be a flag to decide whether we are in "editing mode" or not. Add it to the state in the constructor; if the Joke passed in has an empty setup and/or punchline, it means that we probably want to be in editing mode so set `editing` to true, otherwise set it false. (Note that "editing" and "visible" are two entirely separate and independent constructs; "visible" will never be consulted or used when editing.)

* *Refactor the render method into two methods.* We essentially want to render differently whether we are editing or not; pull all of the current code in render() into a renderDisplayUI() method, create an empty renderEditUI() method that we will fill in later, and in render(), call one or the other depending on the state of the `editing` value in state.

* *Have renderEditUI() to return a form.* The edit UI will need to return an HTML form as its JSX expression. The form will need to contain two text fields (we choose `textarea` tags since they allow for nice, long jokes), one for the joke's setup and the other for the punchline, and a "Finished" button to "submit" the form.

* *Have the form's onSubmit event handler call a onEditSubmit method in JokeUI.* Add the onEditSubmit method to the JokeUI, and make sure the form's onSubmit event handler calls it. In the onEditSubmit, set the JokeUI state to turn `editing` off (to false), and remember to prevent the event from "bubbling up" the DOM tree and move the browser to a new page. (This is done using the `preventDefault` method on the `event` object that is passed in to the event handler method.)

* *Have each of the textareas wire up their onChange to a JokeUI event handler.* Create two new methods in JokeUI, onSetupChange and onPunchlineChange. In these events, capture the value in the textarea after the change (which will fire on each and every keystroke, remember) and set it in the joke's setup or punchline properties, respectively.

## Finishing up

If you are not sure if you got it all to work, you can always fast-forward to the next lab by doing a `git checkout lab-4`. You may be required to do a `git stash` before the checkout in order to preserve your interim changes.