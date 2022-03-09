import { StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';
import { useState } from 'react';
import Product from './components/Products'; // J'importe le composent produit
import AddProduct from './components/AddProduct'; //J'importe le composent addProduct

export default function App() {

  // J'enregistre ici les différents produits dans un tableau
  const [myProducts, setMyProducts] = useState([]);

  //Product == information qu'on va assigner à la propriété name
  const submitHandler = (product, setProduct) => {

    /**
     * product et setProduct sont envoyé ensuite en props grâce à propsDeFonction dans AddProduct.js
     * 
     */

      // Variable qui prend la date en mms depuis le 01/01/1970 et converti en string ( pour avoir id unique)
      const idString = Date.now().toString()
      setMyProducts( currentMyProducts => [{key : idString, name : product},...currentMyProducts])
      setProduct(''); // Permet de vider l'input une fois qu'on appuie sur valider
  }


  return (

    <View style={styles.container}>

      <AddProduct propsDeFonction = {submitHandler} /> 
      {/* J'affiche le composent AddProduct qui prend en paramètre le props propsDeFonction
      Le props PERMET DE PASSER UNE FONCTION ENTRE LES COMPOSENTS */}
      
      {/* Liste */}
      <FlatList
      data = {myProducts}
      renderItem = {({item})=> <Product propsData = {item.name} /> }
      /**
       * J'affiche le composent Product qui prend en  paramètre nomDuProduit
       * nomDuProduit prend en valeur item.name soit la valeur entrée dans l'input
       * nomDuProduit est un props envoyé vers Product.js, enfant de App.js
       * PERMET DE PASSER DE LA DATA ENTRE LES COMPOSENTS
       */
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    padding: 40,
    paddingTop:60,
  },
});
