import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Soler Palau USA</Text>
      </View>
      <ScrollView style={styles.mainContent}>
        <Text style={styles.welcomeText}>WELCOME!</Text>
        <Text style={styles.exploreText}>Explore S&P USA</Text>
        <View style={styles.iconGrid}>
          {/* Products Icon */}
          <TouchableOpacity style={styles.icon} onPress={() => alert('Navigate to Products')}>
            <Image source={require('./assets/images/fan-solid.svg')} style={styles.iconImage} />
            <Text>Products</Text>
          </TouchableOpacity>
          {/* Documents Icon */}
          <TouchableOpacity style={styles.icon} onPress={() => alert('Navigate to Documents')}>
            <Image source={require('./assets/images/file-pdf-solid.svg')} style={styles.iconImage} />
            <Text>Documents</Text>
          </TouchableOpacity>
          {/* Cross References Icon */}
          <TouchableOpacity style={styles.icon} onPress={() => alert('Navigate to Cross References')}>
            <Image source={require('./assets/images/right-left-solid.svg')} style={styles.iconImage} />
            <Text>Cross References</Text>
          </TouchableOpacity>
          {/* Important Links Icon */}
          <TouchableOpacity style={styles.icon} onPress={() => alert('Navigate to Important Links')}>
            <Image source={require('./assets/images/links.svg')} style={styles.iconImage} />
            <Text>Important Links</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#053658',
    width: '100%',
    position: 'absolute',
    top: 0,
    justifyContent: 'space-between',
    opacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerTitle: {
    color: 'whitesmoke',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: '500',
    textAlign: 'center',
    flex: 1,
  },
  mainContent: {
    marginTop: 60,
  },
  welcomeText: {
    fontSize: 30,
    color: '#053658',
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 5,
  },
  exploreText: {
    fontSize: 35,
    marginTop: 5,
    alignSelf: 'center',
    marginBottom: 50,
    color: '#053658',
    fontWeight: '600',
  },
  iconGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  icon: {
    alignItems: 'center',
    marginBottom: 20,
    width: '50%', // Adjust as needed to manage layout
    backgroundColor: 'white', // Shadow will be more visible with a background color
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  iconImage: {
    width: 100, // Adjust based on your actual image sizes and desired layout
    height: 100,
    marginBottom: 10,
  },
});

export default App;

