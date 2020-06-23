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
    headerModalImportancia: {
        paddingTop: Constants.statusBarHeight,
        height: hp('11%'),
        backgroundColor: '#7EC24D',
        justifyContent: 'center',
    },
    boxTextHeaderModal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    BoxbuttonBackModal:{ 
        width: wp('10%'), 
        height: hp('3%'),

    },
    buttonBackModal: {
        width: wp('4%'), 
        height: hp('3%'), 
        marginLeft: wp('5%')
    },
    textHeaderModal: {
        color: '#FFF',
        fontSize: hp('3%'),
    },
    imgLogo: {
        width: wp('50%'),
        height: hp('8%')
    },
    logo: {
        paddingTop: hp('3%'), 
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxImg1: {
        paddingTop: hp('3%'), 
        alignItems: 'center',
        justifyContent: 'center'
    },
    img1: {
        width: wp('20%'),
        height: hp('3%')
    },
    img2: {
        width: wp('24%'),
        height: hp('4%')
    },
    img3: {
        width: wp('30%'),
        height: hp('2.8%')
    }
});