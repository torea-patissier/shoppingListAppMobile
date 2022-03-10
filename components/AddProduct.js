import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import { useState, useEffect } from 'react';


const AddProduct = ({propsDeFonction} ) => {

    const [product, setProduct] = useState('')// J'entre une valeur dans l'input 
    
    const inputHandler = (val) => { // Je set product via la valeur passé dans l'input
        setProduct(val)
    }

    const handleClick = () => {
        propsDeFonction(product)
        setProduct('')
    }

    return(
        <View style={styles.inputContainer}>

            {/* Input */}
            <TextInput
                style={styles.textInput}
                placeholder= 'Nouveau produit' 
                onChangeText={inputHandler}
                value={product}
            />

            {/* Bouton */}
            <Button
                title='Valider'
                onPress={handleClick}
             />

      </View>
    )
}

export default AddProduct;


const styles = StyleSheet.create({
    textInput: {
      borderColor: 'grey',
      borderWidth: 1,
      padding: 5,
      borderRadius: 5,
      fontSize:15,
      flexGrow: 1, // Utile
    },
    inputContainer: {
      flexDirection: 'row', 
      marginBottom: 4
    },
  });
  