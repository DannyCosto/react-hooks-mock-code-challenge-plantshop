import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
  fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((plantsArr) => {
      setPlants(plantsArr);
    });
}, []);

function handleAddPlant(newPlant){
  const updatedPlantsArr = [...plants,newPlant]
  setPlants(updatedPlantsArr)
}

function handleDeletePlant(id){
  const updatedPlantsArr = plants.filter(plant => plant.id !== id)
  setPlants(updatedPlantsArr)
}

const displayedPlants = plants.filter(plant => {
  return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
})

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm = {searchTerm} onSearchChange= {setSearchTerm}/>
      <PlantList plants = {displayedPlants} onDeletePlant ={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
