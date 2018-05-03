import {TouchableOpacity, ScrollView, View, Text, Image} from "react-native";
import React, {Component} from "react";
import Layout from "../components/layout"
import {Actions} from 'react-native-router-flux';

import Loader from "../components/loader";
import {cafeListStyle} from "../themes/styles";
import {getCafes} from "../actions/cafeActions";

class listScene extends Component {

  constructor() {
    super();
    this.state = {cafes: [], loading: false}
  }

  componentWillMount() {

    this.setState({loading: true});
    getCafes({'_sort[rating]': 'ASC'})
      .then(cafes => {
        this.setState({cafes});
        console.log(cafes);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.setState({loading: false});
      })
  }

  itemPress(id) {
    Actions.item({id})
  }

  renderCafes() {
    console.log(this.state.cafes);
    return this.state.cafes.map(cafe => (
        <TouchableOpacity onPress={this.itemPress.bind(this, cafe.id)} style={cafeListStyle.cafeWrap} key={cafe.id}>
          <View style={cafeListStyle.imageWrap}>
            <Image style={cafeListStyle.image}
                   source={cafe.image}/>
          </View>
          <View>
            <Text style={cafeListStyle.title}>{cafe.name}</Text>
            <Text>{cafe.description}</Text>
          </View>

        </TouchableOpacity>
      )
    );
  }

  render() {
    return (
      <Layout title="Cafe around you" active="list">
        <ScrollView>
          {this.state.loading ? <Loader/> : this.renderCafes()}

        </ScrollView>
      </Layout>
    )
  }
}

export default listScene;