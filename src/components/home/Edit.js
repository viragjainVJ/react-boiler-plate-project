import React, { Component } from 'react';
import { connect } from 'react-redux';

class Edit extends Component {
  handleEdit = e => {
    e.preventDefault();
    const updatedTitle = this.getTitle.value;
    const updatedAuthor = this.getAuthor.value;
    const data = {
      id: this.props.book.id,
      updatedTitle,
      updatedAuthor
    };
    this.props.updateBookList(data);
  };
  render() {
    const { id, title, author } = this.props.book;
    return (
      <div key={id}>
        <form onSubmit={this.handleEdit}>
          <input required type="text" ref={input => (this.getTitle = input)} defaultValue={title} placeholder="Enter Book Title" />
          <br />
          <br />
          <textarea required rows="5" ref={input => (this.getAuthor = input)} defaultValue={author} cols="28" placeholder="Enter Book Author" />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(Edit);
