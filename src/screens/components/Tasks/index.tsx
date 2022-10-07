import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

import BouncyCheckbox from "react-native-bouncy-checkbox";

import { styles } from './styles';

interface Props {
    description: string;
    finished: boolean;
    onRemove: () => void;
  }

export function Tasks({ description, onRemove }:Props){
    return(
        <View style={styles.container}>
            <View style={styles.task}>
                <BouncyCheckbox
                    style={{width: '85%'}}
                    size={25}
                    fillColor='#5E60CE'
                    unfillColor="transparent"
                    innerIconStyle={{ borderWidth: 2 }}
                    text={description}
                    textStyle={{ 
                        color: '#fff',
                        fontSize: 14,
                        marginHorizontal: 5
                    }}
                    onPress={(isChecked: boolean) => {}}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={onRemove}
                >
                    <Feather name="trash-2" size={20} color="#808080" />
                </TouchableOpacity>
            </View>
        </View>
    )
}