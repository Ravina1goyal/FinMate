import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import CustomInput from '../../components/common/CustomInput';
import PrimaryButton from '../../components/common/PrimaryButton';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>💰</Text>

      <Text style={styles.title}>
        Welcome Back
      </Text>

      <Text style={styles.subtitle}>
        Sign in to continue managing
        your finances
      </Text>

      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <CustomInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.forgotContainer}>
        <Text style={styles.forgotText}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <PrimaryButton
        title="Login"
        onPress={handleLogin}
      />

      <View style={styles.footer}>
        <Text>
          Don't have an account?
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Signup')
          }>
          <Text style={styles.signupText}>
            {' '}Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },

  logo: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },

  subtitle: {
    textAlign: 'center',
    color: '#6B7280',
    marginTop: 10,
    marginBottom: 40,
  },

  forgotContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },

  forgotText: {
    color: '#2563EB',
    fontWeight: '600',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },

  signupText: {
    color: '#2563EB',
    fontWeight: '700',
  },
});