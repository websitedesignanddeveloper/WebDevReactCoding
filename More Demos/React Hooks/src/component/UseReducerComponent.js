import React, { useReducer } from 'react';
const initialState = { react: false, graphQL: false, angular: false };
const counterReducer = (state, action) => {
  switch (action.type) {
    case "REACT":
      return { react: true };
    case "GRAPHQL":
      return { graphQL: true };
    case "ANGULAR":
      return { angular: false };
    default:
      throw new Error();
  }
}
function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const handleReactPress = () => {
    dispatch({ type: 'REACT' })
  }
  const handleGraphQLPress = () => {
    dispatch({ type: 'GRAPHQL' })
  }
  const handleAngularPress = () => {
    dispatch({ type: 'ANGULAR' })
  }
  return (
    <div>
      <h2>Use Reducer Example Component</h2>
      <p>
        Learning{" "}
        {state.react
          ? "React"
          : state.graphQL
            ? "GraphQL"
            : state.angular
              ? "Angular"
              : "Not Started"
        }
      </p>
      <button type="button" onClick={handleReactPress}>react</button>
      <button type="button" onClick={handleGraphQLPress}>GraphQL</button>
      <button type="button" onClick={handleAngularPress}>Angular</button>
    </div>
  )
}
export default UseReducerComponent;