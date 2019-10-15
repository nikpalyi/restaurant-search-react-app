//The point of the <BusinessList /> component is to simulate
//what a returned list of businesses would look like in Ravenous
//(after querying the Yelp API, for example).

import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className='BusinessList'>
        {this.props.businesses.map(business => (
          <Business business={business} key={business.id} />
        ))}
      </div>
    );
  }
}

export default BusinessList;
