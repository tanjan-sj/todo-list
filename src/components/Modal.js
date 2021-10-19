import { FaTimes } from 'react-icons/fa';
import '../Modal.scss';
import AddTask from './AddTask';

const Modal = ({ show, close, onAdd }) => {
  return (
    <>
      {show ? (
        <div className="modalContainer">
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
            style={{ zIndex: 8 }}
          >
            <header className="modal_header">
              <h2 className="modal_header-title">Add Task</h2>
              <FaTimes
                className="close"
                onClick={() => close()}
                style={{ cursor: 'pointer' }}
              />
            </header>
            <AddTask onAdd={onAdd} close={close} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
