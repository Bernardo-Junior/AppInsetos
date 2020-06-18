import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { 
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';

let CIRCLE_RADIUS = 30;
export default StyleSheet.create({
    box: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        height: hp('11%'),
        backgroundColor: '#7EC24D'
    },
    headerVivem: {
        height: hp('11%'),
        backgroundColor: '#A7CE03'
    },
    headerModalReconhecer: {
        height: hp('8%'),
        backgroundColor: '#6456FF',
        justifyContent: 'center',
    },
    headerModalOndeVivem: {
        height: hp('8%'),
        backgroundColor: '#7EC24D',
        justifyContent: 'center',
    },
    headerModalMaisComuns: {
        height: hp('8%'),
        backgroundColor: '#cc0066',
        justifyContent: 'center',
    },
    headerModalImportancia: {
        height: hp('8%'),
        backgroundColor: 'orange',
        justifyContent: 'center',
    },
    boxTextHeaderModal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    boxTextHeader: {
        paddingTop: Constants.statusBarHeight + 20,
        justifyContent: 'center'
    },
    textHeader: {
        paddingHorizontal: 24,
        fontSize: hp('2.5%'),
        color: '#FFF'
    },
    textHeaderModal: {
        paddingHorizontal: 5,
        fontSize: hp('2.5%'),
        color: '#FFF',
        fontWeight: 'bold'
    },
    imageInsetopedia: {
        justifyContent: 'center',
        alignItems: 'center',
       
        
    },
    buttonBackModal: {
        width: wp('4%'), 
        height: hp('3%'), 
        marginLeft: wp('5%')
    },
    BoxbuttonLeftHeader: {
        position: 'absolute'
    },
    BoxbuttonBackModal:{ 
        width: wp('10%'), 
        height: hp('3%'),

    },
    buttonLeft:{ 
      position: 'absolute',
      width: wp('12%'),
      height: hp('8%') 
    },
    BoxbuttonLeft: {
        marginTop: hp('')
    },
    opcaoMenu: {
        marginTop: hp('2.5%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    opcaoMenuVivem: {
        padding: hp('2.5%'),
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxInterno: {
        width: wp('80%'), 
        height: hp('13%') ,
        flexDirection: 'row', 
        alignItems: 'center', 
        borderRadius: wp('6%'),
        backgroundColor: '#FFF'
       
    },
    boxIconOpcoes: {
        width: wp('15%'),
        height: hp('10%'),
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: wp('2%'),
    },
    iconOpcoes: {
        width: wp('15%'),
        height: hp('7%'),
    },
    boxText: {
        width: wp('50%'),
        marginLeft: wp('2%')
    },
    textOpcao1: {
        color: '#6456FF',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',

    },
    iconConf: {
        width: wp('8%'),
        justifyContent: 'center', 
        alignItems: 'center',
    },
    textOpcao2: {
        color: '#19D92B',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        
    },
    textOpcao3: {
        color: '#cc0066',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        
    },
    iconReconhecer: {
        width: wp('6%'),
        height: hp('4%'),
    },
    textOpcao4: {
        color: '#FEA500',
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
       
    },
    boxModalReconhecer: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    headerCard: {
        width: wp('90%'),
        height: hp('8%'),
        backgroundColor: '#FFF',
        borderRadius: wp('2%'),
        marginTop: hp('4%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "skyblue",
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        borderRadius: CIRCLE_RADIUS
    },
    imageModalCarrousel: {
        width: wp('30%'), 
        height: hp('19%'), 
        borderRadius: wp('2%'),
        marginLeft: wp('3%'),
    },
    imageModalCarrousell: {
        width: wp('33%'), 
        height: hp('20%'), 
        borderRadius: wp('2%'),   
    },
    imgWater: {
        width: wp('80%'),
        height: hp('13%')
    },
    textBold: {
        fontWeight: 'bold'
    }
    
});