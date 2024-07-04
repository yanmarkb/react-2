### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React router is a library that allows you to handle routing in a React application. It allows you to define routes and render components based on the URL.

- What is a single page application?

A single page application is a web application that loads a single HTML page and dynamically updates that page as the user interacts with the application. This is done by using JavaScript to manipulate the DOM and update the page without needing to reload the page.

- What are some differences between client side and server side routing?

Server-side routing is when the server determines what content to send to the client based on the URL. The server sends a new HTML page to the client every time the URL changes. This causes the entire page to reload.

- What are two ways of handling redirects with React Router? When would you use each?

You can use the Redirect component to redirect to a different route. You can also use the history object to programmatically navigate to a different route. You would use the Redirect component when you want to redirect based on a certain condition or when you want to redirect declaratively. You would use the history object when you want to redirect a response to a user action.

- What are two different ways to handle page-not-found user experiences using React Router? 

You can use the Switch component to render a 404 page when no other routes match. You can also use the Route component with the exact prop to render a 404 page when no other routes match.

- How do you grab URL parameters from within a component using React Router?

You can use the useParams hook to grab URL parameters from within a component using React Router.

- What is context in React? When would you use it?

Context provides a way to pass data through the component tree without having to pass props down manually at every level. You would use context when you have data that needs to be accessed by multiple components at different levels of the component tree.

- Describe some differences between class-based components and function
  components in React.

Class-based components are ES6 classes that extend the React.Component class. They have a render method that returns the JSX to be rendered. Function components are just JavaScript functions that return JSX. They are simpler and easier to read than class-based components. Function components are also easier to test and optimize.

- What are some of the problems that hooks were designed to solve?

Hooks were designed to solve the problem of sharing logic between components. They allow you to reuse stateful logic without changing the component hierarchy. They also allow you to use state and other React features without writing a class.