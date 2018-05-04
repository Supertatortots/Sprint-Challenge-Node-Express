# Review Questions

## What is Node.js?

An environment for server running, using asynchronous programming, it can run fairly smoothly.

## What is Express?

A framework meant to help with Node development, helps with setting up routes, storing memory, etc.
It can potentially help cut down lines of code and prevents you from having to repeat lines.

## Mention two parts of Express that you learned about this week.

Express has built-in middleware, like express.json. Using express, routing can be made fairly easily.

## What is Middleware?

A set of functions that have access to requests and objects and can change them before sending them out. It can also set up error messages if something goes wrong.

## What is a Resource?

Anything that is sent to the client.

## What can the API return to help clients know if a request was successful?

A variety of status codes that can inform the client if something went wrong.

200-299 = Successful
300-399 = Redirection
400-499 = Errors on the client's part
500-599 = Server errors 

## How can we partition our application into sub-applications?

By setting the folder structure by type or by feature, making it easy to go through and set up the routes.

## What is CORS and why do we need it?

Middleware that allows clients to access the server from a different domain.
