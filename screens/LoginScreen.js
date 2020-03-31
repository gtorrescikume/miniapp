import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity,} from 'react-native';
import {Spinner} from '../src/Spinner'
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import {emailChanged, passwordChanged, loginUser } from '../src/actions'


class LoginScreen extends React.Component {
    onEmailChange(text){
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const {email, password} = this.props;

        this.props.loginUser({email, password});
    }

  
    render () {
        return (
            
            <View style={styles.container}>
                <Text style={styles.greeting}>{`Hello!\nWelcome back`}</Text>
               


                <View style={styles.form}>
                    <View>
                      <Text style={styles.inputTitle}>Email</Text>

                        <TextInput style={styles.input} autoCapitalize="none"
                        placeholder='email@email.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                        //  onChangeText={email => this.setState({email})}
                        //  value={this.state.email}
                        ></TextInput>

                    </View>

                    <View style={{marginTop:50}}> 
                        <Text style={styles.inputTitle}>Password</Text>

                            <TextInput style={styles.input} secureTextEntry autoCapitalize="none"
                            placeholder='password'
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}>
                            </TextInput>
                    </View>


                    <TouchableOpacity style={styles.button} onPress={this.onButtonPress.bind(this)}>
                         <Text style={{color:'white'}}>Sign In</Text>
                     </TouchableOpacity>
        
                     <Text style={styles.errorMessage}>{this.props.error}</Text>

                     <TouchableOpacity style={styles.button} onPress={()=>{Actions.signup()}}>
                         <Text style={{color:'white'}}>Sign Up</Text>
                     </TouchableOpacity>
                </View>
            </View>   

        )
    }
}



const styles= StyleSheet.create({
    container: {
        flex: 1
        
    },
    greeting: {
        marginTop: 50,
        fontSize: 18,
        fontWeight: '400',
        textAlign: "center"
    },
    
    errorMessage: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        color: "red",
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center'
    },
    form: {
        marginVertical: 40,
        marginHorizontal: 30
    },
    inputTitle: {

        color: "#8A8F9E",
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: 1,
        height: 30,
        fontSize: 16,
        color: '#161F3D'
    },
    button: {
        marginTop: 50,
        marginHorizontal: 30,
        backgroundColor: '#344378',
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: 'center'
    }
})

const mapStateToProps =({auth})=> {
    const {email, password, error} = auth;
    return {email, password, error};
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser}) (LoginScreen);