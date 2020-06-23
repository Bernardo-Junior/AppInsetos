import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import equipe from '../../icones/10-ajuda/equipe.png';
import lab312 from '../../icones/10-ajuda/lab312.png';
import logoInsetopedia from '../../icones/10-ajuda/logo-insetopedia.png';
import sobre from '../../icones/10-ajuda/sobre.png';
import buttonLeft from '../../icones/2-icones/arrow-left1.png';
import styles from './styles';

import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';


export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerModalImportancia}>
        <View style={styles.boxTextHeaderModal}>
          <Text style={styles.textHeaderModal}> Sobre o Insetopédia </Text>
        </View>
      </View>

      <View style={styles.logo}>
          <Image style={styles.imgLogo} source={logoInsetopedia} resizeMode='stretch' />
      </View>

      <View  style={{alignContent: 'center',alignItems: 'center',}}>
        <View
          style={{                            
            borderBottomColor: '#B3B3B3',
            borderBottomWidth: 3,
            paddingTop: hp('3%'),
            width: wp('100%'),
          }}
        /> 
      </View> 

      <View style={styles.boxImg1}>
        <Image style={styles.img1} source={sobre} resizeMode='stretch' />
      </View>

      <View  style={{alignContent: 'center',alignItems: 'center',}}>
        <View
          style={{                            
            borderBottomColor: '#B3B3B3',
            borderBottomWidth: 3,
            paddingTop: hp('3%'),
            width: wp('100%'),
          }}
        /> 
      </View> 

      <View style={styles.boxImg1}>
        <Image style={styles.img2} source={equipe} resizeMode='stretch' />
      </View>

      <View  style={{alignContent: 'center',alignItems: 'center',}}>
        <View
          style={{                            
            borderBottomColor: '#B3B3B3',
            borderBottomWidth: 3,
            paddingTop: hp('3%'),
            width: wp('100%'),
          }}
        /> 
      </View> 

      <View style={styles.boxImg1}>
        <Image style={styles.img3} source={lab312} resizeMode='stretch' />
      </View>
      
    </View>
  );
}

