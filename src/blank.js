/*

              <View style={styles.errorMessage}>
                {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>


<View style={{marginTop:32}}> 
<Text style={styles.inputTitle}>Password</Text>
 <TextInput style={styles.input} secureTextEntry autoCapitalize="none"
 onChangeText={this.onPasswordChange.bind(this)}
 value={this.props.password}></TextInput>
</View>
</View>

<TouchableOpacity style={styles.button} onPress={this.handleLogin}>
<Text style={{color:'white'}}>Sign In</Text>
</TouchableOpacity>

<TouchableOpacity 
style={{alignSelf:'center', marginTop:32}}
onPress={()=> this.props.navigation.navigate('Register')}>
<Text style={{color:'#414959', fontSize: 14}}>First Time Here?<Text style={{color: 'blue', fontSize:14}}> Sign Up</Text>
</Text>
</TouchableOpacity>*/