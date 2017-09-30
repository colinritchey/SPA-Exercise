# SPA Application Exercise

LIVE

This is a server-less simple Single App Application that uses React and Webpack.

React allows for responsive and easy to design component structure. Webpack bundles the React component files into one bundle.js file that execute when the document loads in.

The JSON data object is located in activity.json. Normally you would fetch this data and it down to the necessary components as props.

Example ajax call:

```javascript
  export const fetchComments = () => (
    $.ajax({url: 'https://someapiendpoint/api/comments'})
  )
```

Webpack also bundles the images, that way the 'Comment' component can require them and insert them into the <img> tag. Normally a server can provide the public folder on the front end. Ruby on Rails does this for you by default and in Node.js you would:

```javascript
app.use('/', express.static(path.join(__dirname, 'public')))
```
