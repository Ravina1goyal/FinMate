import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {getItem} from '../../services/storageService';
import {STORAGE_KEYS} from '../../constants/storageKeys';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    checkOnboarding();
  }, []);

  const checkOnboarding = async () => {
    setTimeout(async () => {
      const hasSeenOnboarding = await getItem(
        STORAGE_KEYS.HAS_SEEN_ONBOARDING,
      );

      if (hasSeenOnboarding === 'true') {
        navigation.replace('AuthStack');
      } else {
        navigation.replace('Onboarding');
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fbfe',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;