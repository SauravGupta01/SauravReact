import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { deletePost, likePost } from '../actions/posts';

class PostDetail extends Component {
  constructor(props) {
    super(props);
    const { post, index } = this.props.location.data;
    this.state = {
      id: index,
      post: post,
      deleted: false,
      liked: post.liked,
    };
  }
  handleDeletePost = () => {
    const { post, deleted } = this.state;
    this.props.dispatch(deletePost(post));
    this.setState({ deleted: true });
  };
  handleLikePost = () => {
    const { liked, id, post } = this.state;
    this.props.dispatch(likePost(id, post, liked));
    this.setState({ liked: !liked });
  };
  render() {
    const { post, index } = this.props.location.data;
    const { deleted } = this.state;
    if (deleted) {
      return <Redirect to="/" />;
    }
    return (
      <div className="home">
        <form
          className="login-form"
          style={{ width: '800px', height: '400px' }}
        >
          <span className="login-signup-header"> {post.title} </span>
          {/* {error && <div className="alert error-dailog">{error}</div>} */}

          <div className="field">
            <div style={{ width: '750px', height: '50px' }}>
              <span style={{ fontWeight: 'bolder' }}>{post.author}</span>
              <span style={{ float: 'right' }}>
                <span>
                  {post.liked && (
                    // <img
                    //   style={{ height: '50px', width: '50px' }}
                    //   href={this.handleLikePost}
                    //   src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                    // />
                    <span type="button" onClick={this.handleLikePost}>
                      <img
                        style={{
                          height: '25px',
                          width: '25px',
                          marginBottom: '-5px',
                        }}
                        src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                      />
                    </span>
                  )}
                  {!post.liked && (
                    <span type="button" onClick={this.handleLikePost}>
                      {/* Like */}
                      <img
                        style={{
                          height: '25px',
                          width: '25px',
                          marginBottom: '-5px',
                        }}
                        src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                      />
                    </span>
                  )}
                </span>
                &nbsp;&nbsp;
                <span type="button">
                  <Link
                    to={{
                      pathname: '/editBlog',
                      data: { post, index },
                    }}
                  >
                    <img
                      style={{
                        height: '25px',
                        width: '25px',
                        marginBottom: '-5px',
                      }}
                      src="https://cdn-icons-png.flaticon.com/512/181/181540.png"
                    />
                  </Link>
                </span>
                &nbsp;&nbsp;
                <span>
                  <span type="button" onClick={this.handleDeletePost}>
                    <img
                      style={{
                        height: '25px',
                        width: '25px',
                        marginBottom: '-5px',
                      }}
                      src="https://cdn-icons-png.flaticon.com/512/565/565491.png"
                    />
                  </span>
                </span>
              </span>
              {/* <div
                style={{ float: 'right', display: 'inline', width: '100px' }}
              >
                
              </div> */}
            </div>
          </div>

          <div className="field">
            <div style={{ width: '750px', height: '200px' }}>
              {post.content}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps)(PostDetail);
