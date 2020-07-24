import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { 
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header:{
        height: hp('11%'),
        backgroundColor: '#7EC24D'
     },
    imagemHeader:{
        width: wp('55%'), 
        height: hp('5%'), 
        marginTop: hp('4%'),
       
     },
     box1: {
         display: 'flex', 
         flexDirection: 'row', 
         justifyContent: 'center', 
         alignItems: 'center'
    },
    boxImageLeft: {
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom: hp('2%'), 
        margin: 10,
        
        marginTop: hp('3%')
    },
    imageLeft: {
        width: wp('20%'), 
        height: hp('13%')
    },
    boxImageCenter: {
        alignContent: 'center',
        alignItems: 'center', 
        marginBottom: hp('2%'), 
        marginTop: hp('3%'), 
        margin: 18,
    },
    imageCenter: {
        width: wp('40%'), 
        height: hp('13%')
    },
    boxImageRight: {
        alignContent: 'center',
        alignItems: 'center', 
        marginBottom: hp('2%'), 
        marginTop: hp('3%')
    },
    imageRight: {
        width: wp('20%'), 
        height: hp('13%')
    },
    hr:{                            
        borderBottomColor: '#B3B3B3',
        borderBottomWidth: 3,
        width: wp('95%'),
    },
    boxImageSobre: {
        alignContent: 'center',
        alignItems: 'center', 
        marginTop: hp('3%')
    },
    imageSobre: {
        width: wp('18%'), 
        height: hp('2.5%')
    },
    box1TextSobre: {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    box2TextSobre: {
        textAlign: 'center', 
        marginTop: hp('1%'), 
        width: wp('90%')
    },
    textSobre: {
        textAlign: 'justify', 
        fontSize: hp('2.1%'), 
        color: '#000'
    }, 
    boxImageEquipe: {
        alignContent: 'center',
        alignItems: 'center', 
        marginTop: hp('3%')
    },
    imageEquipe: {
        width: wp('20%'), 
        height: hp('3%')
    },
    box1TextEquipe: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    box2TextEquipe: {
        textAlign: 'center', 
        marginTop: hp('1%'),
        width: wp('90%')
    },
    textEquipe: {
        fontSize: hp('2.1%'), 
        textAlign: 'justify', 
        color: '#000'
    },
    actionEmail: {
        textAlign: 'center', 
        fontSize: wp('4%'), 
        color: '#FFF'
    },
    buttonEmail: {
        backgroundColor: '#7EC24D',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 10,
        borderColor: '#B3B3B3',  
    },
    textEmail: {
        fontSize: hp('2.2%'), 
        textAlign: 'center', 
        marginBottom: hp('2%')
    },
    boxImageConheca: {
        alignContent: 'center',
        alignItems: 'center', 
        marginTop: hp('3%')
    },
    imageConheca: {
        width: wp('40%'), 
        height: hp('2.8%')
    },
    boxImage312: {
        alignContent: 'center',
        alignItems: 'center', 
        marginBottom: hp('1%'), 
        marginTop: hp('3%')
    },
    image312: {
        width: wp('50%'), 
        height: hp('9%')
    },
    box1TextConheca: {
        alignItems: 'center', 
        justifyContent: 'center'
    },
    box2TextConheca: {
        textAlign: 'center', 
        marginTop: hp('1%'), 
        width: wp('90%')
    },
    textConheca: {
        textAlign: 'justify', 
        fontSize: hp('2.1%'), 
        color: '#000'
    },
    boxButtonsEmails: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    boxSite: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSite: {
        color: '#FFF', 
        fontSize: hp('2.3%'), 
        textAlign: 'center',
        
    },
    buttonSite: {
        backgroundColor: '#7EC24D',
        borderRadius: 8,
        height: 50,
        width: wp('90%'),
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 10,
        borderColor: '#B3B3B3',
        marginBottom: hp('3%'),
        marginTop: hp('2%')
    },
    boxHr: {
        alignContent: 'center',
        alignItems: 'center', 
        marginTop: hp('2%')
    },
})