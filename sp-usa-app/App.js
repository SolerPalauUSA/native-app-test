import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

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
          <TouchableOpacity onPress={() => alert('Navigate to Products')} style={styles.iconTouchable}>
  <View style={styles.iconShadow}>
    <Image source={require('./assets/images/fan-solid.svg')} style={styles.iconImage} resizeMode="contain" />
    <Text style={styles.iconText}>Products</Text>
  </View>
</TouchableOpacity>
{/* Documents Icon */}
<TouchableOpacity onPress={() => alert('Navigate to Documents')} style={styles.iconTouchable}>
  <View style={styles.iconShadow}>
    <Image source={require('./assets/images/file-pdf-solid.svg')} style={styles.iconImage} resizeMode="contain" />
    <Text style={styles.iconText}>Documents</Text>
  </View>
</TouchableOpacity>
{/* Cross References Icon */}
<TouchableOpacity onPress={() => alert('Navigate to Cross References')} style={styles.iconTouchable}>
  <View style={styles.iconShadow}>
    <Image source={require('./assets/images/right-left-solid.svg')} style={styles.iconImage} resizeMode="contain" />
    <Text style={styles.iconText}>Cross References</Text>
  </View>
</TouchableOpacity>
{/* Important Links Icon */}
<TouchableOpacity onPress={() => alert('Navigate to Important Links')} style={styles.iconTouchable}>
  <View style={styles.iconShadow}>
    <Image source={require('./assets/images/links.svg')} style={styles.iconImage} resizeMode="contain"/>
    <Text style={styles.iconText}>Important Links</Text>
  </View>
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
    marginTop: 60, // Adjust as needed, for example, to offset the header
  },
  mainContentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  iconTouchable: {
    width: '50%', // Adjust based on your layout needs
    alignItems: 'center',
    marginBottom: 20,
  },
  iconShadow: {
    backgroundColor: 'white', // Background color for the shadow effect
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
    alignItems: 'center',
    justifyContent: 'center',
    width: 100, // Adjust based on your actual icon size
    height: 100, // Adjust to fit content
    borderRadius: 10, // Optional: if you want rounded corners
    marginBottom: 8, // Space between the icon and the text
  },
  iconImage: {
    width: 60, // Adjust according to your icon's size
    height: 60, // Maintain aspect ratio
  },
  iconText: {
    textAlign: 'center',
    // Add any text styling here
  },
});

export default App;
