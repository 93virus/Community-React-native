import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Info = () => {
    return (
        <View>
            <View style={styles.infoContainer}>
                <Text style={styles.text}>Bikas Adhikari</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, {fontSize: 26}]}>154</Text>
                    <Text style={[styles.text, styles.subText]}>Posts</Text>
                </View>
                <View style={[styles.statsBox, {borderColor: '#dfd8c8',borderLeftWidth: 1, borderRightWidth: 1}]}>
                    <Text style={[styles.text, {fontSize: 26}]}>1634</Text>
                    <Text style={[styles.text, styles.subText]}>Points</Text>
                </View>
                <View style={styles.statsBox}>
                    <Text style={[styles.text, {fontSize: 26}]}>983</Text>
                    <Text style={[styles.text, styles.subText]}>Likes</Text>
                </View>
            </View>
        </View>
    )
}

export default Info;

const styles = StyleSheet.create({
    infoContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 16
    },
    text: {
        fontWeight: "200",
        fontSize: 30,
        color: '#52575d'
    },
    statsContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 32
    },
    statsBox: {
        alignItems: 'center',
        flex: 1
    },
    subText: {
        fontSize: 15,
        color: '#aeb5bc',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})