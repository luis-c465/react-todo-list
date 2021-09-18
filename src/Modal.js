import "./Modal.css";

export default function Modal(props) {
    if (!props.show) {
        return null;
    }

    const closeOnEscapeDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose()
        }
    }
    document.body.addEventListener("keydown", (e) => {
        closeOnEscapeDown(e);
        document.body.removeEventListener("keydown", closeOnEscapeDown)
    });

    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content"
                onClick={e => e.stopPropagation()}
            >

                <div className="modal-header">
                    <h4 className="modal-title">{ props.title }</h4>
                </div>

                <div className="modal-body">
                    { props.children }
                </div>

                <div className="modal-footer">
                    <button
                        onClick={props.onClose}
                        className="button"
                    >
                        Close
                    </button>
                </div>

            </div>
        </div>
    )
}
