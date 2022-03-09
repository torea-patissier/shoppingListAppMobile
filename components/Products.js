import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Product = ({ propsData, propsId, propsDelete }) => {

    return(
      <TouchableOpacity
      onPress ={() => propsDelete(propsId)}
      // OnPress je déclenche la méthode passé par propsDelete en lui passant l'id du produit à delete
      >
        <View>
            <Text 
                style={styles.element}>
                { propsData } 
                {/* propsData est le props passé en paramètre dans App.js */}
            </Text>
        </View>
      </TouchableOpacity>
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
  