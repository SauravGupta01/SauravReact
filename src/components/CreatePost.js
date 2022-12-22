import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/posts';
import { Redirect } from 'react-router-dom';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      title: '',
      author: '',
      content: '',
      created: false,
    };
  }

  //   componentWillUnmount() {
  //     this.props.dispatch(clearAuthState());
  //   }

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleAuthorChange = (e) => {
    this.setState({
      author: e.target.value,
    });
  };

  handleContentChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { title, content, author } = this.state;
    const post = { ...this.state };
    if (title && content && author) {
      this.props.dispatch(addPost({ title, content, author }));
    }
    console.log(this.props.posts);
    this.setState({ created: true });
  };

  render() {
    // const { error, inProgress, isLoggedin } = this.props.auth;

    // if (isLoggedin) {
    //   return <Redirect to="/" />;
    // }
    const { created } = this.state;
    if (created) {
      return <Redirect to="/" />;
    }
    return (
      <div className="home">
        <form className="login-form" style={{ width: '800px' }}>
          <span className="login-signup-header">Create New Blog</span>
          {/* {error && <div className="alert error-dailog">{error}</div>} */}

          <div className="field">
            <input
              type="text"
              placeholder="Title Of Blog"
              required
              onChange={this.handleTitleChange}
              value={this.state.title}
            />
          </div>
          <hr />
          <div className="field">
            <textarea
              style={{ width: '750px', height: '200px' }}
              type="text"
              placeholder="Content..."
              required
              onChange={this.handleContentChange}
              value={this.state.content}
            />
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Author Name"
              required
              onChange={this.handleAuthorChange}
              value={this.state.author}
            />
          </div>
          <div className="field">
            <button onClick={this.handleFormSubmit}>Create Blog</button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(CreatePost);
// export default CreatePost;
