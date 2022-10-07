import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1a1a1a',
      //padding: 24
    },
    input: {
        flex: 1,
        height: 54,
        backgroundColor: '#262626',
        borderRadius: 6,
        color: '#f2f2f2',
        padding: 16,
        fontSize: 16,
        marginRight: 4
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: -27,
      marginBottom: 30,
      paddingHorizontal: 24
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1e6f9f',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24 
    },   
    tasks: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        paddingBottom: 30,
        marginBottom: 30,
        borderBottomColor: '#333333',
        borderBottomWidth: 1,
    },
    created: {
        flexDirection: 'row',
    },
    done: {
        flexDirection: 'row',
    },
    textCreated: {
        color: '#4ea8de',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10
    },
    textDone: {
        color: '#8284fa',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 10
    },
    counter: {
        width: 25,
        height: 19,
        backgroundColor: '#333',
        borderRadius: 10,
        color: '#d9d9d9',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center'
    },
    listEmptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#808080",
        fontWeight: "bold",
        marginTop: 20
    },
      subTitle: {
        color: "#808080",
        fontSize: 13
    }
})