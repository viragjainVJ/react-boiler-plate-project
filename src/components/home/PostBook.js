import React, { Component } from 'react';

class PostBook extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const title = this.getTitle.value;
    const author = this.getAuthor.value;
    const book = {
      id: new Date(),
      title,
      author,
      editing: false
    };

    if (title && author) {
      this.props.fetchBookActions(book);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Book Title"
            ref={input => {
              this.getTitle = input;
            }}
          />
          <input
            placeholder="Author"
            ref={input => {
              this.getAuthor = input;
            }}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default PostBook;
