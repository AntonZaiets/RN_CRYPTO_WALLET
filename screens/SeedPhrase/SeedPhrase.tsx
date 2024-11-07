import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { ArrowBackSvg } from '@/assets/svg/arrowBack.tsx';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style.ts';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

const SeedPhraseGenerator = () => {
  const navigation = useNavigation();
  const [seedPhrase, setSeedPhrase] = useState<string[] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const style = styles();
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
    'pizza',
    'pancake',
    'toast',
    'bacon',
    'soup',
    'salad',
    'fruit',
    'jelly',
    'syrup',
    'muffin',
    'bagel',
    'cereal',
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
    'soup',
    'sauce',
    'dip',
    'mustard',
    'vinegar',
    'oil',
    'ketchup',
    'hotdog',
    'curry',
    'gravy',
    'steak',
    'barbecue',
    'sausage',
    'pie',
    'biscuit',
    'waffle',
    'tart',
    'pudding',
    'mousse',
    'popsicle',
    'pudding',
    'compote',
    'sorbet',
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
    'juice',
    'soda',
    'water',
    'wine',
    'beer',
    'champagne',
    'whiskey',
  ];

  const generateSeedPhrase = () => {
    // Generate a new seed phrase
    let selectedWords: string[] = [];
    const wordSet = new Set<string>();

    while (wordSet.size < 12) {
      const randomIndex = Math.floor(Math.random() * wordList.length);
      wordSet.add(wordList[randomIndex]);
    }
    selectedWords = Array.from(wordSet);
    setSeedPhrase(selectedWords);
  };
  useEffect(() => {
    generateSeedPhrase();
  }, []);

  const handleViewPress = () => {
    if (!seedPhrase) {
      generateSeedPhrase();
    }
    setIsVisible(true);
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.progressContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackSvg />
        </TouchableOpacity>
        <View style={style.progressWrapper}>
          <LinearGradient
            colors={['#6EE7B7', '#3B82F6', '#9333EA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.progressCircle}
          />
          <LinearGradient
            colors={['#6EE7B7', '#3B82F6', '#9333EA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.progressBar}
          />
          <LinearGradient
            colors={['#6EE7B7', '#3B82F6', '#9333EA']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={style.progressCircle}
          />
          <View style={style.progressBar} />
          <View style={style.progressCircleInactive} />
        </View>
        <Text style={style.stepText}>2/3</Text>
      </View>

      <Text style={style.title}>Write Down Your Seed Phrase</Text>
      <Text style={style.subtitle}>
        This is your seed phrase. Write it down on a paper and keep it in a safe
        place. You'll be asked to re-enter this phrase (in order) on the next
        step.
      </Text>

      {!isVisible ? (
        <View style={style.seedContainer}>
          <TouchableOpacity onPress={handleViewPress} style={style.viewButton}>
            <Text style={style.viewButtonText}>View</Text>
          </TouchableOpacity>
          <BlurView intensity={25} style={style.blurBg} />
          {seedPhrase?.map((word, index) => (
            <View key={index} style={style.wordBox}>
              <Text style={style.seedWord}>
                {index + 1}. {word}
              </Text>
            </View>
          ))}
        </View>
      ) : (
        <View style={style.seedContainer}>
          {seedPhrase?.map((word, index) => (
            <View key={index} style={style.wordBox}>
              <Text style={style.seedWord}>
                {index + 1}. {word}
              </Text>
            </View>
          ))}
        </View>
      )}
      <TouchableOpacity
        style={style.button}
        disabled={!isVisible}
        // onPress={() => {
        //   setOpenMainModel(true);
        // }}
      >
        <LinearGradient
          colors={
            isVisible ? ['#6EE7B7', '#3B82F6', '#9333EA'] : ['#555', '#555']
          }
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            style.buttonGradient,
            {
              opacity: isVisible ? 1 : 0.5,
            },
          ]}>
          <Text style={style.buttonText}> Next</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SeedPhraseGenerator;
