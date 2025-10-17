import React from "react";

const RecipeUI = ({ data }) => {
  return (
    <div className="">
      <h1>{data?.name}</h1>
      <div className="flex justify-between">
        <img src={data?.image} alt="" />
        <div className="flex flex-col ">
          <span>enough for : {data.servings}</span>
          <span>coocking time: {data.cookTimeMinutes}</span>
          <span>preparation time: {data.prepTimeMinutes}</span>
          <span>
            total time:
            {parseInt(data.cookTimeMinutes + data.prepTimeMinutes)}
          </span>
        </div>
        <div className="flex flex-col">
          <span>{data?.difficulty}</span>
          <span>
            {data?.tags?.map((t) => (
              <div>
                <small>{t}</small>
                <br />
              </div>
            ))}
          </span>
          <span>{data?.caloriesPerServing}</span>
        </div>
      </div>

      <div className="flex">
        <ol>
          {data.ingredients?.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ol>
        <ol>
          {data.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <hr />
    </div>
  );
};

export default RecipeUI;
