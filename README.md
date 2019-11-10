# ReactLabs
This is a series of steps towards doing the Hands-On-Labs for ReactJS training. Each lab step is in its own Git branch, so that each step can be done independently if desired.

## Lab 1: Empty React project and Domain Model

Our first step is to create the React project using a React tool that scaffolds out the most common arrangement of tools and source directories. While it's not required to do this, and you can start by using React in more of an ad-hoc manner, many people are building React applications from the ground up this way, so let's follow their path.

### Step 1: Create the React project

The "create-react-app" tool is a standalone npm package that provides us with a command-line program to get started. We need to grab that, and invoke it.

* *Install create-react-app.* From a command-line prompt, use npm to install create-react-app globally (`npm install -g create-react-app`). This may take some time (five minutes is generally the worst we've observed in the wild, depending on the quality of your WiFi).

* *Use it to create our application directory.* From your working directory, run `create-react-app rjoke`. This will create the `rjoke` directory and populate it with a scaffolded default application. (Note: if you are a fan of Typescript, you can pass "`--typescript`" to the command-line in order to generate the app to use Typescript instead of the usual ECMAScript; this is only recommended for those who are comfortable with both Typescript and ECMAScript, and we will not be covering Typescript in this workshop.) 

* *Start the app.* Just to verify everything worked as planned, run `npm start` from within the `rjoke` directory. It should start up a local web server and then bring up your default web browser connecting to [the running application](http://localhost:3000). Note that the web server continues to run in the background, and will refresh itself as it detects changes to your code.

* *Modify the default message.* Just for fun, modify the stock message ("Edit App.js and save to reload") to read "I am now a React developer!" in the `rjoke/src/App.js` file. Save it, and see it modified in the browser without any additional work required. This "edit-refresh" cycle is common in React. You are always free to shut the server down and restart, but generally a React app will not need that as often as a compiled-language application will.

### Step 2: Create a domain model

Next we need a domain model for our application. This will be a class called "Joke" that basically acts purely as a storage of data elements (sometimes referred to as a "DTO" or "Data Transfer Object"). This class will be pretty barebones, since we don't really have much in the way of domain logic (largely because we're keeping it simple to focus on the React parts!).

* *Create the domain class.* In a file called `Joke.js` in the `src` directory, define and export a class called `Joke`. It should have a constructor that takes a `setup`, a `punchline`, `lols` and `groans` as parameters, all of which are stored to the instance as fields. (The first two are intended to be strings, the second two, numbers.) Don't forget that ECMAScript 6 class syntax requires the use of `this` whenever referring to anything stored on the object instance.

* *Define the Joke list in the App.* In `App.js`, define an array of Joke objects as a local variable (call it `jokes`) to the `App` function. Put some of your favorite jokes into this array. Give each a few LOLs and groans just for variety.

Reminder: if the server is running, each time you save, it will try to reload the application and display it in the browser. If there are syntax errors, it will try to point out where those errors are, with varying degrees of success.

## Finishing up

If you are not sure if you got it all to work, you can always fast-forward to the next lab by doing a `git checkout lab-2`. You may be required to do a `git stash` before the checkout in order to preserve your interim changes.