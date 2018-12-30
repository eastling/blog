import React, { Component } from 'react';

class Book extends Component {

  state = {
    isShowBook: true
  }

  render() {

    return (
      <div className="book-component" id="book-component">
        {this.state.isShowBook && <ul className="align">
          <li>
            <figure className="book">
              <ul className="hardcover_front">
                <li className="book-cover-image">
                </li>
                <li></li>
              </ul>
              <ul className="page">
                <li>
                  <a className="btn" href="/blog/about">About</a>
                </li>
                <li>
                  <a className="btn" href="/blog">Blog</a>
                </li>
                <li>
                  
                </li>
                <li></li>
                <li></li>
              </ul>
              <ul className="hardcover_back">
                <li></li>
                <li></li>
              </ul>
              <ul className="book_spine">
                <li></li>
                <li></li>
              </ul>
            </figure>
          </li>
        </ul>}
      </div>
    )
  }
}

export default Book

