import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles'; 

import logo from '../../../images/logo-rockettodo.png';

export function Header(){
    return(
        <View style={styles.header}>
            <Image style={styles.logo} source={logo} />
        </View>
    )
}
