# ReactLabs
This is a series of steps towards doing the Hands-On-Labs for ReactJS training. Each lab step is in its own Git branch, so that each step can be done independently if desired.

## Lab 2: Show me the jokes!

We need to create a few "read-only" components to start, most notably a component that will display a Joke in all its splendor and glory. We'll add some event-handling functionality in the next lab, so for now, we focus on creating a few components that don't do anything beyond display at the moment: a header component, a footer component, a single-joke-display component, and a list-of-jokes component.

### Step 1: Header

Let's create a simple component that announces what this app is to all the world. This will be a completely static component, in that there will be nothing really to change or vary at the point of usage. As such, create a new file in the `src` directory called `Header.js`, and in it, create and export a function called `Header` that returns an h1 block that simply says "Welcome to RJoke!". Use this from the App component to display the header at the top of the JSX block.

### Step 2: Footer

Naturally, where there is a header, there must be a footer. The most important thing about a footer is that it must contain our copyright statement, which must always state the given year. As a result, our footer needs to calculate the current date, extract the year, and display that.

Create another new file, `Footer.js`, and within it, define and export a function called Footer that takes a props argument, and returns an h6 block that contains the text "Copyright", the passed props argument company, the text "(c) ", and the current year. Then put a Footer at the bottom of the App.js block, with a company name of your choice. Thus, if your company name is "Frankenware", the Footer should read "Copyright Frankenware (c) 2019".

### Step 3: JokeUI

Now we need a component that knows how to take a Joke. (Actually, it would be nice to have humans that know how to take a joke, too, but that's another problem for another day.)

Because it's usually good form to keep everything related to a single concept together in one place, we'll build our JokeUI component in the Joke.js file that you created in the last lab step. In that file, create and export a new class, JokeUI. The goal here is that when we see `<JokeUI joke={jokes[0]} />` (where the `jokes` array is the one we defined in App.js, for example), the display will (initially) display the joke's punchline. This one will take a few steps, so let's break it down.

* *Create the class to take a Joke as a prop.* Remember, when creating a React component as a class, the constructor needs to pass the props argument up to the base class (React.Component) for use and storage. (Note: If the constructor does nothing besides pass the props argument to its parent, you will get a warning about a "Useless constructor"; ignore that for now, because we will add some additional behavior to the constructor in upcoming lab steps.)

* *Have JokeUI display the punchline.* Create a `render` function that uses the props in the class to display a passed-in Joke's punchline. Note that if the Joke is passed as an object (as is the case in the example above), then the prop will be the Joke object and the punchline will be on the Joke object.

* *Use the JokeUI from App, just to test.* In between the Header and the Footer, put a JokeUI "tag" and reference the first joke in the jokes array, so you can test the JokeUI component.

### Step 4: JokeList

We know we have a collection of Jokes to display, so let's create a JokeList component that will display all of them in an unordered list. The list of Jokes will be passed to the component as a "jokes" prop, and we'll use the JokeUI component we just created to do the individual Joke display.

* *Create and export a JokeList class from `Joke.js`.*

* *Define a render() function that will display each Joke in a JokeUI.* The generally-preferred way to do this in React is to use the `map()` function defined on JS arrays to transform each Joke object in the array into a JSX expression. Note that each element in the rendered list must have a "key" attribute that uniquely identifies it in the list, and the `map()` function provides a second parameter to the callback that contains the index of the array element being used, making that perfect for a key. Render each Joke into an HTML `li` that contains a single JokeUI.

* *Use the JokeList from App.* Pass the jokes array into the JokeList, and verify that all of the jokes are being displayed.

## Finishing up

If you are not sure if you got it all to work, you can always fast-forward to the next lab by doing a `git checkout lab-3`. You may be required to do a `git stash` before the checkout in order to preserve your interim changes.