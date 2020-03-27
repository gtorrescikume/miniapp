import React from 'react';
import { Text, StyleSheet } from 'react-native';
 
class ListItem extends React.Component {
  render() {
   const { name } = this.props.employee.item;
 
    return (
      <View>
        <Text style={styles.titleStyle}>
          {name}
        </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create ( {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 1
  }
})
 
export default ListItem;