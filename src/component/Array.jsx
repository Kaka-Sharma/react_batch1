import React from "react";

const Array = () => {
  let obj = [
    {
      name: "aryan",
      age: 45,
      tech: "php",
    },
    {
      name: "arya",
      age: 35,
      tech: "Mern",
    },
  ];

  let res = obj.map((e, i) => {
    return (
      <React.Fragment key={i}>
        {Object.entries(e).map(([k, v],i1)=>{
          <React.Fragment key={i1}>
            <p>{k}</p>
            <p>{v}</p>
          </React.Fragment>
        })}
      </React.Fragment>
    );
  });
  return <div>{res}</div>;
};

export default Array;
