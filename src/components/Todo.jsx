import { useState, useEffect } from 'react';

export function TodoItem() {
  const [title, setTitle] = useState('Title');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState();

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleDateChange(e) {
    setDate(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        id="title"
        placeholder="Title" 
        className="todo-title"
        onChange={handleTitleChange}
        value={title}
        required
      />
      <input
        type="text"
        id="description"
        placeholder="+ Description"
        className="todo-description"
        onChange={handleDescriptionChange}
        value={description}
      />
      <input
        type="date"
        id="date"
        className="todo-date"
        onChange={handleDateChange}
        value={date}
      />
      <button className="btn btn-confirm">Edit</button>
      <button className="btn btn-deny">Delete</button>
    </>
  );
}


export function TodoList() {
  return (
    <></>
  );
}