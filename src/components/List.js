import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, FlatList} from 'react-native';
import ListItem from './ListItem'
import {casesFetch} from '../actions';

class CaseList extends React.Component {
    componentDidMount(){
        this.props.casesFetch();
    }

    renderItem = ({ item }) => <ListItem employee={item} />; 
      

    render(){
        console.log(this.props)
        return (
            <View styles={styles.container}>

            <FlatList
            data={this.props.employee.item}
            renderItem={this.renderItem}
            keyExtractor = {(item) => item.key}
            
            ></FlatList>
        </View>
               
        )
    }
}

const mapStateToProps = state => {
    const keys = Object.keys(state.person);
    const person= keys.map(uid => ({...state.person[uid], uid})
    ); //parsing object to an array without lodash

    return {person};
}


const styles = StyleSheet.create({

    container: {
      flex: 1
  
    }
})

export default connect (mapStateToProps, {casesFetch}) (CaseList);
