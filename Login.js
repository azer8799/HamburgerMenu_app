import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';


export default function Login(props) {
    const [loginData] = useState([
       { user : "Anup@gmail.com",
         password : "Anup"
       },
       { user : "anup.singh@ezeu.in",
          password : "Anup"
       },
       { user : "Kiran@gmail.com",
          password : "Anup"
       },
       { user : "Manoj@gmail.com",
         password : "Anup"
       },
       { user : "Ezeu@gmail.com",
         password : "Anup"
       },

    ]);  
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const check = ()=>{
         const value = loginData.find(
                         ((item)=>(item.user === email)&&(item.password === password))
                        );
         console.log(JSON.stringify(value));
            if (value) {
                console.log("valid");
                 props.navigation.navigate('LoginPage')
            } else {
                alert("Invalid Email and Password");
                props.navigation.navigate('Home')
            }
    }

  return (

      <View style={styles.container}>
      
        <View style={styles.centerizedView}>
          <View style={styles.Box}>
            <Text style={styles.loginText}>Login</Text>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                keyboardType='email-address'
                textContentType='emailAddress'
                onChangeText={(text) => {
                    setEmail(text);
                    console.log(email);
                }}
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={(text) => {
                    setPassword(text);
                    console.log(password);
                }}
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={check}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  
  centerizedView: {
    width: '100%',
    top: '15%',
  },
  Box: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  loginText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center'
  },
  // hr: {
  //   width: '100%',
  //   height: 0.5,
  //   backgroundColor: '#444',
  //   marginTop: 6,
  // },
  inputBox: {
    marginTop: 10,
    marginBottom:10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 7,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#4287f5',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  // registerText: {
  //   textAlign: 'center',
  //   marginTop: 20,
  //   fontSize: 16,
  // },
  // forgotPasswordText: {
  //   textAlign: 'center',
  //   marginTop: 12,
  //   fontSize: 16,
  // },
});