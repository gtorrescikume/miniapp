import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, } from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser, signupUser} from '../src/actions'


class RegisterScreen extends React.Component {
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

    onSignUp() {
        const {email, password} = this.props;

        this.props.signupUser({email, password});
    }
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.greeting}>{`Hello!\nSign Up here`}</Text>

                <Text style={styles.errorMessage}>{this.props.error}</Text>

                <View style={styles.form}>

                    <View style={{marginTop:32}}>
                      <Text style={styles.inputTitle}>Email</Text>
                       <TextInput style={styles.input} autoCapitalize="none"
                        placeholder='email@email.com'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}/>
                    </View>

                    <View style={{marginTop:32}}>
                      <Text style={styles.inputTitle}>Password</Text>
                       <TextInput style={styles.input} secureTextEntry autoCapitalize="none"
                        placeholder='password'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}/>
                    </View>

                </View>

                 <TouchableOpacity style={styles.button} onPress={this.onSignUp.bind(this)}>
                     <Text style={{color:'white'}}>Sign Up</Text>
                 </TouchableOpacity>

                
        </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1
        
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: '400',
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: 'uppercase'
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161F3D'
    },
    button: {
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

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser, signupUser}) (RegisterScreen);
