//To iterate through the object, you’ll need to start by accessing the keys of the sortByOptions object.
//Calling the keys() method on the JavaScript Object library.
//Passing in sortByOptions as the argument.

//iterate through them using the map() method
//Pass a callback function to the map() method as an argument.
//The callback function should have one parameter called sortByOption.

//The purpose of renderSortByOptions() is to dynamically create the list items needed to display the sort options
//(Best Match, Highest Rated, Most Reviewed). This is to help future proof against potential changes to the Yelp API.
//The method should iterate through the keys and values of the sortByOptions object and return a list item.
//The list item elements should use the keys as an attribute, and the values as content.

import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return <li key={sortByOptionValue}>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className='SearchBar'>
        <div className='SearchBar-sort-options'>
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className='SearchBar-fields'>
          <input placeholder='Search Businesses' />
          <input placeholder='Where?' />
        </div>
        <div className='SearchBar-submit'>
          <a href='https://www.index.hu'>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
