/*
Inside app.js, create a GroceryList component that contains 
an unordered list of 2 grocery items. Render this component 
to div tag in index.html with an id of app

*/

class GroceryListItem extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      bold: false
    };
  }

  onGroceryListItemHover () {
     this.setState(
       {bold: !this.state.bold}
     );
  }

  render () {

    var style = {
      fontWeight: this.state.bold ? '800' : '200'
    };

    return <li style={style} onMouseOver={this.onGroceryListItemHover.bind(this)} onMouseOut={this.onGroceryListItemHover.bind(this)}>{this.props.item}</li>
  }

} 


var GroceryList = (props) => (
  <ul>
     {
      
        props.items.map( (item) => (
          <GroceryListItem item={item}/>
        ))

     }
     
  </ul>
);

ReactDOM.render(<GroceryList items={['Pace Picante Sauce', 'Tortilla Chips']}/> , document.getElementById('app'));




