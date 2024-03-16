import React from "react";

const Content = ({ jsonContent, isLoading }) => {
  return (
    <div>
      {isLoading && <p>{`Data is Loading`}</p>}
      {!isLoading && (
        <ul>
          {jsonContent.map((item) => (
            <li key={item.id}>{JSON.stringify(item).trim()}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Content;
