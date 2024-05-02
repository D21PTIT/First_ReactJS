import React, { useState } from "react";
import PropTypes from "prop-types";

Brawl.propTypes = {};

function Brawl(props) {
  const arr = [
    { id: 1, name: "OH" },
    { id: 2, name: "OP" },
    { id: 3, name: "Setter" },
    { id: 4, name: "MB" },
    { id: 5, name: "Libero" },
  ];

  const [list, setList] = useState([]);

  const handleCheckboxChange = (id) => {
    if (list.includes(id)) {
      setList(list.filter((item) => item !== id));
    } else {
      setList([...list, id]);
    }
  };

  return (
    <div>
      <h2>What position can you play?</h2>
      {arr.map((it) => (
        <div key={it.id}>
          <input type="checkbox" onChange={() => handleCheckboxChange(it.id)} />
          {it.name}
        </div>
      ))}
      <button
        onClick={() => {
          alert(list.length);
        }}
      >
        Select
      </button>
    </div>
  );
}

export default Brawl;
