import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <h3>Book List</h3>
        <ul>
          <li style={{ background: theme.ui }}>Game of Thorons</li>
          <li style={{ background: theme.ui }}>Cat and mouse</li>
          <li style={{ background: theme.ui }}>Harry Potter</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
