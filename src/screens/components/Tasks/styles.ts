import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24
    },
    task: {
        width: '100%',
        height: 76,
        backgroundColor: '#262626',
        borderRadius: 8,
        paddingLeft: 17,
        paddingRight: 8,
        paddingVertical: 12,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        flex: 1,
        color: '#fff',
        marginHorizontal: 12
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#262626',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    check: {
        width: 20,
        height: 20,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#1e6f9f',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    trash: {
        resizeMode: 'contain',
        width: 42,
        height: 42,
    },
})