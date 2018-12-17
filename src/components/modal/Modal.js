import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { username, designation, company } = this.props.user;
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {username}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{username}</ModalHeader>
          <ModalBody>
            <h3>Designation: {designation}</h3>
            <h3>Company: {company}</h3>
            Welcome to Talentica Book Shelf !!!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalPanel;
