import { StyleSheet, View, FlatList, Modal, Text, Pressable} from 'react-native';
import { useState } from 'react';
import Product from './components/Products'; // J'importe le composent produit
import AddProduct from './components/AddProduct'; //J'importe le composent addProduct

export default function App() {

  // J'enregistre ici les différents produits dans un tableau
  const [myProducts, setMyProducts] = useState([]); 
  const [modal, setModal] = useState(false); 
  
  //Product == information qu'on va assigner à la propriété name
  const submitHandler = (product) => {

      if (product.length > 1) {
        /**
         * product est envoyé ensuite en props grâce à propsDeFonction dans AddProduct.js
         */
        // Variable qui prend la date en mms depuis le 01/01/1970 et converti en string ( pour avoir id unique)
        const idString = Date.now().toString()
        setMyProducts( currentMyProducts => [{key : idString, name : product},...currentMyProducts])

      } else {
        setModal(true)
      }

  }

    

  const deleteProduct = (key) => {
    // Je set setMyProducts en renvoyant les produits de la liste contenant un id différent de celui sur lequel je clique
    setMyProducts(currentMyProducts => {
      return currentMyProducts.filter(product => product.key != key)
    })
  }

  return (

    <View style={styles.container}>

      <Modal
      visible = {modal}
      // onPress = {() => setModal(false)}
      animationType = 'slide'
      transparent
      >
        <View style={styles.modalContainer}>

          <View style={styles.modalContent}>

            <View style={styles.modalHeader}>
              <Text>Erreur</Text>
            </View>

            <View style={styles.modalBody}>
              <Text>Merci d'indiquer plus  d'un caractère</Text>
            </View>

            <View style={styles.modalFooter}>
              <Pressable
              onPress = {() => setModal(false)}
              >
              <Text>Mercé</Text>
              </Pressable>
              {/* Pressable utile */}
            </View>

          </View>

        </View>

      </Modal>
 

      <AddProduct propsDeFonction = {submitHandler} /> 
      {/* J'affiche le composent AddProduct qui prend en paramètre le props propsDeFonction
      Le props PERMET DE PASSER UNE FONCTION ENTRE LES COMPOSENTS */}
      
      {/* Liste */}
      <FlatList
      data = {myProducts}
      renderItem = {({item})=> 
      (<Product
        propsData = {item.name}
        propsId = {item.key}
        propsDelete = {deleteProduct}
        />) }
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
  modalContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
  },
  modalContent: {
    alignItems:'center',
    backgroundColor:'green',
    borderRadius:4,
    height:250,
    width:'80%',
  },
  modalHeader: {
    backgroundColor: 'yellow',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderTopLeftRadius:4,
    borderTopRightRadius:4,

  },
  modalBody: {
    backgroundColor:'lightblue',
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  modalFooter: {
    height:'20%',
    backgroundColor:'red',
    width:'100%',
    borderBottomLeftRadius:4,
    borderBottomRightRadius:4,
    alignItems:'center',
    justifyContent:'center',
  },
});
