import react from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import { useState } from 'react';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: "white",
        fontSize: 20,
        fontWeight: "bolo"
    }
});
