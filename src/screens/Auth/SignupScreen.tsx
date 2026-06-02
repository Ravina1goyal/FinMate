import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import CustomInput from '../../components/common/CustomInput';
import PrimaryButton from '../../components/common/PrimaryButton';

const SignupScreen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');

  const handleSignup = () => {
    console.log('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>💰</Text>

      <Text style={styles.title}>
        Create Account
      </Text>

      <Text style={styles.subtitle}>
        Start your financial journey
      </Text>

      <CustomInput
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />

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

      <CustomInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <PrimaryButton
        title="Create Account"
        onPress={handleSignup}
      />

      {/* <Text style={styles.orText}>
        ───── OR ─────
      </Text>

      <TouchableOpacity
        style={styles.googleButton}>
        <Text style={styles.googleText}>
          Continue with Google
        </Text>
      </TouchableOpacity> */}

      <View style={styles.footer}>
        <Text>
          Already have an account?
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Login')
          }>
          <Text style={styles.loginText}>
            {' '}Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

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
    marginBottom: 30,
  },

  orText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#6B7280',
  },

  googleButton: {
    height: 55,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  googleText: {
    fontWeight: '600',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },

  loginText: {
    color: '#2563EB',
    fontWeight: '700',
  },
});