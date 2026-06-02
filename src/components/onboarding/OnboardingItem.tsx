import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

type Props = {
  item: {
    id: string;
    icon: string;
    title: string;
    description: string;
  };
};

const OnboardingItem = ({item}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{item.icon}</Text>
      </View>

      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.description}>
        {item.description}
      </Text>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  iconContainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#E8F0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },

  icon: {
    fontSize: 80,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6B7280',
    lineHeight: 24,
  },
});