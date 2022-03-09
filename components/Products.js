import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import React from 'react';

const Product = ({ nomDuProduit }) => {

    return(
        <View>
            <Text 
                style={styles.element}>
                { nomDuProduit } 
                {/* nomDuProduit est le props passé en paramètre dans App.js */}
            </Text>
        </View>
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
  