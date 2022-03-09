import { StyleSheet, Text, View, TextInput, Button, FlatList, Pressable} from 'react-native';
import React from 'react';

const Product = ({ propsData }) => {

    return(
      <Pressable
      onLongPress={() => console.log('Click!')}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? "red" : "green"
        }
      ]}
      >
        <View>
            <Text 
                style={styles.element}>
                { propsData } 
                {/* propsData est le props passé en paramètre dans App.js */}
            </Text>
        </View>
      </Pressable>
    )

}

export default Product;

const styles = StyleSheet.create({

    productItems: {
      borderRadius:20,
      marginTop: 5,
    },
    element: {
      backgroundColor: 'lightgrey',
      padding:10, 
      margin:2,
      fontSize:16,
      marginVertical:6, // Utile
    },
  });
  