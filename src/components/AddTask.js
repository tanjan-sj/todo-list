import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';


const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('please put text');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ backgroundColor: 'mistyrose' }}
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
          type="text"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          style={{ backgroundColor: 'mistyrose' }}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          placeholder="Set Reminder"
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          style={{ backgroundColor: 'mistyrose' }}
        />
      </div>
      <input
        type="submit"
        value="Save Task"
        className="btn btn-block"
        style={{ backgroundColor: 'lightslategray' }}
      />
    </form>
  );
};

export default AddTask;
