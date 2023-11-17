import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const BookListScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from Express API
    axios.get('http://localhost:3000/book')
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Book List</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.bookItem}>
            <Text>Title: {item.BooksName}</Text>
            <Text>Author: {item.Author}</Text>
            <Text>Rating: {item.Rating}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookItem: {
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default BookListScreen;
