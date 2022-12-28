import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Counters() {

    let number = 0;
    const [count, setCount] = useState(number);

    function DecrementCounters() {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <View style={styles.CountersMain}>
            <View style={styles.CountersSecond}>
                <Text style={styles.ConuntersText}>
                    Total Count : {count}
                </Text>
            </View>
            <View style={styles.CountersThree}>
                <Button title='Increment' onPress={() => setCount(count + 1)} />
                <Text style={styles.CountersInner}></Text>
                <Button title='Decrement' onPress={(DecrementCounters)} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CountersMain: {
        width: '100%',
        paddingTop: 40,
        flexDirection: 'column',
        alignContent: 'center',
    },
    CountersSecond: {
        margin: 10,
        color: '#000'
    },
    CountersThree: {
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#000'
    },
    ConuntersText: {
        color: '#000',
        margin: 10,
        paddingBottom: 10,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: 'white',
        fontSize: 25,
    },
    CountersInner: {
        margin: 9,
    }
})