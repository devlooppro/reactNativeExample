import {TouchableOpacity, ScrollView, View, Text, Image} from "react-native";
import React, {Component} from "react";
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import Loader from "../components/loader";
import Layout from "../components/layout"
import {cafeListStyle} from "../themes/styles";
import {getCafes, setCafe} from "../actions/cafeActions";

class listScene extends Component {


  componentWillMount() {
   this.props.getCafes();
  }

  itemPress(cafe) {
    this.props.setCafe(cafe);
    Actions.item();
  }

  renderCafes() {

    return this.props.cafes.list.map(cafe => (
        <TouchableOpacity onPress={this.itemPress.bind(this, cafe)} style={cafeListStyle.cafeWrap} key={cafe.id}>
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
          {this.props.cafes.loading ? <Loader/> : this.renderCafes()}

        </ScrollView>
      </Layout>
    )
  }
}

const mapStateToProps = ({cafes})=>{
  return { cafes }
};

const mapActionsToProps = {
  getCafes, setCafe
};

export default connect(mapStateToProps, mapActionsToProps)(listScene);