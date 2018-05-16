import {View, Text, Image} from "react-native";
import React, {Component} from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';

import Layout from "../components/layout"
import {editReview} from '../actions/cafeActions';
import Loader from '../components/loader';
import {cafeItemStyle} from "../themes/styles";

class itemScene extends Component {


  componentWillMount() {
    setTimeout(
      () =>
        this.editReview()
      ,
      5000
    );
  }

  renderRating(value) {
    console.log(value);
    const rating = [];
    for (let i = 0; i < value; i++) {
      rating.push(<Icon key={`${Math.random()}${5 - i}`} name="star" size={20} color="#f39c12"/>)
    }
    for (let i = 0; i < 5 - value; i++) {
      rating.push(<Icon key={`${Math.random()}${5 - i}`} name="star-o" size={20} color="#f39c12"/>)
    }
    return rating;
  }

  renderReviews(reviews) {
    console.log(reviews);
    return reviews.map(reviewId => {
      const review = this.props.cafes.reviews.byIds[reviewId];
      console.log(review);
      return <View key={`review${reviewId}`}>
        <View style={{flexDirection: 'row'}}>
          {this.renderRating(review.averageRating)}
        </View>
        <Text>
          {review.text}
        </Text>
      </View>
    });
  }

  editReview() {
    const id = 6;
    const newReview = 'super cool';
    this.props.editReview(id,newReview);
  }

  renderCafe() {
    const cafe =
      this.props.cafes.cafes.byIds[
        this.props.cafes.cafes.current
        ];

    return <View>
      <Image style={cafeItemStyle.mainImage} source={cafe.image}/>
      <View style={cafeItemStyle.titleLine}>
        <Text style={cafeItemStyle.title}>{cafe.name}</Text>
        <View style={cafeItemStyle.rating}>{this.renderRating(cafe.rating)}</View>
      </View>
      {this.renderReviews(cafe.reviews)}
    </View>
  }

  render() {
    console.log(this.props.cafes);
    return (
      <Layout>
        {this.props.cafes ? this.renderCafe() : <Loader/>}
      </Layout>
    )
  }
}


export default connect(({cafes}) => ({cafes}), { editReview })(itemScene);