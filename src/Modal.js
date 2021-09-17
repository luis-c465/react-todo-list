import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
    render() {
        if (!this.props.show) {
            return null;
        }

        const closeOnEscapeDown = (e) => {
            if ((e.charCode || e.keyCode) === 27) {
                this.props.onClose()
            }
        }

        document.body.addEventListener("keydown", (e) => {
            closeOnEscapeDown(e);
            document.body.removeEventListener("keydown", closeOnEscapeDown)
        });

        return (
            <div className="modal" onClick={this.props.onClose}>
                <div className="modal-content"
                    onClick={e => e.stopPropagation()}
                >

                    <div className="modal-header">
                        <h4 className="modal-title">{ this.props.title }</h4>
                    </div>

                    <div className="modal-body">
                        { this.props.children }
                    </div>

                    <div className="modal-footer">
                        <button
                            onClick={this.props.onClose}
                            className="button"
                        >
                            Close
                        </button>
                    </div>

                </div>
            </div>
        )
    }

    // showModal = () => this.setState({ show: true });
    // hideModal = () => this.setState({ show: false });
}
