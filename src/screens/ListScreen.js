import React from "react";
import {View, Text, StyleSheet} from "react-native"
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {

    /*Two ways of using Key */
    const friends = [
        {name: 'Friend - 1', key: '1'},
        {name: 'Friend - 2', key: '2'},
        {name: 'Friend - 3', key: '3'},
        {name: 'Friend - 4', key: '4'},
        {name: 'Friend - 5', key: '5'},
        {name: 'Friend - 6', key: '6'}
    ];

    const friendsFamily = [
        {name: 'FriendFamily - 1', age: '20'},
        {name: 'FriendFamily - 2', age: '40'},
        {name: 'FriendFamily - 3', age: '60'},
        {name: 'FriendFamily - 4', age: '23'},
        {name: 'FriendFamily - 5', age: '70'},
        {name: 'FriendFamily - 6', age: '10'},
        {name: 'FriendFamily - 7', age: '80'},
        {name: 'FriendFamily - 8', age: '40'}
    ];

    return <View>
        <Text style={styles.textStyle}>Friends List Screen</Text>

        <FlatList
        horizontal // This is equal to horizontal = {true}
        showsHorizontalScrollIndicator = {false}
            data={friends}
            renderItem={({item}) => {
                return <Text style={styles.friendsTextStyle}>{item.name}</Text>
            }}
        />

    
        <Text style={styles.textStyle}>FriendsFamily List </Text>

        <FlatList
        showsVerticalScrollIndicator = {false}
        keyExtractor={friendFamily => friendFamily.name}
            data={friendsFamily}
            renderItem={({item})=> {
                return <Text style={styles.friendsFamilyTextStyle} >{item.name} - Age {item.age}</Text>
            }}
        />

    </View>
}

const styles = StyleSheet.create({
    headerStyle : {
        fontSize: 24
    },

    textStyle : {
        margin : 10
    },

    friendsTextStyle : {
        margin : 10
    },

    friendsFamilyTextStyle : {
        margin : 40
    }

})

export default ListScreen;


