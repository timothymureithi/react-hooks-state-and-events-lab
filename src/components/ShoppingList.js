import React, {useState} from "react";
import Item from "./Item";

//Use the `useState` hook to create a state variable called `selectedCategory` 
function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
//function 
function handleChange(event){
  setSelectedCategory(event.target.value);
}
/**You should also use the `selectedCategory` variable to determine which items to
display in the shopping list. You'll need some way of **filter**ing the array of
items based on the `selectedCategory`.
 */
const itemList = items.filter((item) => {
  if (selectedCategory === "All")
  return true;
  return item.category === selectedCategory;
});

/**In the `ShoppingList` component, there is a `<select>` element that will allow
us to **filter** the list of items by category. */
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
