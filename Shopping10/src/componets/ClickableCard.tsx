import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PRODUCTS_LIST} from '../Data/constant';

type CardProps = {
    handleClick:Function,
    items:Product
}

const ClickableCard = (props:CardProps) => {
    const {handleClick,items} = props
  // const items = Product
  return (
    <Pressable onPress={()=>handleClick(items)}>
      <View style={styles.container}>
      <Image source={{uri: items?.imageUrl}} style={styles.imageUrl} />
      <View style={styles.detailsContainer}>
        <Text style={styles.labelStyle}>{items?.name}</Text>
        <View style={styles.ratingContainer}>
          <View style={styles.rating}>
            <Text style={styles.ratingtxt}>{`${items?.rating} ★`}</Text>
          </View>
          <Text
            style={
              styles.ratingCount
            }>{`(${items?.ratingCount.toLocaleString()})`}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>
            {' '}
            ₹{items?.originalPrice.toLocaleString()}
          </Text>
          <Text style={styles.discountPrice}>
            {' '}
            ₹{items?.discountPrice.toLocaleString()}
          </Text>
          <Text
            style={
              styles.offerPercentage
            }>{`%${items?.offerPercentage}Off`}</Text>
        </View>
      </View>
    </View>  
    </Pressable>
    
  );
};

export default ClickableCard;

const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    marginStart: 5,
    fontSize: 18,
    color: '#000000',
    textDecorationLine: 'line-through',
  },
  offerPercentage: {
    marginStart: 5,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  discountPrice: {
    marginStart: 5,
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  ratingCount: {marginStart: 10, fontSize: 16, color: '#000000'},
  //   icon: {height: 15, width: 15},
  ratingtxt: {color: 'white', fontSize: 16},
  rating: {
    width: 60,
    height: 30,
    borderRadius: 5,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // paddingLeft:1.5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  labelStyle: {
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 20,
    flexWrap: 'wrap',
    width: 150,
  },
  detailsContainer: {},
  container: {
    // "alignItems": "center",
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  imageUrl: {
    height: 200,
    width: 150,
  },
});
