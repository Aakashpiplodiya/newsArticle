import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Wrapper from '../components/Wrapper';
import imagePath from '../constants/imagePath';

const DetailViewScreen = ({navigation, route}) => {
  const {title, author, description, urlToImage, content} = route?.params?.data;
  console.log('description', description);
  return (
    <Wrapper>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image tintColor={'#fff'} source={imagePath.BACK_ARROW} />
        </TouchableOpacity>
        <Text style={{color: '#fff', fontSize: 18}}>{author}</Text>
        <View />
      </View>
      {urlToImage && (
        <Image
          style={{
            height: 300,
            width: 360,
            marginVertical: 16,
          }}
          source={{uri: urlToImage}}
        />
      )}
      <View
        style={{
          marginVertical: 8,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
          }}>
          {description}
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
          }}>
          {content}
        </Text>
      </View>
    </Wrapper>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

//make this component available to the app
export default DetailViewScreen;
