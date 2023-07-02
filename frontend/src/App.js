import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipeList from './components/RecipeList';
import RecipeForm from './components/RecipeForm';
import {addRecipe, updateRecipe, deleteRecipe } from './actions';
import './App.css';


function App() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const editingRecipe = useSelector((state) => state.editingRecipe);
  const [editrecipe,seteditRecipe]=useState()
 
  const handleAddRecipe = (recipe) => {
    dispatch(addRecipe(recipe));
  };

  const handleUpdateRecipe = (recipe) => {
    dispatch(updateRecipe(recipe));
  };

  const handleDeleteRecipe = (id) => {
    dispatch(deleteRecipe(id));
  };
  
  const handleEditRecipe = (recipe) => {
    dispatch(updateRecipe(recipe));
  };
const editRecipe = (data)=>{
  seteditRecipe(data)
}
  return (
    <div className="container">
      <h1 className="main-heading">Recipe Management System</h1>
      <div className="row">
        <div className="col">
        <RecipeForm 
        editingRecipe={editrecipe} 
        addRecipe={handleAddRecipe}
        updateRecipe={handleUpdateRecipe} 

        />
        
        </div>
        <div className="col">
          <RecipeList
            recipes={recipes}
            deleteRecipe={handleDeleteRecipe}
            setEditingRecipe={handleEditRecipe}
        editRecipe={editRecipe} 

          />
        </div>
      </div>
    </div>
  );
}

export default App;