import {View, Text, Image} from "react-native";
import React, {Component} from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import Layout from "../components/layout"
import {getCafe} from '../actions/cafeActions';
import Loader from '../components/loader';
import {cafeItemStyle} from "../themes/styles";

class itemScene extends Component {

  constructor() {
    super();
    this.state = {cafe: {}, loading: false}
  }

  componentWillMount() {
    this.setState({loading: true});

    getCafe({id: this.props.id})
      .then(cafe => {
        this.setState({cafe});
      })
      .finally(() => {
        this.setState({loading: false});
      })
  }

  renderRating(cafe) {
    const rating = [];
    for (let i = 0; i < cafe.rating; i++) {
      rating.push(<Icon key={5 - i} name="star" size={20} color="#f39c12"/>)
    }
    for (let i = 0; i < 5 - cafe.rating; i++) {
      rating.push(<Icon key={5 - i} name="star-o" size={20} color="#f39c12"/>)
    }
    return rating;
  }

  renderCafe() {
    const {cafe} = this.state;
    return <View>
      <Image style={cafeItemStyle.mainImage} source={cafe.image}/>
      <View style={cafeItemStyle.titleLine}>
        <Text style={cafeItemStyle.title}>{cafe.name}</Text>
        <View style={cafeItemStyle.rating}>{this.renderRating(cafe)}</View>
      </View>
      <View>
        <Swiper width={300} height={200} showsButtons={true}>
          <View>
            <Text>Hello Swiper</Text>
          </View>
          <View>
            <Text>Beautiful</Text>
          </View>
          <View>
            <Text>And simple</Text>
          </View>

        </Swiper>
      </View>
    </View>
  }

  render() {
    return (
      <Layout>
        {this.state.loading ? <Loader/> : this.renderCafe()}
      </Layout>
    )
  }
}

export default itemScene;