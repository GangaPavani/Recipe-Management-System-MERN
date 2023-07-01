import React from 'react';
import { connect,useDispatch } from 'react-redux';
import { deleteRecipe,  updateRecipe } from '../actions';

const RecipeList = ({ recipes,deleteRecipe, updateRecipe }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteRecipe(id));
  };

  const handleEdit = (recipe) => {
    dispatch(updateRecipe(recipe));
  };
  
  return (
    <div>
      <h2 className="sub-heading">Recipes</h2>
      {recipes.length === 0 ? (
        <p className="para">No recipes available.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3 className="head">{recipe.name}</h3>
              <p className='para'>{recipe.ingredients}</p>
               <p className='para'>{recipe.description}</p>
              <button className="buttonEdit" onClick={() => handleEdit(recipe)}>Edit</button>
              <button className="buttonDelete" onClick={() => handleDelete(recipe.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  deleteRecipe: (id) => dispatch(deleteRecipe(id)),
  updateRecipe: (recipe) => dispatch(updateRecipe(recipe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);
