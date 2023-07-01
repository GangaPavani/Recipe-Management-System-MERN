import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { addRecipe, updateRecipe } from '../actions';

const RecipeForm = ({ editingRecipe }) => {
  const dispatch = useDispatch();


  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editingRecipe) {
      setName(editingRecipe.name);
      setIngredients(editingRecipe.ingredients);
      setDescription(editingRecipe.description);
    } else {
      setName('');
      setIngredients('');
      setDescription('');
    }
  }, [editingRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingRecipe) {
      dispatch(updateRecipe({ ...editingRecipe, name,ingredients, description }));
    } else {
      const newRecipe = { id:new Date().getTime(),name, ingredients,description };
      dispatch(addRecipe(newRecipe));
    }

    setName('');
    setIngredients('');
    setDescription('');
  };

  return (
    <div>
      <h2>{editingRecipe ? 'Edit Recipe' : 'Create Recipe'}</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label"  htmlFor="name">
          Title</label>
          <input
          placeholder="Title"
          className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          <div className="form-group">
        <label className="form-label"  htmlFor="ingredients">
        Ingredients: </label>
          <input
          placeholder="Ingredients"
          className="form-control"
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          </div>
          <div className="form-group">
        <label className="form-label"  htmlFor="description">
          Description: </label>
          <input
          placeholder="Description"
          className="form-control"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          </div>
        <div>
        <button className="buttonAdd" type="submit">{editingRecipe ? 'Update' : 'Add'}</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (recipe) => dispatch(addRecipe(recipe)),
  updateRecipe: (recipe) => dispatch(updateRecipe(recipe)),
});

export default connect(null, mapDispatchToProps)(RecipeForm);
