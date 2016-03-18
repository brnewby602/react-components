/*
Inside app.js, create a GroceryList component that contains 
an unordered list of 2 grocery items. Render this component 
to div tag in index.html with an id of app

*/

var GroceryListItem = (props) => (<li>{props.item}</li>);


var GroceryList = () => (<ul><GroceryListItem item={'Pace Picante Sauce'}/><GroceryListItem item={'Tortilla Chips'}/></ul>);

ReactDOM.render(<GroceryList/> , document.getElementById('app'));




