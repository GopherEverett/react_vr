# React 360

### Why React 360? 

Well, until this morning I hadn't even heard of it but as soon as I did I knew wanted to know more.

### Why would someone use it?

React 360 provides a framework for the creation of 3D and VR user interfaces for React apps. There are other frameworks like A-frame which are great for intricate 3D scenes but React 360 is better for apps that are event-driven.

### History

In 2011, Jordan Walke and his team from Facebook released the React.js library which was developed to address the need for a dynamic user interface. This combined the speed of JavaScript with a new way of renedering pages. In 2015 they released React Native to allow developers to build native mobile apps using React's dynamic UI.
In early 2017 Facebook and Occulus released a JS library built on top of React to create immersive 360 and 3D content. They called it React VR, with the open source library name later changing to React 360 to better reflect its use.

### My Impressions

After the initial setup I quickly realized I needed some exposure to React Native to utilize React 360. The biggest issue was learning the native components such as View, Text, Image. Aside from that it is almost the same as React.js
One interesting component is the VrButton which detects click-type actions across a variety of input devices; listening for key-down followed by key-up events, while the cursor remains on the component. By default it has no appearance and is a wrapper to listen for events, however it can styled like a view.

### To run this example

- Clone this repository
- CD into Hello360 directory
- Install dependencies with `npm install`
- `npm start`
- open browser at http://localhost:8081/index.html

### Resources

The single best resource is the React 360 docs provided by Facebook at https://facebook.github.io/react-360/