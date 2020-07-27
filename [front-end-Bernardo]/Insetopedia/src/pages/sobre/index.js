import React, {useState, useEffect} from 'react';
import {Modal, SafeAreaView,View, Alert, Text, StyleSheet,Linking,  FlatList, Image,TouchableOpacity, ScrollView,ImageBackground, RefreshControl } from 'react-native';
import { 
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import * as MailComposer from 'expo-mail-composer';
import headerIcon from '../../icones/Header.png';
import iconPrincipal from '../../icones/10-ajuda/icon.png';
import tituloSobre from '../../icones/10-ajuda/texto-sobre.png';
import equipe from '../../icones/10-ajuda/texto-equipe.png';
import conheca from '../../icones/10-ajuda/texto-lab312.png';
import lab312 from '../../icones/logo-lab312.png';
import icet from '../../icones/Icet.png';
import ufam from '../../icones/Ufam.png';
import styles from './style';

export default function Home() {
    function sendEmailOdette() {
        MailComposer.composeAsync({
            subject: 'Insetopédia App',
            recipients: ['odette@ufam.edu.br'],
            body: "",
        })
    }
    function sendEmailRainner() {
        MailComposer.composeAsync({
            subject: 'Insetopédia App',
            recipients: ['raineramorim@ufam.edu.br'],
            body: "",
        })
    }
    return (
        <>
        <SafeAreaView style={styles.body}>
                <View style={styles.header}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: hp('2.5%'), color: '#FFF', fontWeight: 'bold'}}>Sobre o Insetopédia</Text>
                    </View>
                </View>
                <ScrollView>
                <View style={styles.box1}>
                    <View  style={styles.boxImageLeft}>
                        <Image source={ufam} resizeMode="stretch" style={styles.imageLeft}/>
                    </View>
                

                    <View  style={styles.boxImageCenter}>
                        <Image source={iconPrincipal} resizeMode="contain" style={styles.imageCenter}/>
                    </View>
                    <View  style={styles.boxImageRight}>
                        <Image source={icet} resizeMode="stretch" style={styles.imageRight}/>
                    </View>
                </View>

                <View  style={{alignContent: 'center',alignItems: 'center'}}>
                    <View
                        style={styles.hr}
                    /> 
                </View> 

                <View  style={styles.boxImageSobre}>
                    <Image source={tituloSobre} resizeMode="stretch" style={styles.imageSobre}/>
                </View>
                <View style={styles.box1TextSobre}>
                <View style={styles.box2TextSobre}>
                    <Text style={styles.textSobre}>
                        O Insetopédia é um aplicativo para crianças e adolescentes aprenderem sobre os insetos, aonde encontrá-los, como eles são, quais são e assim por diante
                    </Text>
                </View> 
                </View>

                <View  style={styles.boxHr}>
                    <View
                        style={styles.hr}
                    /> 
                </View> 

                <View  style={styles.boxImageEquipe}>
                    <Image source={equipe} resizeMode="stretch" style={styles.imageEquipe}/>
                </View>
                <View style={styles.box1TextEquipe}>
                <View style={styles.box2TextEquipe}>
                    <Text style={styles.textEquipe}>
                        Este aplicativo foi desenvolvido no âmbito do Instituto de Ciências Exatas e Tecnologia (ICET) da Universidade Federal do Amazonas (UFAM)
                        pelos alunos Bernardo Junior, Maik Elamide e Mateus Caldas e coordenado pelos professores Odette Passos e Rainer Amorim, como parte das atividades desenvolvidas
                        no Laboratório de Pesquisa em Computação I <Text style={{fontWeight: 'bold'}}>(#LAB312)</Text>
                    </Text>
                    <Text style={styles.textEmail}>
                        Você pode falar a respeito do app através do e-mail, com os professores:
                    </Text>
                    <View style={styles.boxButtonsEmails}>
                    <TouchableOpacity style={styles.buttonEmail} onPress={sendEmailOdette}>
                         <Text style={styles.actionEmail}>Odette Passos</Text>
                     </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.buttonEmail} onPress={sendEmailRainner}>
                         <Text style={styles.actionEmail}>Rainer Amorim</Text>
                     </TouchableOpacity>
                     </View>
                </View>
                </View>

                <View  style={styles.boxHr}>
                    <View
                        style={styles.hr}
                    /> 
                </View> 

                <View  style={styles.boxImageConheca}>
                    <Image source={conheca} resizeMode="stretch" style={styles.imageConheca}/>
                </View>
                <View  style={styles.boxImage312}>
                    <Image source={lab312} resizeMode="stretch" style={styles.image312}/>
                </View>
               
                <View style={styles.box1TextConheca}>
                    <View style={styles.box2TextConheca}>
                        <Text style={styles.textConheca}>
                        O Laboratório de Pesquisa em Computação I (LabComp I), também conhecido como #Lab312, é um laboratório de pesquisa e 
                        desenvolvimento da região norte, que atua nas áreas de Engenharia de Software e Sistemas Computacionais; Interação 
                        Humano-Computador; Sistemas Embarcados e Internet das Coisas; Desenvolvimento e Arquitetura Dirigido por Modelos; 
                        Inteligência Artificial; Informática na Educação; Sistemas de Informação; Otimização, Algoritmos e Complexidade 
                        Computacional. Para mais informações acesse o site clicando no botão abaixo: 
                        </Text>
                    </View>
                </View>


                <View style={styles.boxSite}>
                <TouchableOpacity style={styles.buttonSite} onPress={ ()=> Linking.openURL('http://www.icet.ufam.edu.br/grupopesq/gptec/lab312') }>
                    <Text style={styles.textSite}>LAB 312</Text>
                </TouchableOpacity>
                </View>

                </ScrollView>
                
        </SafeAreaView>
        </>
    )
}