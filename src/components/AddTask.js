import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const AddTask = ({ onAdd, close }) => {
  const [text, setText] = useState('');
  const [reminder, setReminder] = useState(false);
  const [day, setDay] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('please put text');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay(new Date());
    setReminder(false);

    close();
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
          style={{ backgroundColor: 'antiquewhite' }}
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <DatePicker
          selected={day}
          minDate={new Date()}
          onChange={(val) => {
            console.log(moment(new Date(val)).format('YYYY-MM-DD'));
            setDay(new Date(val));
          }}
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
