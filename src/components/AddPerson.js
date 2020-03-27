import React from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {updateCases, addPerson} from '../actions'

class AddPerson extends React.Component {
    onButtonPress() {
        const {number,name, age, description,longitude,latitude} = this.props;

        this.props.addPerson({number, name,age,description,longitude, latitude});
    }
    render () {
        return (
        <View>
          
                <Text style={{marginTop:10, marginHorizontal: 35}}>Case:</Text>
                <TextInput style={styles.inputs}
                value={this.props.number} 
                onChangeText={(text)=>this.props.updateCases({prop:'number', value:text})}
                /> 

                <Text style={{marginHorizontal: 35}}>Name:</Text>
                <TextInput style={styles.inputs}
                value={this.props.name} 
                onChangeText={(text)=>this.props.updateCases({prop:'name', value:text})}/> 

                <Text style={{marginHorizontal: 35}}>Age:</Text>

                <TextInput style={styles.inputs}
                value={this.props.age} 
                onChangeText={(text)=>this.props.updateCases({prop:'age', value:text})}/> 

                <Text style={{marginHorizontal: 35}}>Description:</Text>

                <TextInput style={styles.inputs}
                value={this.props.description}
                onChangeText={(text)=>this.props.updateCases({prop:'description', value: text})}/> 

                <Text style={{marginHorizontal: 35}}>Longitude:</Text>

                <TextInput style={styles.inputs}
                value={this.props.longitude} 
                onChangeText={(text)=>this.props.updateCases({prop:'longitude', value:text})}/> 


                <Text style={{marginHorizontal: 35}}>Latitude:</Text>

                <TextInput style={styles.inputs}
                value={this.props.latitude}
                onChangeText={(text)=>this.props.updateCases({prop:'latitude', value:text})}/> 

           
                
                    <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this)}>
                        <Text style={{color:'white'}}>Add Case</Text>
                    </TouchableOpacity>
              
        </View>        
        )

    }
}

const styles=StyleSheet.create ({
    inputs:{
        borderColor: "#8A8F9E",
        borderWidth: 1,
        paddingLeft:10,
        marginVertical: 10,
        marginHorizontal: 35,
        fontSize: 16,
        color: '#161F3D'
    },
    button: {
        marginTop: 60,
        marginHorizontal: 30,
        backgroundColor: '#344378',
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: 'center'
    }
})

const mapStateToProps = (state) =>{
    const
   {number, name,
    age,
    description,
    longitude,
    latitude} = (state.cases); //reducer//

    return{number,name, age, description, longitude, latitude};
      
};

export default connect(mapStateToProps, {updateCases, addPerson})(AddPerson);