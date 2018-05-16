import {TouchableOpacity, ScrollView, View, Text, Image} from "react-native";
import React, {Component} from "react";
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

import Loader from "../components/loader";
import Layout from "../components/layout"
import {cafeListStyle} from "../themes/styles";
import {getCafes, setCafe} from "../actions/cafeActions";
import Toaster from '../components/toaster';
class listScene extends Component {


  componentWillMount() {
   this.props.getCafes();
  }


  itemPress(id) {
    this.props.setCafe(id);
    Actions.item();
  }

  renderCafes() {

    return this.props.cafes.cafes.allIds.map(id => {
      const cafe = this.props.cafes.cafes.byIds[id];
      return (
        <TouchableOpacity onPress={this.itemPress.bind(this, id)} style={cafeListStyle.cafeWrap} key={cafe.id}>
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
    });
  }

  render() {
    return (
      <Layout title="Cafe around you" active="list">
        <ScrollView>
          <TouchableOpacity onPress={()=>{ Toaster.showMessage('cool')}}>
            <Text>press me</Text>
          </TouchableOpacity>
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