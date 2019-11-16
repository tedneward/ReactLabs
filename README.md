# ReactLabs
This is a series of steps towards doing the Hands-On-Labs for ReactJS training. Each lab step is in its own Git branch, so that each step can be done independently if desired.

## Final: Done! (for now...)

You're done! We have a functional(-ish) CRUD React front-end that knows how to display, upvote, and create new jokes. What more can the world ask of us?

As it turns out, plenty:

* *The UI, seriously? Not even my mom would love this.* Clearly the application needs some kind of CSS love here, and [React Bootstrap](https://react-bootstrap.github.io/) is exactly the kind of Bootstrap-CSS-love that this application needs. Get started with `npm install react-bootstrap bootstrap` and then we can start using some nice clean-looking UI controls in the now-familiar React style.

* *The data disappears on each refresh, seriously?* Obviously in a real-world application we don't want our jokes to disappear from memory each time, and we would probably want to save and restore them from some kind of API-based database. Writing the server-side version is pretty clearly outside the scope of a React workshop, but having React `fetch()` the jokes from a server and use that as the list of jokes to display is pretty reasonable. React has a number of possible answers here, and even [has a FAQ on AJAX calls](https://reactjs.org/docs/faq-ajax.html), but most people consider this to be the entry point into a larger topic: state management across the entire application. This is the realm of [Redux](https://redux.js.org/), which is another highly-functional (and -opinionated!) way of capturing all state into a single place for easier cognitive load and manipulation.

* *The component design, seriously?* Not everybody agrees with the way we currently do edit and display in the same component--some will argue that it needs to be broken out into separate components, and an entirely new "page" (or some portion of it) should be swapped into place to allow people to create new jokes. Additionally, it's not uncommon to want to "swap in" different components depending on the URL that a user highlights, a la the traditional "Master-Detail" application. This is the province of [React Router](https://reacttraining.com/react-router/).

Of course, there's a whole host of other things you could do to expand this application even further, but let's not lose sight of the fact that it's served its given purpose: it helped you learn React! Take a bow, close up your laptop, and go have a beer or something. You've earned it.