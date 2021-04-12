import React, {useState} from "react";

function PlantCard({plant, onDeletePlant}) {
  const {id, name, image, price} = plant;
  const [isInStock, setIsInStock] = useState(true)

  function handleToggle(){
    setIsInStock(!isInStock)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    onDeletePlant(id)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick = {handleToggle} className="primary">In Stock</button>
      ) : (
        <button onClick = {handleToggle}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
