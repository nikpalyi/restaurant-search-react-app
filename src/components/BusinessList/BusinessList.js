import React from 'react';

import './BusinessList.css';
import Business from '../Business/Business';

//The point of the <BusinessList /> component is to simulate
//what a returned list of businesses would look like in Ravenous
//(after querying the Yelp API, for example).

class BusinessList extends React.Component {
  render() {
    return (
      <div clasclassNames='BusinessList'>
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
}

export default BusinessList;
