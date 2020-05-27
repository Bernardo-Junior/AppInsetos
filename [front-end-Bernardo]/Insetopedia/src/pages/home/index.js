import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,ImageBackground, Icon, Alert, TouchableOpacity, Modal, StatusBar } from 'react-native';
import { 
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import { Ionicons } from '@expo/vector-icons';
import ZoomImage from 'react-native-zoom-image';

import styles from './styles';
import fundo from '../../icones/4-backgrounds/background.png';
import logo from '../../icones/3-logo/logo-center.png';
import icon1 from '../../icones/icone1MP.png';
import icon2 from '../../icones/icone2MP.png';
import icon3 from '../../icones/icone3MP.png';
import icon4 from '../../icones/icone4MP.png';
import arrow1 from '../../icones/2-icones/arrow-right1.png';
import arrow2 from '../../icones/2-icones/arrow-right2.png';
import arrow3 from '../../icones/2-icones/arrow-right3.png';
import arrow4 from '../../icones/2-icones/arrow-right4.png';

import backgroundModal from '../../icones/4-backgrounds/background-shadow.png';

import buttonLeft from '../../icones/2-icones/arrow-left1.png';

import modelFundo from '../../icones/6-menu1/6-background.png';
import imgCabeca from '../../icones/6-menu1/8-cabeca.png';
import imgTorax from '../../icones/6-menu1/9-torax.png';
import imgAbdome from '../../icones/6-menu1/10-abdome.png';



import imgWaterP from '../../icones/7-menu2/3-menu-agua.png';
import imgSoloP from '../../icones/7-menu2/4-menu-solo.png';
import imgPlantasP from '../../icones/7-menu2/5-menu-plantas.png';
import imgAnimaisP from '../../icones/7-menu2/6-menu-animais.png';

import imgWaterS from '../../icones/7-menu2/7-background-agua.png';
import imgSoloS from '../../icones/7-menu2/8-background-solo.png';
import imgPlantasS from '../../icones/7-menu2/9-background-plantas.png';
import imgAnimaisS from '../../icones/7-menu2/10-background-animais.png';

import { ScrollView } from 'react-native-gesture-handler';


export default function App() {
  const [modalVisibleInicial, setModalVisibleInicial] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carousel, setCarousel] = useState();
  const [modalMaisInfo, setModalMaisInfo] = useState(false);
  const [modalMaisInfoOndeVivem, setModalMaisInfoOndeVivem] = useState(false);
  const [valor, setValor] = useState(3) ;
  const [modalOndeVivem, setModalOndeVivem] = useState(false);
  const [valorIdOndeVivem, setValorIdOndeVivem] = useState(0);
  const [dadosOV, setDadosOV] = useState(
    [
      {
        id: 0,
        img: imgWaterS,
        nome: 'água'
      },
      {
        id: 1,
        img: imgSoloS,
        nome: 'solo'
      },
      {
        id: 2,
        img: imgPlantasS,
        nome: 'plantas'
      },
      {
        id: 3,
        img: imgAnimaisS,
        nome: 'animais'
      }
    ]
  ) 
  const [dados, setdados] = useState(
    [
      {
        id: 0,
        cards: modelFundo,
        titulo: "Insetos",
        texto1: "São organismos do reino Animal que pertencem ao filo Arthropoda(Artrópoda).",
        button: "",
        imagem: ''
      },
      {
        id: 1,
        cards: modelFundo,
        titulo: "Corpo",
        texto1: "Apresentam o corpo com esqueleto externo (exoesqueleto), rígido e impermeável, e é dividido em cabeça, toráx e abdome.",
        imagem: ''
      },
      {
        id: 2,
        cards: modelFundo,
        titulo: "Cabeça",
        texto1: "Na cabeça, externamente podem ser encontrados os apêndices fixos e os moveis. Os apêndices fixos são, geralmente, o par de olhos compostos e, em muitos casos, dois ou três ocelos.",
        button: "Ver mais...",
        imagem: imgCabeca
      },
      {
        id: 3,
        cards: modelFundo,
        titulo: "Tórax",
        texto1: "O tórax dos insetos apresenta os apêndices ambulatórios e está dividido em três parte, o protórax, o mesotórax e o metatórax. ",
        button: "Ver mais...",
        imagem: imgTorax
      },
      {
        id: 4,
        cards: modelFundo,
        titulo: "Abdome",
        texto1: "O terceiro seguimento do corpo do inseto é constituído por vários “anéis” denominados de urômeros.",
        button: "Ver mais...",
        imagem: imgAbdome
      },
      {
        id: 5,
        cards: modelFundo,
        titulo: "Além disso...",
        texto1: "Em alguns insetos, no tórax também pode ocorrer um ou dois pares de asas funcionais. Desta forma, qualquer organismo que apresente esse conjunto de características pertence a classe Insecta (Insetos).",
        button: "",
        imagem: ''
      }
    ]);
    function textos() {
      return (
        valor === 2 ? 
          <Text>Na cabeça, externamente podem ser encontrados os apêndices fixos e os moveis. <Text style={styles.textBold}> Os apêndices fixos </Text> são, geralmente, o par de <Text style={styles.textBold}> olhos compostos </Text> e, em muitos casos, dois ou três ocelos. Alguns poucos insetos não apresentam olhos compostos (ex.: alguns piolhos) ou os tem reduzido (ex.: algumas <Text style={styles.textBold}>castas</Text> de cupim e formiga) e outros podem apresentar até dois pares (ex.: macho de <Text style={styles.textBold}>efemerídeos</Text>). Por sua vez, os ocelos podem estar ausente em diversos insetos.
          <Text>{`\n\tOs apêndices os moveis da cabeça são representados pelas antenas e peças do aparelho bucal. Todos os insetos apresentam um par de antena, sendo por isso chamados de`} <Text style={styles.textBold}>díceros</Text>{`. As antenas são classificadas em diversos tipos, como`} <Text style={styles.textBold}>filiforme, setácea, clavada</Text> {`, entre vários outros, e são utilizadas, juntamente com outros caracteres, na identificação dos insetos. As peças do aparelho bucal, geralmente, são bem desenvolvidas, mas podem estar atrofiadas em alguns casos (ex.: adultos de efemerídeos). O arranjo e forma dessas peças são utilizados para classificar os tipos de aparelho bucal (`}<Text style={styles.textBold}>mastigador, sugador labial, sugador maxilar</Text> {`ou`} <Text style={styles.textBold}>lambedor</Text> {`), os quais também são utilizados na identificação dos insetos. `}</Text> </Text>  
        : valor === 3 ? 
          <Text>O tórax dos insetos apresenta os apêndices ambulatórios e está dividido em três parte, o <Text style={styles.textBold}>protórax</Text>, o <Text style={styles.textBold}>mesotórax</Text> e o <Text style={styles.textBold}>metatórax</Text>. Em cada uma destas divisões os insetos apresentam um par de pernas, totalizando três pares, os quais ajudam a diferi-los de outros artrópodes, classificando-os na <Text style={styles.textBold}>superclasse Hexapoda</Text>. Cada perna é composta por seguimentos (coxa, trocânter, fêmur, tíbia, tarso e pós-tarso) articulados entre se. O formato desses seguimentos classifica as pernas dos insetos em diversos tipos, como <Text style={styles.textBold}>ambulatória</Text>, <Text style={styles.textBold}>saltatória</Text>, <Text style={styles.textBold}>natatória</Text> outros, dando a cada tipo de perna uma funcionalidade diferente., entre outros, dando a cada tipo de perna uma funcionalidade diferente. 
          <Text>{`\n\tOutro apêndice ambulatório que pode estar presente são as asas. Ao contrário das pernas, nem todo inseto apresenta asas, quando tem, obrigatoriamente é na fase adulta. Quando presente, os pares de asas estão localizados no mesotórax e metatórax, podendo ser os dois pares funcionais, a exemplo das borboletas, ou ter um dos dois pares atrofiados, como ocorre com as moscas (par metatorácico atrofiado) ou com machos de`} <Text style={styles.textBold}>Strepsiptera</Text> {`(par mesotorácico atrofiado). O formato`}</Text></Text>  
        : valor === 4 ? 
          <Text>O terceiro seguimento do corpo do inseto é constituído por vários “anéis” denominados de <Text style={styles.textBold}urômeros></Text>. Normalmente os insetos apresentam de 9 a 10 urômeros, mas, em alguns casos, podem ter até 12. O abdome é um seguimento com simplificação de estruturas externas, porém altamente especializada, sendo móvel e flexível. Lateralmente, principalmente nos urômeros I a VIII, estão localizados os <Text style={styles.textBold}>espiráculos</Text>. A junção deste seguimento com o tórax classifica-o nos tipos <Text style={styles.textBold}>livre</Text>, <Text style={styles.textBold}>pedunculado</Text> ou <Text style={styles.textBold}>séssil</Text>. Algumas outras estruturas que podem estar presentes no abdome são: <Text style={styles.textBold}>estilos abdominais</Text>, <Text style={styles.textBold}>filamentos caudais</Text>, <Text style={styles.textBold}>filamento mediano</Text>, <Text style={styles.textBold}>cercos</Text>, <Text style={styles.textBold}>estilos terminais</Text>, <Text style={styles.textBold}>sifúnculos</Text>, <Text style={styles.textBold}>glândulas odoríferas</Text>, <Text style={styles.textBold}>tímpano</Text>, <Text style={styles.textBold}>órgão estridulatório</Text> e <Text style={styles.textBold}>ovipositor</Text>.</Text> 
        : <Text>Alert.alert("Erro", "Ocorreu um erro imprevisto.") </Text>
      )
    }

    function textosOndeVivem() {
      return (
        valorIdOndeVivem === 0 ? 
          <Text>{`\tEntre os insetos aquáticos há espécies que tanto os`} <Text style={styles.textBold}>jovens</Text>{` (ou`} <Text style={styles.textBold}>imaturos</Text>) {`quanto os`} <Text style={styles.textBold}>adultos</Text> {`vivem neste ambiente e outras que só a fase jovem é aquática, sendo terrestre na fase adulta, neste caso são chamados de`} <Text style={styles.textBold}>anfibióticos</Text>{`. Em`} <Text style={styles.textBold}>águas interiores ou continentais</Text> {`são conhecidas cerca de 30.000 espécies de insetos. Já para o ambiente aquático marinho, são conhecidas apenas algumas centenas de espécies.`}
          <Text>{`\n\n\tOs insetos aquáticos desempenham papéis ecológicos fundamentais tanto no ambiente onde vivem quanto no ambiente terrestre como`} <Text style={styles.textBold}>consumidores primários</Text>{`,`} <Text style={styles.textBold}>detritívoros</Text>{`,`} <Text style={styles.textBold}>predadores</Text>{`,`} <Text style={styles.textBold}>polinizadores</Text>{` ou alimento para vários outros animais. A ecologia de muitos grupos é bem estudada, devido a sua importância como`} <Text style={styles.textBold}>vetores de doenças</Text>{` ou pelo seu papel como`} <Text style={styles.textBold}>bioindicadores</Text>{`.`}</Text>
      <Text>{`\n\n\tUm exemplo de inseto aquático bem conhecido são os `}<Text style={styles.textBold}>pernilongos</Text> {`ou`} <Text style={styles.textBold}>carapanãs</Text>.{` Estes são insetos anfibióticos, cujas larvas vivem na água e os adultos são terrestres. Nesta fase, algumas espécies de `}<Text style={styles.textBold}>pernilongos</Text> {`são`} <Text style={styles.textBold}>hematófagas</Text> {`e podem ser vetores de doenças como`} <Text style={styles.textBold}>dengue</Text>{`,`} <Text style={styles.textBold}>zika</Text>{`,`} <Text style={styles.textBold}>chikungunya</Text>{`,`} <Text style={styles.textBold}>febre amarela</Text>{`,`} <Text style={styles.textBold}>malária</Text> ou <Text style={styles.textBold}>filariose</Text>{`.`}</Text></Text> 
        : valorIdOndeVivem === 1 ? 
         <Text>Texto Solo</Text> 
        : valorIdOndeVivem === 2 ? 
          <Text>Texto Plantas</Text>
        : <Text>Alert.alert("Erro", "Ocorreu um erro imprevisto") </Text>
      )
    }

  function _renderItem({item, index}) {
    return (
        <ImageBackground imageStyle = {{borderRadius :  wp('5%') }} source={item.cards} style={{justifyContent: 'flex-end', width: wp('85%'), height: hp('60%'), alignItems: 'center', marginTop: hp('5%'),}}>
            <View  style={{width: wp('85%'), borderBottomRightRadius: wp('5%'),  borderBottomLeftRadius: wp('5%'), backgroundColor:'rgba(50,0,0,0.5)',}}>
              <View style={{marginLeft: wp('5%'), marginBottom: hp('3%')}}>
                <View>
                  <Text style={{color: "yellow", fontWeight: 'bold', fontSize: hp('4.5%'), }}>{item.titulo}</Text>
                </View>
                <View style={{width: wp('30%'), height: hp('0.7%'),  backgroundColor: '#FFF',  marginBottom: hp('2%')}}></View>
                <View style={{width: wp('75%'), flexDirection: 'row'}}>
    <Text style={{color: "#FFFFFF", textAlign: 'justify', fontWeight: 'bold', fontSize: hp('2%')}}>{item.texto1}<Text  style={{color: 'yellow', fontWeight: 'bold'}} onPress={() => {setModalMaisInfo(true), setValor(item.id)}}> {item.button}</Text> </Text>
                  
                </View>
              </View>
            </View>
            
          
        </ImageBackground>
    )
  }

  function modalMaisInf() {
    return(
      <View style={styles.boxModalReconhecer}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalMaisInfo}
          onRequestClose={() => {
            setModalMaisInfo(false);
          }}>
            <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <View style={styles.headerModal}>
              <View style={styles.boxTextHeaderModal}>
                <TouchableOpacity style={styles.BoxbuttonBackModal}
                  onPress={() => {setModalMaisInfo(false), StatusBar.setBackgroundColor('#A7CE03');}}
                >
                  <Image source={buttonLeft} style={styles.buttonBackModal} resizeMode='stretch'/>
                </TouchableOpacity>
                <Text style={styles.textHeaderModal}> Voltar </Text>
              </View>
            </View>
              <ScrollView>
              <View style={{backgroundColor: '#7EC24D', borderBottomLeftRadius: wp('7%'), borderBottomRightRadius: wp('7%')}}>
                <Image source={dados[valor].imagem} style={{width: wp('100%'), height: hp('18%')}} resizeMode='stretch' />
              </View>

              <View style={{width: wp('100%'), alignItems: 'center', justifyContent: 'center'}}>
                <View style={{width: wp('95%')}}>
                <Text style={{textAlign: 'justify', fontSize: hp('2.6%'), paddingTop: hp('2%')}}>{textos()}</Text>
                </View>
              </View>
              <View
                style={{width: wp('100%'), height: hp('0.2%'), backgroundColor: "#B3B3B3"}}
                
              />
              
              <View style={{marginTop: hp('1%')}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: hp('3%'), color: 'green'}}>Exemplos de {dados[valor].titulo}</Text>
                </View>

                <View>
                 <View style={{alignContent: 'center', alignItems: 'center'}}>
                   <ScrollView horizontal style={{marginTop:hp('2%'), paddingBottom: 10}}>                                
                         
                          <ZoomImage
                          source={modelFundo}
                          imgStyle={styles.imageModalCarrousel}
                          style={styles.imageModalCarrousell}
                          duration={200}
                          enableScaling={false}
                          />
                          <ZoomImage
                          source={modelFundo}
                          imgStyle={styles.imageModalCarrousel}
                          style={styles.imageModalCarrousell}
                          duration={200}
                          enableScaling={false}
                          />
                          <ZoomImage
                          source={modelFundo}
                          imgStyle={styles.imageModalCarrousel}
                          style={styles.imageModalCarrousell}
                          duration={200}
                          enableScaling={false}
                          />
                          <ZoomImage
                          source={modelFundo}
                          imgStyle={styles.imageModalCarrousel}
                          style={styles.imageModalCarrousell}
                          duration={200}
                          enableScaling={false}
                          />
                          <ZoomImage
                          source={modelFundo}
                          imgStyle={styles.imageModalCarrousel}
                          style={styles.imageModalCarrousell}
                          duration={200}
                          enableScaling={false}
                          />
                  </ScrollView> 
                </View>
                </View>
              </View>
              </ScrollView>
            
            </View>       
        </Modal>
      </View>
    );
  };

  function modalMaisInfOndeVivem() {
    return(
      <View style={styles.boxModalReconhecer}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalMaisInfoOndeVivem}
          onRequestClose={() => {
            setModalMaisInfoOndeVivem(false);
          }}>
            <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <View style={styles.headerModal}>
              <View style={styles.boxTextHeaderModal}>
                <TouchableOpacity style={styles.BoxbuttonBackModal}
                  onPress={() => {setModalMaisInfoOndeVivem(false), StatusBar.setBackgroundColor('#A7CE03');}}
                >
                  <Image source={buttonLeft} style={styles.buttonBackModal} resizeMode='stretch'/>
                </TouchableOpacity>
                <Text style={styles.textHeaderModal}> Voltar </Text>
              </View>
            </View>
              <ScrollView>
              <View style={{backgroundColor: '#7EC24D', borderBottomLeftRadius: wp('7%'), borderBottomRightRadius: wp('7%')}}>
                <Image source={dadosOV[valorIdOndeVivem].img} style={{width: wp('100%'), height: hp('18%')}} resizeMode='stretch' />
              </View>

              <View style={{width: wp('100%'), alignItems: 'center', justifyContent: 'center'}}>
                <View style={{width: wp('95%')}}>
                <Text style={{textAlign: 'justify', fontSize: hp('2.6%'), paddingTop: hp('2%')}}>{textosOndeVivem()}</Text>
                </View>
              </View>
              <View
                style={{width: wp('100%'), height: hp('0.2%'), backgroundColor: "#B3B3B3"}}
                
              />
              
              <View style={{marginTop: hp('1%')}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: hp('3%'), color: 'green', textAlign: 'center'}}>Exemplos de insetos que vivem na {dadosOV[valorIdOndeVivem].nome}</Text>
                </View>

                <View>
                 <View style={{alignContent: 'center', alignItems: 'center'}}>
                   <ScrollView horizontal style={{marginTop:hp('2%'), paddingBottom: 10}}>                                
                         
                          <ZoomImage
                          source={modelFundo}
                          imgStyle={styles.imageModalCarrousel}
                          style={styles.imageModalCarrousell}
                          duration={200}
                          enableScaling={false}
                          />
                          <ZoomImage
                          source={modelFundo}
                          imgStyle={styles.imageModalCarrousel}
                          style={styles.imageModalCarrousell}
                          duration={200}
                          enableScaling={false}
                          />
                          <ZoomImage
                          source={modelFundo}
                          imgStyle={styles.imageModalCarrousel}
                          style={styles.imageModalCarrousell}
                          duration={200}
                          enableScaling={false}
                          />
                          <ZoomImage
                          source={modelFundo}
                          imgStyle={styles.imageModalCarrousel}
                          style={styles.imageModalCarrousell}
                          duration={200}
                          enableScaling={false}
                          />
                          <ZoomImage
                          source={modelFundo}
                          imgStyle={styles.imageModalCarrousel}
                          style={styles.imageModalCarrousell}
                          duration={200}
                          enableScaling={false}
                          />
                  </ScrollView> 
                </View>
                </View>
              </View>
              </ScrollView>
            
            </View>       
        </Modal>
      </View>
    );
  };


  function ondeVivem() {
    return (
      <Modal
      animationType="fade"
      transparent={true}
      visible={modalOndeVivem}
      onRequestClose={() => {
        setModalOndeVivem(false);
        StatusBar.setBackgroundColor('#A7CE03');
      }}>
         <View style={styles.headerModal}>
          <View style={styles.boxTextHeaderModal}>
                <TouchableOpacity style={styles.BoxbuttonBackModal}
                  onPress={() => {setModalOndeVivem(false), StatusBar.setBackgroundColor('#A7CE03');}}
                 >
                   <Image source={buttonLeft} style={styles.buttonBackModal} resizeMode='stretch'/>
                 </TouchableOpacity>
             <Text style={styles.textHeaderModal}> Voltar </Text>
          </View>
        </View>

        <ImageBackground source={fundo} style={{width: '100%', height: '100%'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: hp('2%'), height: hp('9%')}}>
          <View style={styles.headerCard}>
            <Image source={icon2} style={{width: wp('7%'), height: hp('5%')}} />
            <Text style={{marginLeft: wp('1%') ,fontSize: hp('2.2%'), fontWeight: 'bold', color: '#19D92B'}}>Onde Vivem os Insetos?</Text>
          </View>
        </View>
          <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: hp('10%')}}>
            <View style={styles.boxMenu}>
              <View style={styles.opcaoMenuVivem}>
                <View style={styles.boxInterno}>
                  <TouchableOpacity style={styles.boxInterno}
                    onPress={() => {setModalMaisInfoOndeVivem(true), setValorIdOndeVivem(0)}}
                  >
                  <View>
                    <Image source={imgWaterP} style={styles.imgWater} resizeMode="stretch" />
                  </View>
                  </TouchableOpacity>
                </View>

              </View>

              <View style={styles.opcaoMenuVivem}>
                <View style={styles.boxInterno}>
                  <TouchableOpacity style={styles.boxInterno}
                    onPress={() => {setModalMaisInfoOndeVivem(true), setValorIdOndeVivem(1)}}
                  >
                    <View>
                      <Image source={imgSoloP} style={styles.imgWater} resizeMode="stretch" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.opcaoMenuVivem}>
                <View style={styles.boxInterno}>
                  <TouchableOpacity style={styles.boxInterno}
                    onPress={() => {setModalMaisInfoOndeVivem(true), setValorIdOndeVivem(2)}}
                  >
                    <View>
                      <Image source={imgPlantasP} style={styles.imgWater} resizeMode="stretch" />
                    </View>
                  
                  </TouchableOpacity>
                </View>
              </View>


              <View style={styles.opcaoMenuVivem}>
                <View style={styles.boxInterno}>
                  <TouchableOpacity style={styles.boxInterno}
                    onPress={() => {setModalMaisInfoOndeVivem(true), setValorIdOndeVivem(3)}}
                  >

                    <View>
                      <Image source={imgAnimaisP} style={styles.imgWater} resizeMode="stretch" />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              

              

            </View>
          </View>
        </ImageBackground>
      </Modal>
    )
  }


  function modalReconhecer() {
    return(
      <View style={styles.boxModalReconhecer}>
        <Modal
                  animationType="fade"
                  visible={modalVisibleInicial}
                  transparent={true}
                  onRequestClose={() => {
                      setModalVisibleInicial(false);
                      StatusBar.setBackgroundColor('#A7CE03');
                  }}>
                     <View style={styles.headerModal}>
                      <View style={styles.boxTextHeaderModal}>
                        <TouchableOpacity style={styles.BoxbuttonBackModal}
                          onPress={() => {setModalVisibleInicial(false), StatusBar.setBackgroundColor('#A7CE03');}}
                        >
                           <Image source={buttonLeft} style={styles.buttonBackModal} resizeMode='stretch'/>
                        </TouchableOpacity>
                        <Text style={styles.textHeaderModal}> Voltar </Text>
                      </View>
                    </View>
                    
                    
                    <ImageBackground source={backgroundModal} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: hp('2%'), height: hp('9%')}}>
                        <View style={styles.headerCard}>
                          <Image source={icon1} style={{width: wp('7%'), height: hp('5%')}} />
                          <Text style={{marginLeft: wp('1%') ,fontSize: hp('2.2%'), fontWeight: 'bold', color: '#6456FF'}}>Como reconhecer um inseto?</Text>
                        </View>
                      </View>
                      <View style={{width: wp('100%'), height: hp('66%'), marginBottom: hp('17%') ,marginBottom: hp('15%')}}>
                      <Carousel
                        ref={c => setCarousel(c)}
                        data = {dados}
                        sliderWidth={wp('100%')}
                        itemWidth={wp('85%')}
                        renderItem={_renderItem}
                        initialScrollIndex={0}
                        
                      />
                      </View>
                      <View style={{justifyContent: 'center', alignItems: 'center', width: wp('100%'), position:'absolute', }}>
                        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', width: wp('100%'),marginBottom: hp('5%')}}>
                          <TouchableOpacity style={{marginLeft: wp('1%'), width: wp('10%')}} onPress={() => {carousel.snapToPrev();}}>
                          {/* <Image source={buttonLeft} style={{width: wp('6%'), height: hp('4.5%')}}/> */}
                            <Ionicons name="ios-arrow-back" size={50} color="#FFF" />
                          </TouchableOpacity> 
                          <TouchableOpacity  style={{marginRight: wp('1%') ,alignItems: 'flex-end', width: wp('10%')}} onPress={() => {carousel.snapToNext();}}>
                          {/* <Image source={buttonRight} style={{width: wp('6%'), height: hp('4.5%')}}/> */}
                            <Ionicons name="ios-arrow-forward" size={50} color="#FFF" />
                          </TouchableOpacity> 
                        </View>
                      </View>
                      
                      
                    </ImageBackground>

                   
                  </Modal>
      </View>
    );
  };
  
  return (
    
    <View style={styles.box}>
      <View style={{width: wp('0%'), height: hp('0%')}}>{modalReconhecer()}{modalMaisInf()}{ondeVivem()}{modalMaisInfOndeVivem()}</View>
         <ImageBackground source={fundo} style={{width: '100%', height: '100%'}}>
         
        <View style={styles.header}>
           <View style={styles.boxTextHeader}>
               <Text style={styles.textHeader}>Seja bem-vindo(a)</Text>
           </View>
        </View>
        

        <View style={styles.imageInsetopedia}>
          <Image  style={{width: wp('75%'), height: hp('12%'), marginTop: hp('2%')}}  source={logo} resizeMode="stretch" />
        </View >


        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: hp('10%')}}>
          <View style={styles.boxMenu}>
            <View style={styles.opcaoMenu}>
              <View style={styles.boxInterno}>
                <TouchableOpacity style={styles.boxInterno}
                  onPress={() => {setModalVisibleInicial(true), StatusBar.setBackgroundColor('#7EC24D')}}
                >

                  <View style={styles.boxIconOpcoes}>
                    <Image source={icon1} resizeMode="stretch" style={styles.iconOpcoes} />
                  </View>

                  <View style={styles.boxText}>
                    <Text style={styles.textOpcao1}>Como reconhecer um inseto? </Text>
                  </View>

                  <View style={styles.iconConf}>
                    <Image source={arrow1} resizeMode="stretch" style={styles.iconReconhecer} />
                  </View>

                </TouchableOpacity>
              </View>

            </View>

            <View style={styles.opcaoMenu}>
              <View style={styles.boxInterno}>
                <TouchableOpacity style={styles.boxInterno}
                  onPress={() => {StatusBar.setBackgroundColor('#7EC24D'), setModalOndeVivem(true)}}
                >

                <View style={styles.boxIconOpcoes}>
                  <Image source={icon2} resizeMode="stretch" style={styles.iconOpcoes} />
                </View>

                <View style={styles.boxText}>
                  <Text style={styles.textOpcao2}>Onde vivem os insetos? </Text>
                </View>

                <View style={styles.iconConf}>
                  <Image source={arrow2} resizeMode="stretch" style={styles.iconReconhecer} />
                </View>
                
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.opcaoMenu}>
              <View style={styles.boxInterno}>
                <TouchableOpacity style={styles.boxInterno}
                  onPress={() => {}}
                >

                <View style={styles.boxIconOpcoes}>
                  <Image source={icon3} resizeMode="stretch" style={styles.iconOpcoes} />
                </View>

                <View style={styles.boxText}>
                  <Text style={styles.textOpcao3}>Os insetos mais comuns? </Text>
                </View>

                <View style={styles.iconConf}>
                  <Image source={arrow3} resizeMode="stretch" style={styles.iconReconhecer} />
                </View>
                
                </TouchableOpacity>
              </View>
            </View>


            <View style={styles.opcaoMenu}>
              <View style={styles.boxInterno}>
                <TouchableOpacity style={styles.boxInterno}
                  onPress={() => {}}
                >

                <View style={styles.boxIconOpcoes}>
                  <Image source={icon4} resizeMode="stretch" style={styles.iconOpcoes} />
                </View>

                <View style={styles.boxText}>
                  <Text style={styles.textOpcao4}>Qual a importância dos insetos? </Text>
                </View>

                <View style={styles.iconConf}>
                  <Image source={arrow4} resizeMode="stretch" style={styles.iconReconhecer} />
                </View>
                
                </TouchableOpacity>
              </View>
            </View>
            

            

          </View>
        </View>
        </ImageBackground>
    </View>
  );
}

