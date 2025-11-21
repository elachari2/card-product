import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";

export default function App() {

 
  const produits = [
    {
      id: 1,
      nom: "Converse Chuck Taylor",
      prix: 120.50,
      description: "Confort ultime pour le sport.",
      image: "https://images.unsplash.com/photo-1680204101108-d1bf3a7c725d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      nom: "Adidas samba ",
      prix: 89.99,
      description: "Légère et performante.",
      image: "https://images.unsplash.com/photo-1718220095476-7916e897fc55?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      nom: "Adidas yezzy",
      prix: 90.00,
      description: "Style intemporel et confortable.",
      image: "https://images.unsplash.com/photo-1588499894193-2c4dd05b0f09?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      nom: "Puma RS-X",
      prix: 78.89,
      description: "Style moderne et souple.",
      image: "https://images.unsplash.com/photo-1608379894453-c6b729b05596?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [total, setTotal] = useState(0);

  const acheter = (prix) => {
    setTotal(total + prix);
  };

  const reinitialiserTotal = () => {
    setTotal(0);
  };

  const renderCard = ({ item }) => (
    <View style={styles.card}>

      <Image 
        source={{ uri: item.image }} 
        style={styles.image}
      />

      <View style={styles.row}>
        <Text style={styles.nom}>{item.nom}</Text>
        <Text style={styles.prix}>{item.prix} €</Text>
      </View>

      <Text style={styles.description}>{item.description}</Text>

      <TouchableOpacity style={styles.btn} onPress={() => acheter(item.prix)}>
        <Text style={styles.btnText}>Acheter maintenant</Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.total}>🛒 Total : {total} €</Text>
      
      <TouchableOpacity style={styles.btnReinitialiser} onPress={reinitialiserTotal}>
        <Text style={styles.btnReinitialiserText}>Réinitialiser</Text>
      </TouchableOpacity>

      <FlatList
        data={produits}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f2f2f2",
  },

  total: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "left",
    position: "relative",
    color: "#2b4874ff",
    marginBottom: 40,
    marginTop: 20,
    fontWeight: "bold",
  },

  btnReinitialiser: {
    backgroundColor: "#e63946",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },

  btnReinitialiserText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },

  image: {
    width: "100%",
    height: 190,
    borderRadius: 10,
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  nom: {
    fontSize: 18,
    fontWeight: "bold",
  },

  prix: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#e63946",
  },

  description: {
    marginVertical: 10,
    color: "#555",
  },

  btn: {
    backgroundColor: "#37742bff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
