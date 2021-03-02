
import React from "react";

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return React.createElement(
        'a',
        { href: '/' + page },
        page
      );
    });

    return React.createElement(
      'nav',
      null,
      navLinks
    );
  }
}