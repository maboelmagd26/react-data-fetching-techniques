import React from "react";

const RecipeUI = ({ data }) => {
  return (
    <div>
      <ul>
        {data["recipes"]?.map(
          ({ id, name, prepTimeMinutes, cookTimeMinutes }) => (
            <>
              <li id={id}>{name}</li>
              <span>total meal Time : {cookTimeMinutes + prepTimeMinutes}</span>
            </>
          )
        )}
      </ul>
    </div>
  );
};

export default RecipeUI;
