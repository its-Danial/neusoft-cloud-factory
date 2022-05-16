import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modalStateSlice";

const ModalForm = (props) => {
  const showModal = useSelector((state) => state.modalState.show);

  const dispatch = useDispatch();

  const handleClose = () => dispatch(modalActions.close());

  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal"
        aria-describedby="modal-description"
      >
        {props.children}
      </Modal>
    </div>
  );
};

export default ModalForm;
