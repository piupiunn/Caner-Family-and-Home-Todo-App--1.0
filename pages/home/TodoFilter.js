import React from "react";

const filterList = [
  "all",
  "mine",
  "cook",
  "cleaning",
  "kids",
  "shopping",
  "bill",
  "rent",
  "bank",
  "mortgage",
];

export default function TodoFilter({ currentFilter, changeFilter }) {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <div className="todo-filter">
      <nav>
        <p>Filter by:</p>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={currentFilter === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
