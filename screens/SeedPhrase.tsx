import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SeedPhraseGenerator = () => {
  const [seedPhrase, setSeedPhrase] = useState<string[] | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const wordList = [
    'apple',
    'banana',
    'grape',
    'lemon',
    'peach',
    'cherry',
    'kiwi',
    'orange',
    'melon',
    'plum',
    'pear',
    'lime',
    'fig',
    'pineapple',
    'mango',
    'strawberry',
    'blueberry',
    'watermelon',
    'apricot',
    'nectarine',
    'coconut',
    'papaya',
    'blackberry',
    'grapefruit',
    'kiwi',
    'tangerine',
    'avocado',
    'papaya',
    'carrot',
    'spinach',
    'potato',
    'tomato',
    'lettuce',
    'cucumber',
    'garlic',
    'onion',
    'ginger',
    'celery',
    'parsley',
    'broccoli',
    'zucchini',
    'chocolate',
    'cookie',
    'coffee',
    'tea',
    'sugar',
    'salt',
    'pepper',
    'cheese',
    'bread',
    'butter',
    'milk',
    'egg',
    'pasta',
    'rice',
    'butter',
    'popcorn',
    'cake',
    'pie',
    'cookie',
    'donut',
    'sandwich',
    'hamburger',
    'pizza',
    'pancake',
    'toast',
    'bacon',
    'soup',
    'salad',
    'fruit',
    'vegetable',
    'icecream',
    'jelly',
    'syrup',
    'muffin',
    'bagel',
    'cereal',
    'frenchfries',
    'fish',
    'chicken',
    'beef',
    'pork',
    'turkey',
    'shrimp',
    'lobster',
    'clam',
    'crab',
    'salmon',
    'tuna',
    'bread',
    'roast',
    'sushi',
    'steak',
    'burrito',
    'taco',
    'noodle',
    'lasagna',
    'spaghetti',
    'soup',
    'sauce',
    'dip',
    'mustard',
    'mayonnaise',
    'vinegar',
    'oil',
    'ketchup',
    'hotdog',
    'curry',
    'gravy',
    'steak',
    'barbecue',
    'cheeseburger',
    'sausage',
    'pie',
    'biscuit',
    'waffle',
    'tart',
    'pudding',
    'fruitcake',
    'mousse',
    'popsicle',
    'pudding',
    'compote',
    'sorbet',
    'cheesecake',
    'cupcake',
    'puff',
    'toast',
    'wafer',
    'popsicle',
    'gelato',
    'smoothie',
    'latte',
    'espresso',
    'latte',
    'mocha',
    'americano',
    'frappuccino',
    'juice',
    'milkshake',
    'margarita',
    'cocktail',
    'soda',
    'water',
    'wine',
    'beer',
    'champagne',
    'whiskey',
  ];

  const generateSeedPhrase = () => {
    let selectedWords: string[] = [];
    const wordSet = new Set<string>();

    while (wordSet.size < 12) {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      wordSet.add(wordList[randomIndex]);
    }
    selectedWords = Array.from(wordSet);
    setSeedPhrase(selectedWords);
  };

  const handleViewPress = () => {
    if (!seedPhrase) {
      generateSeedPhrase();
    }
    setIsVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Write Down Your Seed Phrase</Text>
      <Text style={styles.subtitle}>
        This is your seed phrase. Write it down and keep it in a safe place.
      </Text>

      {!isVisible ? (
        <TouchableOpacity onPress={handleViewPress} style={styles.viewButton}>
          <Text style={styles.viewButtonText}>
            Tap to reveal your seed phrase
          </Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.seedContainer}>
          {seedPhrase?.map((word, index) => (
            <Text key={index} style={styles.seedWord}>
              {index + 1}. {word}
            </Text>
          ))}
        </View>
      )}

      <TouchableOpacity
        disabled={!isVisible}
        style={[styles.continueButton, !isVisible && styles.disabledButton]}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#888888',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  viewButton: {
    backgroundColor: '#333333',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  viewButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  seedContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  seedWord: {
    color: '#FFFFFF',
    fontSize: 18,
    marginVertical: 3,
  },
  continueButton: {
    backgroundColor: '#6A0DAD',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#444444',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

export default SeedPhraseGenerator;
