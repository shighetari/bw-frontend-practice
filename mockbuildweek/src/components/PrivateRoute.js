import React from "react";
import { Route, Redirect } from "react-router-dom"; //added Redirect for future use

/* PERSONAL NOTES */

/* 
// ~Private Route rules: ~
//  1. It has the same API as <Route />  component.
//  We're not talking about a server based API what this means is when we talk
//  about an API with components or libary
//  its how you interface with that thing.(how you interface through components, with props.)
//  so this basically means our Private Route component has to be able
//  the same props accept the same props as a <Route /> component

// 2. It renders a <Route /> and passes all the props through to it.

// 3. It checks if the user is authenticated, if they are,
//    it renders the "component" prop. If not, it redirects the user to /login.

// same props we'd use in a <Route /> component
// we need to be able to add all the same props as we would to route with the exception of render
// a private route requires the component route

//pretty neat JavaScript trick
//rest operator (looks a lot like a spread operator)
// So what the rest operator does is it let's you take an object and destructure that object and
//rebuild an object with all the properities from that object into a new object called "rest"
// At first glance this doesnt make sense right? We're destructering this just to build it again, but there's a really important purpose for this!
// This allows us to pull the component prop, out of the object and then spread the rest of the props onto an object called rest, then we can simply spread all
// of those properities into <Route />

//rest operator (looks a lot like a spread operator)
*/
