import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); 

export default function Profile() {
  const handleButtonPress = (buttonName: string) => {
    console.log(`${buttonName} button pressed`);
  };

  return (
    <View style={styles.container}>
      {/* Top Blue Background */}
      <View style={styles.topSection}>
        {/* Circle Container */}
        <View style={styles.circle}>
          <Image 
              source={require("../../assets/images/profile.png")} // Correct relative path
              style={styles.profileImage}
          />
        </View>
      </View>

      {/* Bumper Space */}
      <View style={styles.bumper}></View>

      {/* White Box for User Points and Buttons */}
      <View style={styles.profileBox}>
        <Text style={styles.pointsText}>2,756</Text>
        <Text style={styles.pointsLabel}>Points</Text>

        {/* Buttons */}
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Post')}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Point Shop')}>
          <Text style={styles.buttonText}>Point Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Account')}>
          <Text style={styles.buttonText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Settings')}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Feedback')}>
          <Text style={styles.buttonText}>Feedback</Text>
        </TouchableOpacity>

        {/* Hypertext */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>About Us</Text>
          <Text style={styles.footerText}>Help</Text>
          <Text style={styles.footerText}>Privacy Center</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4EBF6',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  // Top section with the dark blue color
  topSection: {
    backgroundColor: '#5087F7',
    width: '100%',
    height: height * 0.25, 
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: height * 0.05, 
  },

  // Circle surrounding profile image
  circle: {
    position: 'absolute',
    width: width * 0.50, 
    height: width * 0.50, 
    borderRadius: (width * 0.50) / 2, 
    backgroundColor: '#fff',
    bottom: -height * 0.08, 
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    zIndex: 0,
  },

  // Profile image
  profileImage: {
    width: width * 0.4, 
    height: width * 0.4, 
    borderRadius: (width * 0.4) / 2, 
    borderWidth: 3,
    borderColor: '#fff',
    zIndex: 1
  },

  // Bumper between top section and profile box
  bumper: {
    height: height * 0.02, 
    backgroundColor: '#E4EBF6',
    zIndex: -1,
  },

  // Profile box containing all the buttons
  profileBox: {
    backgroundColor: '#fff',
    width: width * 0.85, 
    borderRadius: 20,
    padding: width * 0.05, 
    alignItems: 'center',
    elevation: 5,
    marginTop: height * 0.08, 
  },

  // Points text
  pointsText: {
    fontSize: width * 0.07, 
    fontWeight: 'bold',
    color: '#333',
  },

  // Points label
  pointsLabel: {
    fontSize: width * 0.04, 
    color: '#777',
    marginBottom: height * 0.005, 
  },

  // Buttons
  button: {
    backgroundColor: '#EFEFEF',
    paddingVertical: height * 0.015, 
    width: '90%',
    borderRadius: 15,
    marginVertical: height * 0.01, 
    alignItems: 'center',
  },

  // Button text
  buttonText: {
    fontSize: width * 0.04, 
    color: '#333',
  },

  footer: {
    marginTop: height * 0.001, 
    alignItems: 'center',
  },

  footerText: {
    color: '#666',
    fontSize: width * 0.035, 
    marginVertical: height * 0.003, 
  },
});
