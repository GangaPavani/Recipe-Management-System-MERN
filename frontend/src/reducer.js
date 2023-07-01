// src/reducer.js

// reducer.js

import { ADD_RECIPE, UPDATE_RECIPE, DELETE_RECIPE } from './actions';

const initialState = {
  recipes: [],
  editingRecipeId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };
    case UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.id ? action.payload : recipe
        ),
        editingRecipeId: null,
      };
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
        editingRecipeId: null,
      };
    default:
      return state;
  }
};

export default reducer;
