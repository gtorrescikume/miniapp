/*
import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import * as firebase from 'firebase'

const DismissKeyboard= ({children}) => (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

class RegisterScreen extends React.Component {
    onEmailChange(text){
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }
    };
    /*

    handleSignUp= () => {

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(userCredentials=> {
            return userCredentials.user.updateProfile({
                displayName:this.state.name
            });
        })
            .catch(error => this.setState({errorMessage:error.message}))
    }

    */
   /*
    render () {
        return (
            <DismissKeyboard>
            <View style={styles.container}>
                <Text style={styles.greeting}>{`Hello!\nSign Up here`}</Text>

                <Text style={styles.errorMessage}>{this.props.error}</Text>

                <View style={styles.form}>
                    <View>
                      <Text style= {styles.inputTitle}>Full Name</Text>
                       <TextInput style={styles.input} autoCapitalize="none"
                       placeholder='Jane Doe'
                       onChangeText={this.onNameChange.bind(this)}
                       value={this.props.name}></TextInput>
                    </View>

                    <View style={{marginTop:32}}>
                      <Text style={styles.inputTitle}>Email</Text>
                       <TextInput style={styles.input} autoCapitalize="none"
                       onChangeText={email => this.setState({email})}
                       value={this.state.email}></TextInput>
                    </View>

                    <View style={{marginTop:32}}>
                      <Text style={styles.inputTitle}>Password</Text>
                       <TextInput style={styles.input} secureTextEntry autoCapitalize="none"
                       onChangeText={password => this.setState({password})}
                       value={this.state.password}></TextInput>
                    </View><View style={{marginTop:32}}> 
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input} secureTextEntry autoCapitalize="none"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}></TextInput>
                            </View>
                 </View>

                 <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                     <Text style={{color:'white'}}>Sign Up</Text>
                 </TouchableOpacity>

                 <TouchableOpacity 
                 style={{alignSelf:'center', marginTop:32}}
                 onPress={()=> this.props.navigation.navigate('Login')}>
                     <Text style={{color:'#414959', fontSize: 14}}>Already Registered?<Text style={{color: 'blue', fontSize:14}}> Log In!</Text>
                     </Text>
                 </TouchableOpacity>
      
        </View>
        </DismissKeyboard>
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

export default RegisterScreen; */