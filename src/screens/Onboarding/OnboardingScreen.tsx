import React, {useRef, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import OnboardingItem from '../../components/onboarding/OnboardingItem';
import {onboardingData} from '../../data/onboardingData';

import {setItem} from '../../services/storageService';
import {STORAGE_KEYS} from '../../constants/storageKeys';

const {width} = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useNavigation<any>();

  const flatListRef = useRef<FlatList>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const handleNext = async () => {
    if (currentIndex < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
      });
    } else {
      await setItem(
        STORAGE_KEYS.HAS_SEEN_ONBOARDING,
        'true',
      );

      navigation.replace('AuthStack');
    }
  };

  const handleSkip = async () => {
    await setItem(
      STORAGE_KEYS.HAS_SEEN_ONBOARDING,
      'true',
    );

    navigation.replace('AuthStack');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.skipButton}
        onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={({item}) => (
          <OnboardingItem item={item} />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfig}
      />

      <View style={styles.bottomContainer}>
        <View style={styles.dotsContainer}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index &&
                  styles.activeDot,
              ]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex === onboardingData.length - 1
              ? 'Get Started'
              : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  skipButton: {
    alignSelf: 'flex-end',
    marginTop: 60,
    marginRight: 20,
  },

  skipText: {
    fontSize: 16,
    color: '#2563EB',
    fontWeight: '600',
  },

  bottomContainer: {
    paddingBottom: 40,
    alignItems: 'center',
  },

  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },

  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 4,
  },

  activeDot: {
    width: 24,
    backgroundColor: '#2563EB',
  },

  nextButton: {
    width: width - 48,
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});