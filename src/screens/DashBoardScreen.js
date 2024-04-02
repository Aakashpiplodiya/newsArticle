//import liraries
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, RefreshControl} from 'react-native';
import Wrapper from '../components/Wrapper';
import {apiGet} from '../utils/apiService';
import {TOP_HEADLINES} from '../config/apiUrls';
import CardItem from '../components/CardItem';

// create a component
const DashBoardScreen = ({navigation}) => {
  const [item, setItem] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const fetchData = async () => {
    const res = await apiGet(TOP_HEADLINES);
    if (!!res) {
      setItem(res.articles);
    }
  };

  return (
    <Wrapper>
      <View style={styles.titleView}>
        <Text style={styles.titleHeading}>News App</Text>
      </View>

      <View style={{flex: 1}}>
        <FlatList
          data={item}
          renderItem={({item}) => (
            <CardItem item={item} navigation={navigation} />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </Wrapper>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    height: 60,
    width: 380,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default DashBoardScreen;
