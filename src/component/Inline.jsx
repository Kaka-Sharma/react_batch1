import React from "react";

const Inline = () => {
  const arr = [
    { name: "Aryan", phone: 987654321, age: 30, tech: "MERN" },
    { name: "Ritesh", phone: 987654321, age: 30, tech: "MERN" },
  ];

  let res = arr.map((element, i) => {
    return (
      <React.Fragment key={i}>
        {Object.entries(element).map(([k, v], index) => {
          return (
            <React.Fragment key={index}>
              <p>key: {k}</p>
              <p>value: {v}</p>
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  });git 

  return <div>{res}</div>;
};

export default Inline;
