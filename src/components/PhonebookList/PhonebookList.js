import React from "react";
import PropTypes from "prop-types";
import s from "./PhonebookList.module.css";

const PhonebookList = ({ contacts, title, onDeleteList }) => {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li className={s.list} key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => onDeleteList(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhonebookList;
