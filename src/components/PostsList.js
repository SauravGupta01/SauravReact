import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { CreatePost } from './';

class PostsList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {/* <CreatePost /> */}
        {posts.map((post, index) => (
          <div className="post-wrapper">
            <div className="post-header">
              <div className="post-avatar">
                {/* <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-pic"
                /> */}
                <div>
                  <h4>{post.title}</h4>
                </div>
              </div>
              <div>
                <span className="post-author">{post.author}</span>

                <span style={{ float: 'right' }}>
                  <Link
                    to={{
                      pathname: '/viewBlog',
                      data: { post, index: index },
                    }}
                  >
                    <img
                      style={{ height: '30px', width: '40px' }}
                      src="https://cdn-icons-png.flaticon.com/512/709/709724.png"
                    />
                  </Link>
                </span>
              </div>

              {/* <div className="post-content">{post.content}</div> */}

              {/* <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
                    alt="likes-icon"
                  />
                  <span>1</span>
                </div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(PostsList);
