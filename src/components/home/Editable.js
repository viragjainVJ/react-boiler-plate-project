import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Editable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: '',
      author: ''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  addBook = () => {
    const title = this.getTitle.value;
    const author = this.getAuthor.value;
    const book = {
      id: new Date(),
      title,
      author
    };

    if (title && author) {
      this.props.fetchBookActions(book);
    }
  };

  editBook = () => {
    const updatedTitle = this.getTitle.value;
    const updatedAuthor = this.getAuthor.value;
    const data = {
      id: this.props.book.id,
      updatedTitle,
      updatedAuthor
    };
    this.props.updateBookList(data);
  };

  handleSumbit = e => {
    e.preventDefault();
    this.toggle();

    if (this.props.modalTitle === 'Add') {
      this.addBook();
    }

    if (this.props.modalTitle === 'Edit') {
      this.editBook();
    }
  };

  render() {
    const { modalTitle, book } = this.props;
    const { title, author } = modalTitle === 'Add' ? this.state : book;
    return (
      <div>
        <button onClick={this.toggle}>{modalTitle}</button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{modalTitle}</ModalHeader>
          <form onSubmit={this.handleSumbit}>
            <ModalBody>
              <table style={{ color: 'black' }}>
                <tbody>
                  <tr>
                    <td>Book Title: </td>
                    <td>
                      <input required type="text" ref={input => (this.getTitle = input)} defaultValue={title} placeholder="Enter Title" />
                    </td>
                  </tr>
                  <tr>
                    <td>Book Author: </td>
                    <td>
                      <input required type="text" ref={input => (this.getAuthor = input)} defaultValue={author} placeholder="Enter Author" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </ModalBody>
            <ModalFooter>
              <Button color="primary">{modalTitle}</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}

export default Editable;
