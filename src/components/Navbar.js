import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <h2 style={{ background: 'gray' }}>
              <Link to="/">
                <img
                  style={{
                    width: '100px',
                    height: '60px',
                    background: 'white',
                  }}
                  src="https://cdn-icons-png.flaticon.com/512/3959/3959425.png"
                />
              </Link>
            </h2>
          </div>

          <div className="right-nav">
            <div className="user">
              <img
                src="https://cdn-icons-png.flaticon.com/128/64/64572.png"
                alt="user-dp"
                id="user-dp"
              />
            </div>
            <div className="nav-links">
              <button
                style={{
                  background: '#84638b',
                  height: '40px',
                  fontSize: 'large',
                  margin: ' 5px',
                }}
              >
                <Link to="/createBlog">Create Blog</Link>
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
