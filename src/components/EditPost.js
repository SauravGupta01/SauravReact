import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updatePosts } from '../actions/posts';

class EditPost extends Component {
  constructor(props) {
    super(props);
    const { post, index } = this.props.location.data;
    // this.emailInputRef = React.createRef();
    // this.passwordInputRef = React.createRef();
    this.state = {
      title: post.title,
      author: post.author,
      content: post.content,
      id: index,
      edited: false,
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
    const { title, content, author, id, edited } = this.state;
    const post = { title, content, author };
    if (title && content && author) {
      this.props.dispatch(updatePosts(post, id));
      this.setState({ edited: true });
    }
  };

  render() {
    const { post, index } = this.props.location.data;
    const { edited } = this.state;
    if (edited) {
      return <Redirect to="/" />;
    }
    return (
      <div className="home">
        <form className="login-form" style={{ width: '800px' }}>
          <span className="login-signup-header"> Edit Blog</span>
          {/* {error && <div className="alert error-dailog">{error}</div>} */}

          <div className="field">
            <input
              type="text"
              // placeholder={post.title}
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
              // placeholder={post.content}
              required
              onChange={this.handleContentChange}
              value={this.state.content}
            />
          </div>
          <div className="field">
            <input
              type="text"
              // placeholder={post.author}
              required
              onChange={this.handleAuthorChange}
              value={this.state.author}
            />
          </div>
          <div className="field">
            <button onClick={this.handleFormSubmit}>Edit Blog</button>
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
export default connect(mapStateToProps)(EditPost);
