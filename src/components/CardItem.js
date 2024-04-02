//import liraries
import React, { Component, memo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import navigationStrings from '../navigations/navigationStrings';

// create a component
const CardItem = ({item, navigation}) => {
    return (
        <View style={styles.cardView}>
        <View style={styles.cardHeadingView}>
          <Text style={styles.cardAuthor}>{item.author}</Text>
          <Text style={{fontSize: 16, color: '#000'}}>
            {new Date(item.publishedAt).toLocaleDateString()}
          </Text>
        </View>

        <View style={styles.descriptionView}>
          <Text style={styles.descriptionHeading1}>
            {item.title.length > 48
              ? item.title.slice(0, 48) + '...'
              : item.title}
          </Text>
          <View style={styles.descriptionHeading2View}>
            <Text style={styles.descriptionHeading2}>
              {item.description?.length > 150
                ? item.description.slice(0, 149) + '...'
                : item.description}
            </Text>
          </View>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(navigationStrings.DETAIL_VIEW, {
                data: item,
              })
            }
            style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>View more</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    cardView: {
        height: 180,
        width: 370,
        borderWidth: 1,
        borderColor: '#eeee',
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation : 8
      },
      cardHeadingView: {
        padding: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      cardAuthor: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
      },
      descriptionView: {
        marginHorizontal: 16,
      },
      descriptionHeading1: {
        fontSize: 18,
        color: '#000',
        fontWeight: '600',
      },
      descriptionHeading2View: {
        height: 75,
      },
      descriptionHeading2: {
        color: '#000',
        fontSize: 14,
      },
      buttonView: {
        height: 20,
        width: 350,
        marginHorizontal: 10,
        position: 'absolute',
        bottom: 2,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
      buttonStyle: {
        marginRight: 16,
      },
      buttonTextStyle: {
        color: 'blue',
        fontSize: 14,
        fontWeight: '700',
      },
});

//make this component available to the app
export default memo(CardItem);
