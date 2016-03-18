/*
Inside app.js, create a GroceryList component that contains 
an unordered list of 2 grocery items. Render this component 
to div tag in index.html with an id of app

*/

var GroceryListItem = (props) => (<li>{props.item}</li>);


var GroceryList = (props) => (
  <ul>
     {
        
        props.items.map( function(item) {
           return <GroceryListItem item={item}/>
        })


     }
     
  </ul>
);

ReactDOM.render(<GroceryList items={['Pace Picante Sauce', 'Tortilla Chips']}/> , document.getElementById('app'));




