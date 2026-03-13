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
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="Title" 
          className="todo-title"
          onChange={handleTitleChange}
          value={title}
          required
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="+ Description"
          className="todo-description"
          onChange={handleDescriptionChange}
          value={description}
        />
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          className="todo-date"
          onChange={handleDateChange}
          value={date}
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          className="todo-time"
        />
      </form>
      <br />
      <h1>{title}</h1>
      {description !== '' && <h2>{description}</h2>}
      {date !== null && <h2>{date}</h2>}
      <button className="btn btn-confirm">Save</button>
      <button className="btn btn-primary">Edit</button>
      <button className="btn btn-deny">Delete</button>
    </>
  );
}


export function TodoList() {
  return (
    <></>
  );
}