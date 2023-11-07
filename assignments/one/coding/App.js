// from react CDN , creating an element , a JS object
// const heading3 = React.createElement("h1" , {
//     id : 'heading' , xyz: 'abc'
// } , "Hello World from React!");

// from react CDN , creating an element , a JS object , with its respective attributes
const content = React.createElement(
    'div', //tag
    { id: 'parent' }, // object containing attributes
    [   // children
        React.createElement(
            'div',
            { id: 'child' },
            [
                React.createElement('h1', { id: 'heading' , style: { color: 'green' } }, 'Hello World from React!'),
                React.createElement('h1', { id: 'heading-1b' }, 'Hello World from React again!')
            ]
        ),
        React.createElement(
            'div',
            { id: 'child' },
            [
                React.createElement('h2', { id: 'heading-2a' }, 'Hello World from React!'),
                React.createElement('h2', { id: 'heading-2b' }, 'Hello World from React again!')
            ]
        ),
    ]
);

// from react-dom CDN , creating a root and redering something inside it
const root3 = ReactDOM.createRoot(document.getElementById("root-3"));
// rendering , converting the JS object into respective HTML tag
root3.render(content);