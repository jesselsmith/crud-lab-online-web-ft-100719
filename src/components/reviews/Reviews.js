import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        Reviews
        {this.props.reviews.map(review => <Review key={review.id} review={review} delete={this.props.removeReview} />)}
      </ul>
    );
  }
};

export default Reviews;