import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, FlatList} from 'react-native';
import ListItem from './ListItem'
import {casesFetch} from '../actions';

class CaseList extends React.Component {
    componentDidMount(){
        this.props.casesFetch();
    }

    renderItem = ({ item }) => <ListItem people={item} />; 
      

    render(){
        console.log(this.props)
        return (
            <View styles={styles.container}>

            <FlatList
            data={this.props.person}
            renderItem={this.renderItem}
            keyExtractor = {(item) => item.uid}
            
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

/*const employees = Object.keys(state.employees)
.map(employeeId => {
    return Object.assign({}, state.employees[employeeId], { uid: employeeId });
    */
/*  const employees = Object.keys(state.employees).map(employeeKey => ({
    ...state.employees[employeeKey],
    uid: employeeKey,
  }));
  */
 
const styles = StyleSheet.create({

    container: {
      flex: 1
  
    }
})

export default connect (mapStateToProps, {casesFetch}) (CaseList);
