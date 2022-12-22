import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Navbar, Home, CreatePost, PostDetail, EditPost } from './';

import { fetchPosts } from '../actions/posts';
import Page404 from './Page404';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts } = this.props;
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <Home {...props} posts={posts} />;
            }}
          />
          <Route path="/createBlog" component={CreatePost} />
          <Route path="/viewBlog" component={PostDetail} />
          <Route path="/editBlog" component={EditPost} />
          <Route component={Page404} />
        </Switch>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);
