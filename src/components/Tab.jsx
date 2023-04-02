import React from "react";

function Tab({ id, handleTabActive, name, tabActive }) {
  const active = "border-cyan-500";
  const styles =
    "my-2 block border-x-0 border-t-0 border-b-2 px-7 pt-4 pb-3.5 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-blue-400 focus:isolate text-primary ";

  return (
    <li>
      <button
        id={id}
        className={tabActive == id ? styles + active : styles}
        onClick={handleTabActive}
      >
        {name}
      </button>
    </li>
  );
}

export default Tab;
