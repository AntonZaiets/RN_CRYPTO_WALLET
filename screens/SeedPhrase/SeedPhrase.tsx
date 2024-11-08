import React, { useEffect, useState } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { ArrowBackSvg } from '@/assets/svg/arrowBack.tsx';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style.ts';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SeedPhraseGenerator = () => {
  const navigation = useNavigation();
  const [seedPhrase, setSeedPhrase] = useState<string[] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([3, 10, 7]);
  //const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>(
    Array(selectedIndices.length).fill(null),
  );
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
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
    'berry',
    'blueberry',
    'water',
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
    'camp',
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
    saveSeedPhrase(selectedWords);
  };

  /*const handleWordSelect = (word: string) => {
      const newSelectedWords = [...selectedWords];
      newSelectedWords[selectedWords.filter(Boolean).length] = word;
      setSelectedWords(newSelectedWords);
    };*/

  const handleWordSelect = (word: string) => {
    const firstEmptyIndex = selectedWords.findIndex((w) => !w);

    if (firstEmptyIndex !== -1) {
      const newSelectedWords = [...selectedWords];
      newSelectedWords[firstEmptyIndex] = word;
      setSelectedWords(newSelectedWords);
    }
  };

  const checkSelectedWords = () => {
    const correctWords = selectedIndices.map(index => seedPhrase[index - 1]);
    const isCorrect = correctWords.every(
      (word, i) => word === selectedWords[i],
    );

    if (isCorrect) {
      setError('');
      navigation.navigate('Tabs' as never);
    } else {
      setError(
        'The selected words do not match the original phrase. Try again.',
      );
    }
  };

  const saveSeedPhrase = async (phrase: string[]) => {
    try {
      await AsyncStorage.setItem('seedPhrase', JSON.stringify(phrase));
      console.log('Seed phrase saved successfully');
    } catch (error) {
      console.error('Failed to save the seed phrase', error);
    }
  };

  const deleteSeedPhrase = async () => {
    try {
      await AsyncStorage.removeItem('seedPhrase');
      console.log('Сід фразу видалено');
    } catch (error) {
      console.error('Помилка при видаленні сід фрази:', error);
    }
  };

  const handleViewPress = () => {
    if (!seedPhrase) {
      generateSeedPhrase();
    }
    setIsVisible(true);
  };

  useEffect(() => {
    if (step === 0) {
      setStep(0);
      deleteSeedPhrase();
      generateSeedPhrase();
    }
  }, []);

  return (
    <SafeAreaView style={style.container}>
      {step > 0 ? (
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
          </View>
          <Text style={style.stepText}>3/3</Text>
        </View>
      ) : (
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
      )}
      {step === 0 && (
        <>
          <Text style={style.title}>Write Down Your Seed Phrase</Text>
          <Text style={style.subtitle}>
            This is your seed phrase. Write it down on a paper and keep it in a
            safe place. You'll be asked to re-enter this phrase (in order) on
            the next step.
          </Text>

          {!isVisible ? (
            <View style={style.seedContainer}>
              <TouchableOpacity
                onPress={handleViewPress}
                style={style.viewButton}>
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
        </>
      )}
      {step > 0 && (
        <View style={style.optionalContainer}>
          <Text style={style.title}>Confirm Seed Phrase</Text>
          <Text style={style.errorText}>{error}</Text>
          <View style={style.chosenWords}>
            <Text style={style.instructionText}>
              Select each word in the order it was presented to you
            </Text>
            <View style={style.wordIndicesContainer}>
              {selectedIndices.map((index, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={style.indexBox}
                  onPress={() => {
                    const updatedSelectedWords = [...selectedWords];
                    updatedSelectedWords[idx] = null;
                    setSelectedWords(updatedSelectedWords);
                  }}>
                  <Text style={style.indexText}>
                    {index}. {selectedWords[idx] || ''}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={style.wordSelection}>
            {seedPhrase.map((word, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  style.wordBox /*,
                  selectedWords.includes(word) && style.selectedWordBox,*/,
                ]}
                onPress={() => handleWordSelect(word, index)}
                disabled={selectedWords.includes(word)}>
                <Text style={style.seedWord}>{word}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
      <TouchableOpacity
        style={style.button}
        disabled={!isVisible}
        onPress={() => {
          setStep(1);
          if (step === 0) {
            setStep(1);
          } else {
            checkSelectedWords(); // Проверка выбранных слов при нажатии на "Continue"
          }
        }}>
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
          <Text style={style.buttonText}>Continue</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SeedPhraseGenerator;
