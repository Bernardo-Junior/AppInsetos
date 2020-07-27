import React, {useState} from 'react';
import { StyleSheet, Text, View, Image,ImageBackground, Icon, Alert, BackAndroid, TouchableOpacity, Modal, StatusBar } from 'react-native';
import { 
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
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

import backgroundModal from '../../icones/4-backgrounds/background.png';

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

import barata from '../../icones/8-menu3/barata.png'
import abelha from '../../icones/8-menu3/abelha.png'
import besouro from '../../icones/8-menu3/besouro.png'
import bichoPau from '../../icones/8-menu3/bicho-pau.png'
import borboleta from '../../icones/8-menu3/borboleta.png'
import cupins from '../../icones/8-menu3/cupins.png'
import gafanhoto from '../../icones/8-menu3/gafanhoto.png'
import jacinta from '../../icones/8-menu3/jacinta.png'
import mosca from '../../icones/8-menu3/mosca.png'
import percevejo from '../../icones/8-menu3/percevejo.png'
import piolho from '../../icones/8-menu3/piolho.png'
import poeamesa from '../../icones/8-menu3/poe-a-mesa.png'
import pulga from '../../icones/8-menu3/pulga.png'

import ecologicaP from '../../icones/9-menu/ecologica.png';
import ecologicaS from '../../icones/9-menu/ecologica2.png';
import medicaP from '../../icones/9-menu/medica.png';
import medicaS from '../../icones/9-menu/medica2.png';
import veterinariaP from '../../icones/9-menu/veterinaria.png';
import veterinariaS from '../../icones/9-menu/veterinaria2.png';
import agricolaP from '../../icones/9-menu/agricola.png';
import agricolaS from '../../icones/9-menu/agricola2.png';
import forenseP from '../../icones/9-menu/forense.png';
import forenseS from '../../icones/9-menu/forense2.png';


import { ScrollView } from 'react-native-gesture-handler';


export default function App() {
  const [modalVisibleInicial, setModalVisibleInicial] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [carousel, setCarousel] = useState();
  const [modalMaisInfo, setModalMaisInfo] = useState(false);
  const [modalMaisInfoOndeVivem, setModalMaisInfoOndeVivem] = useState(false);
  const [modalMaisInfoComuns, setModalMaisInfoComuns] = useState(false);
  const [valor, setValor] = useState(3) ;
  const [modalOndeVivem, setModalOndeVivem] = useState(false);
  const [modalMaisComuns, setModalMaisComuns] = useState(false);
  const [modalImportancia, setModalImportancia] = useState(false);
  const [modalMaisInfoImportancia, setModalMaisInfoImportancia] = useState(false);
  const [valorIdOndeVivem, setValorIdOndeVivem] = useState(0);
  const [valorIdMaisComuns, setValorIdMaisComuns] = useState(0);
  const [valorIdImportancia, setValorIdImportancia] = useState(0);
  const [dadosII, setDadosII] = useState([
    {
      id: 0,
      img: ecologicaS,
      nome: 'Ecológica'
    },
    {
      id: 1,
      img: medicaS,
      nome: 'Médica'
    },
    {
      id: 2,
      img: veterinariaS,
      nome: 'Veterinária'
    },
    {
      id: 3,
      img: agricolaS,
      nome: 'Agrícola'
    },
    {
      id: 4,
      img: forenseS,
      nome: 'Forense'
    },
  ])
  const [dadosMC, setDadosMC] = useState(
    [
      {
        id: 0,
        img: abelha,
        nome: 'abelha'
      },
      {
        id: 1,
        img: barata,
        nome: 'barata'
      },
      {
        id: 2 ,
        img: besouro,
        nome: 'besouro'
      },
      {
        id: 3,
        img: bichoPau,
        nome: 'bichoPau'
      },
      {
        id: 4,
        img: borboleta,
        nome: 'borboleta'
      },
      {
        id: 5,
        img: cupins,
        nome: 'cupins'
      },
      {
        id: 6,
        img: gafanhoto,
        nome: 'gafanhoto'
      },
      {
        id: 7,
        img: jacinta,
        nome: 'jacinta'
      },
      {
        id: 8,
        img: mosca,
        nome: 'mosca'
      },
      {
        id: 9,
        img: percevejo,
        nome: 'percevejo'
      },
      {
        id: 10,
        img: piolho,
        nome: 'piolho'
      },
      {
        id: 11,
        img: poeamesa,
        nome: 'poeamesa'
      },
      {
        id: 12,
        img: pulga,
        nome: 'pulga'
      },

    ]
  )
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

    function textosReconhecer() {
      return (
        valor === 2 ? 
          <Text>{`\tNa cabeça, externamente podem ser encontrados os apêndices fixos e os moveis.`} <Text style={styles.textBold}> Os apêndices fixos </Text> {`são, geralmente, o par de`} <Text style={styles.textBold}> olhos compostos </Text> {`e, em muitos casos, dois ou três ocelos. Alguns poucos insetos não apresentam olhos compostos (ex.: alguns piolhos) ou os tem reduzido (ex.: algumas `}<Text style={styles.textBold}>castas</Text>{` de cupim e formiga) e outros podem apresentar até dois pares (ex.: macho de `}<Text style={styles.textBold}>efemerídeos</Text>){`. Por sua vez, os ocelos podem estar ausente em diversos insetos.`}
          <Text>{`\n\n\tOs apêndices os moveis da cabeça são representados pelas antenas e peças do aparelho bucal. Todos os insetos apresentam um par de antena, sendo por isso chamados de`} <Text style={styles.textBold}>díceros</Text>{`. As antenas são classificadas em diversos tipos, como`} <Text style={styles.textBold}>filiforme, setácea, clavada</Text> {`, entre vários outros, e são utilizadas, juntamente com outros caracteres, na identificação dos insetos. As peças do aparelho bucal, geralmente, são bem desenvolvidas, mas podem estar atrofiadas em alguns casos (ex.: adultos de efemerídeos). O arranjo e forma dessas peças são utilizados para classificar os tipos de aparelho bucal (`}<Text style={styles.textBold}>mastigador, sugador labial, sugador maxilar</Text> {`ou`} <Text style={styles.textBold}>lambedor</Text> {`), os quais também são utilizados na identificação dos insetos. `}</Text> </Text>  
        : valor === 3 ? 
          <Text>{`\tO tórax dos insetos apresenta os apêndices ambulatórios e está dividido em três parte, o `}<Text style={styles.textBold}>protórax</Text>{`, o`} <Text style={styles.textBold}>mesotórax</Text> {`e o`} <Text style={styles.textBold}>metatórax</Text>{`. Em cada uma destas divisões os insetos apresentam um par de pernas, totalizando três pares, os quais ajudam a diferi-los de outros artrópodes, classificando-os na `}<Text style={styles.textBold}>superclasse Hexapoda</Text>{`. Cada perna é composta por seguimentos (coxa, trocânter, fêmur, tíbia, tarso e pós-tarso) articulados entre se. O formato desses seguimentos classifica as pernas dos insetos em diversos tipos, como `}<Text style={styles.textBold}>ambulatória</Text>{`,`} <Text style={styles.textBold}>saltatória</Text>{`,`} <Text style={styles.textBold}>natatória</Text> {`outros, dando a cada tipo de perna uma funcionalidade diferente., entre outros, dando a cada tipo de perna uma funcionalidade diferente.`} 
          <Text>{`\n\n\tOutro apêndice ambulatório que pode estar presente são as asas. Ao contrário das pernas, nem todo inseto apresenta asas, quando tem, obrigatoriamente é na fase adulta. Quando presente, os pares de asas estão localizados no mesotórax e metatórax, podendo ser os dois pares funcionais, a exemplo das borboletas, ou ter um dos dois pares atrofiados, como ocorre com as moscas (par metatorácico atrofiado) ou com machos de`} <Text style={styles.textBold}>Strepsiptera</Text> {`(par mesotorácico atrofiado). O formato das asas também a classifica em tipos, como `}<Text style={styles.textBold}>membranosa</Text>{`,`} <Text style={styles.textBold}>tégmina</Text>{`,`} <Text style={styles.textBold}>élitro</Text>{`, entre outros. Tanto os tipos das pernas quanto a presença ou ausência das asas e seus tipos também auxiliam na identificação dos insetos`}</Text></Text>  
        : valor === 4 ? 
          <Text>{`\nO terceiro seguimento do corpo do inseto é constituído por vários “anéis” denominados de `}<Text style={styles.textBold}>urômeros</Text>{`. Normalmente os insetos apresentam de 9 a 10 urômeros, mas, em alguns casos, podem ter até 12. O abdome é um seguimento com simplificação de estruturas externas, porém altamente especializada, sendo móvel e flexível. Lateralmente, principalmente nos urômeros I a VIII, estão localizados os `}<Text style={styles.textBold}>espiráculos</Text>{`. A junção deste seguimento com o tórax classifica-o nos tipos `}<Text style={styles.textBold}>livre</Text>{`,`} <Text style={styles.textBold}>pedunculado</Text>{` ou`} <Text style={styles.textBold}>séssil</Text>{`. Algumas outras estruturas que podem estar presentes no abdome são: `}<Text style={styles.textBold}>estilos abdominais</Text>{`,`} <Text style={styles.textBold}>filamentos caudais</Text>{`,`} <Text style={styles.textBold}>filamento mediano</Text>{`,`} <Text style={styles.textBold}>cercos</Text>{`,`} <Text style={styles.textBold}>estilos terminais</Text>{`,`} <Text style={styles.textBold}>sifúnculos</Text>{`,`} <Text style={styles.textBold}>glândulas odoríferas</Text>{`,`} <Text style={styles.textBold}>tímpano</Text>{`,`} <Text style={styles.textBold}>órgão estridulatório</Text> {`e`} <Text style={styles.textBold}>ovipositor</Text>{`  .`}</Text> 
        : Alert.alert("Erro", "Ocorreu um erro imprevisto.") 
      )
    }

    function textosOndeVivem() {
      return (
        valorIdOndeVivem === 0 ? 
          <Text>{`\tEntre os insetos aquáticos há espécies que tanto os`} <Text style={styles.textBold}>jovens</Text>{` (ou`} <Text style={styles.textBold}>imaturos</Text>) {`quanto os`} <Text style={styles.textBold}>adultos</Text> {`vivem neste ambiente e outras que só a fase jovem é aquática, sendo terrestre na fase adulta, neste caso são chamados de`} <Text style={styles.textBold}>anfibióticos</Text>{`. Em`} <Text style={styles.textBold}>águas interiores ou continentais</Text> {`são conhecidas cerca de 30.000 espécies de insetos. Já para o ambiente aquático marinho, são conhecidas apenas algumas centenas de espécies.`}
          <Text>{`\n\n\tOs insetos aquáticos desempenham papéis ecológicos fundamentais tanto no ambiente onde vivem quanto no ambiente terrestre como`} <Text style={styles.textBold}>consumidores primários</Text>{`,`} <Text style={styles.textBold}>detritívoros</Text>{`,`} <Text style={styles.textBold}>predadores</Text>{`,`} <Text style={styles.textBold}>polinizadores</Text>{` ou alimento para vários outros animais. A ecologia de muitos grupos é bem estudada, devido a sua importância como`} <Text style={styles.textBold}>vetores de doenças</Text>{` ou pelo seu papel como`} <Text style={styles.textBold}>bioindicadores</Text>{`.`}</Text>
          <Text>{`\n\n\tUm exemplo de inseto aquático bem conhecido são os `}<Text style={styles.textBold}>pernilongos</Text> {`ou`} <Text style={styles.textBold}>carapanãs</Text>.{` Estes são insetos anfibióticos, cujas larvas vivem na água e os adultos são terrestres. Nesta fase, algumas espécies de `}<Text style={styles.textBold}>pernilongos</Text> {`são`} <Text style={styles.textBold}>hematófagas</Text> {`e podem ser vetores de doenças como`} <Text style={styles.textBold}>dengue</Text>{`,`} <Text style={styles.textBold}>zika</Text>{`,`} <Text style={styles.textBold}>chikungunya</Text>{`,`} <Text style={styles.textBold}>febre amarela</Text>{`,`} <Text style={styles.textBold}>malária</Text> ou <Text style={styles.textBold}>filariose</Text>{`.`}</Text></Text> 
        : valorIdOndeVivem === 1 ? 
         <Text>{`\tOs solos naturais ou com pouca perturbação por atividades humanas são naturalmente habitados por uma grande diversidade de insetos. Estima-se que 65 a 70% da fauna de`} <Text style={styles.textBold}>invertebrados</Text> {`nestes solos seja representada pelos insetos. Devido a esta alta diversidade em solos naturais ou com pouca intervenção `}<Text style={styles.textBold}>antrópica</Text>{`, alguns grupos de insetos de solo tem sido usados para avaliar a qualidade ambiental deste ecossistema, sendo um exemplo de organismos`}<Text style={styles.textBold}> bioindicadores</Text>{`.`}
         <Text>{`\n\n\tOs insetos edáficos(que vivem no solo) atuam em vários`} <Text style={styles.textBold}>níveis tróficos</Text>{` e são responsáveis por várias funções ecológicas importantes, como ciclagem de nutrientes, aeração e fertilização. Porém, em `} <Text style={styles.textBold}>agroecossistemas</Text>{`, algumas espécies podem ser consideradas como pragas, a exemplo de algumas`} <Text style={styles.textBold}>cigarras</Text>{`,`} <Text style={styles.textBold}>percevejo-castanho</Text> e <Text style={styles.textBold}>paquinhas</Text>{` que causam prejuízos em algumas plantas cultivadas.`}</Text>
         <Text>{`\n\n\tEntre as várias espécies de insetos que vivem nos solos estão as`} <Text style={styles.textBold}>formigas</Text>{`. Este grupo de insetos, provavelmente, é o mais significativo entre os insetos edáficos, devido a sua grande diversidade, estimada em cerca de 40.000 espécies, e a grande influência destes organismos na estrutura do solo. Neste caso, atuam no`} <Text style={styles.textBold}>processo de bioturbação</Text>{` do solo. Assim, ao arquitetarem seus ninhos, as formigas constroem uma série de galerias que aumentar a porosidade do solo, ajudando a arejara-lo, melhorando a infiltração e circulação da água e reduzindo os riscos potenciais de erosão. Além disso, as formigas também podem melhor a disponibilidade de recursos para microrganismos e plantas.`}</Text></Text> 
        : valorIdOndeVivem === 2 ? 
          <Text>{`\tOs insetos que habitam as plantas(Insetos plantícolas) representam uma das maiores diversidade deste grupo. Nelas podemos encontrar espécies benéficas e `}<Text style={styles.textBold}>fitófagas</Text>{`. Além destas também é possível encontrar outras espécies que habitam as plantas sem necessariamente trazer benefícios ou causar problemas para estas.`}
          <Text>{`\n\n\tOs`} <Text style={styles.textBold}>insetos benéficos</Text>{`, logo desejados, atuam em diferentes processos, como na`} <Text style={styles.textBold}>polinização</Text>{` e no`} <Text style={styles.textBold}>controle biológico</Text> {`de pragas que atacam as plantas. Em ambientes tropicais, insetos como `}<Text style={styles.textBold}>abelhas</Text>{`,`} <Text style={styles.textBold}>besouros</Text>{`,`} <Text style={styles.textBold}>vespas</Text>{`,`} <Text style={styles.textBold}>moscas</Text>{`,`} <Text style={styles.textBold}>borboletas</Text> {`e`} <Text style={styles.textBold}>mariposas</Text> {`são responsáveis por cerca de 79% das polinizações. Outros vários insetos como`} <Text style={styles.textBold}>joaninhas</Text>{`,`} <Text style={styles.textBold}>bichos-lixeiros</Text>{`,`} <Text style={styles.textBold}>microvespas</Text> {`e`} <Text style={styles.textBold}>moscas</Text> {`atuam diretamente no controle de insetos que atacam as plantas.`}</Text>
          <Text>{`\n\n\tOs `}<Text style={styles.textBold}>insetos pragas</Text>{`, que neste caso são indesejados, se alimentam de partes internas ou externas da planta, como folhas, flores, frutos, ramos, galhos e troncos, causando prejuízos econômicos nos `}<Text style={styles.textBold}>agroecossistemas</Text>{`, podendo levar a morte de plantas. Entre estes estão insetos que sugam seiva das plantas como`} <Text style={styles.textBold}>pulgões</Text>{`,`} <Text style={styles.textBold}>cochonilha</Text>{`,`} <Text style={styles.textBold}>cigarras</Text>{`,`} <Text style={styles.textBold}>cigarrinhas</Text> {`e`} <Text style={styles.textBold}>percevejos</Text>{`. Já outros consomem partes das plantas como`} <Text style={styles.textBold}>cupins</Text>{`,`} <Text style={styles.textBold}>lagartas</Text>{`,`} <Text style={styles.textBold}>besouros</Text>{`,`} <Text style={styles.textBold}>gafanhotos</Text> {`e`} <Text style={styles.textBold}>grilos</Text>{`.`}</Text></Text>
        : valorIdOndeVivem === 3 ? 
          <Text>{`\tVários animais tem insetos em sua fauna, por exemplo, nós humanos temos os`} <Text style={styles.textBold}>piolhos</Text>{`,`} <Text style={styles.textBold}>pulgas</Text> {`e`} <Text style={styles.textBold}>moscas parasitas</Text> {`(como `}<Text style={styles.textBold}>bernes</Text> {`e`} <Text style={styles.textBold}>varejeiras</Text>){`. Neste exemplo, todos são indesejados por causarem problemas ao `}<Text style={styles.textBold}>hospedeiro</Text>{`. Além de nós, vários outros animais também convivem com diversos `}<Text style={styles.textBold}>insetos parasitas</Text>{`. Há insetos que parasitam mamíferos, aves, répteis ou até mesmo outros insetos. Além da relação de parasitismo, também há a outras relações entre insetos e outros animais como a de `}<Text style={styles.textBold}>simbiose</Text>{` (a exemplo da traça da preguiça) ou a `}<Text style={styles.textBold}>comensal</Text>{` (como o “piolho da abelha”).`}</Text>
        : Alert.alert("Erro", "Ocorreu um erro imprevisto")
      )
    }

  function _renderItem({item, index}) {
    return (
        <ImageBackground imageStyle = {{borderRadius :  wp('5%') }} source={item.cards} style={{justifyContent: 'flex-end', width: wp('85%'), height: hp('55%'), alignItems: 'center', marginTop: hp('8%'),}}>
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

  function modalMaisInfReconhecer() {
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
            <View style={styles.headerModalReconhecer}>
              <View style={styles.boxTextHeaderModal}>
                <TouchableOpacity style={styles.BoxbuttonBackModal}
                  onPress={() => {setModalMaisInfo(false)}}
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
                <Text style={{textAlign: 'justify', fontSize: hp('2.3%'), paddingTop: hp('2%')}}>{textosReconhecer()}</Text>
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
            <View style={styles.headerModalOndeVivem}>
              <View style={styles.boxTextHeaderModal}>
                <TouchableOpacity style={styles.BoxbuttonBackModal}
                  onPress={() => {setModalMaisInfoOndeVivem(false)}}
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
                <Text style={{textAlign: 'justify', fontSize: hp('2.3%'), paddingTop: hp('2%')}}>{textosOndeVivem()}</Text>
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

  function modalMaisInfComuns() {
    return(
      <View style={styles.boxModalReconhecer}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalMaisInfoComuns}
          onRequestClose={() => {
            setModalMaisInfoComuns(false);
          }}>
            <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <View style={styles.headerModalMaisComuns}>
              <View style={styles.boxTextHeaderModal}>
                <TouchableOpacity style={styles.BoxbuttonBackModal}
                  onPress={() => {setModalMaisInfoComuns(false)}}
                >
                  <Image source={buttonLeft} style={styles.buttonBackModal} resizeMode='stretch'/>
                </TouchableOpacity>
                <Text style={styles.textHeaderModal}> Voltar </Text>
              </View>
            </View>
              <ScrollView>
              <View style={{backgroundColor: '#7EC24D', borderBottomLeftRadius: wp('7%'), borderBottomRightRadius: wp('7%')}}>
                <Image source={dadosMC[valorIdMaisComuns].img} style={{width: wp('100%'), height: hp('18%')}} resizeMode='stretch' />
              </View>

              <View style={{width: wp('100%'), alignItems: 'center', justifyContent: 'center'}}>
                <View style={{width: wp('95%')}}>
                <Text style={{textAlign: 'justify', fontSize: hp('2.3%'), paddingTop: hp('2%')}}>{textosOndeVivem()}</Text>
                </View>
              </View>
              <View
                style={{width: wp('100%'), height: hp('0.2%'), backgroundColor: "#B3B3B3"}}
                
              />
              
              <View style={{marginTop: hp('1%')}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: hp('3%'), color: 'green', textAlign: 'center'}}>Exemplos de insetos que vivem na {dadosMC[valorIdMaisComuns].nome}</Text>
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

  function modalMaisInfImportancia() {
    return(
      <View style={styles.boxModalReconhecer}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalMaisInfoImportancia}
          onRequestClose={() => {
            setModalMaisInfoImportancia(false);
          }}>
            <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <View style={styles.headerModalImportancia}>
              <View style={styles.boxTextHeaderModal}>
                <TouchableOpacity style={styles.BoxbuttonBackModal}
                  onPress={() => {setModalMaisInfoImportancia(false)}}
                >
                  <Image source={buttonLeft} style={styles.buttonBackModal} resizeMode='stretch'/>
                </TouchableOpacity>
                <Text style={styles.textHeaderModal}> Voltar </Text>
              </View>
            </View>
              <ScrollView>
              <View style={{backgroundColor: '#7EC24D', borderBottomLeftRadius: wp('7%'), borderBottomRightRadius: wp('7%')}}>
                <Image source={dadosII[valorIdImportancia].img} style={{width: wp('100%'), height: hp('18%')}} resizeMode='stretch' />
              </View>

              <View style={{width: wp('100%'), alignItems: 'center', justifyContent: 'center'}}>
                <View style={{width: wp('95%')}}>
                <Text style={{textAlign: 'justify', fontSize: hp('2.3%'), paddingTop: hp('2%')}}>{textosReconhecer()}</Text>
                </View>
              </View>
              <View
                style={{width: wp('100%'), height: hp('0.2%'), backgroundColor: "#B3B3B3"}}
                
              />
              
              <View style={{marginTop: hp('1%')}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={{fontSize: hp('3%'), color: 'green'}}>Exemplos de {dadosII[valorIdImportancia].nome}</Text>
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
        StatusBar.setBackgroundColor('#7EC24D'), StatusBar.setBarStyle('dark-content');
      }}>
         <View style={styles.headerModalOndeVivem}>
          <View style={styles.boxTextHeaderModal}>
                <TouchableOpacity style={styles.BoxbuttonBackModal}
                  onPress={() => {setModalOndeVivem(false), StatusBar.setBackgroundColor('#7EC24D'), StatusBar.setBarStyle('dark-content');}}
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

  function maisComuns() {
    return (
      <Modal
      animationType="fade"
      transparent={true}
      visible={modalMaisComuns}
      onRequestClose={() => {
        setModalMaisComuns(false);
        StatusBar.setBackgroundColor('#7EC24D'), StatusBar.setBarStyle('dark-content');
      }}>
         <View style={styles.headerModalMaisComuns}>
          <View style={styles.boxTextHeaderModal}>
                <TouchableOpacity style={styles.BoxbuttonBackModal}
                  onPress={() => {setModalMaisComuns(false), StatusBar.setBackgroundColor('#7EC24D'), StatusBar.setBarStyle('dark-content');}}
                 >
                   <Image source={buttonLeft} style={styles.buttonBackModal} resizeMode='stretch'/>
                 </TouchableOpacity>
             <Text style={styles.textHeaderModal}> Voltar </Text>
          </View>
        </View>

        <ImageBackground source={fundo} style={{width: '100%', height: '100%'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: hp('2%'), height: hp('9%')}}>
          <View style={styles.headerCard}>
            <Image source={icon3} style={{width: wp('7%'), height: hp('5%')}} />
            <Text style={{marginLeft: wp('1%') ,fontSize: hp('2.2%'), fontWeight: 'bold', color: '#cc0066'}}>Os insetos mais comuns?</Text>
          </View>
        </View>
          <ScrollView>
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: hp('10%')}}>
              <View style={styles.boxMenu}>
                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(0)}}
                    >
                    <View>
                      <Image source={abelha} style={styles.imgWater} resizeMode="stretch" />
                    </View>
                    </TouchableOpacity>
                  </View>

                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(1)}}
                    >
                      <View>
                        <Image source={barata} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(2)}}
                    >
                      <View>
                        <Image source={besouro} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    
                    </TouchableOpacity>
                  </View>
                </View>


                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(3)}}
                    >

                      <View>
                        <Image source={bichoPau} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(4)}}
                    >

                      <View>
                        <Image source={borboleta} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(5)}}
                    >

                      <View>
                        <Image source={cupins} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(6)}}
                    >

                      <View>
                        <Image source={gafanhoto} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(7)}}
                    >

                      <View>
                        <Image source={jacinta} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(8)}}
                    >

                      <View>
                        <Image source={mosca} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(9)}}
                    >

                      <View>
                        <Image source={percevejo} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(10)}}
                    >

                      <View>
                        <Image source={piolho} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(11)}}
                    >

                      <View>
                        <Image source={poeamesa} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoComuns(true), setValorIdMaisComuns(12)}}
                    >

                      <View>
                        <Image source={pulga} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </Modal>
    )
  }

  function importancia() {
    return (
      <Modal
      animationType="fade"
      transparent={true}
      visible={modalImportancia}
      onRequestClose={() => {
        setModalImportancia(false);
        StatusBar.setBackgroundColor('#7EC24D'), StatusBar.setBarStyle('dark-content');
      }}>
         <View style={styles.headerModalImportancia}>
          <View style={styles.boxTextHeaderModal}>
                <TouchableOpacity style={styles.BoxbuttonBackModal}
                  onPress={() => {setModalImportancia(false), StatusBar.setBackgroundColor('#7EC24D'), StatusBar.setBarStyle('dark-content');}}
                 >
                   <Image source={buttonLeft} style={styles.buttonBackModal} resizeMode='stretch'/>
                 </TouchableOpacity>
             <Text style={styles.textHeaderModal}> Voltar </Text>
          </View>
        </View>

        <ImageBackground source={fundo} style={{width: '100%', height: '100%'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: hp('2%'), height: hp('9%')}}>
          <View style={styles.headerCard}>
            <Image source={icon3} style={{width: wp('7%'), height: hp('5%')}} />
            <Text style={{marginLeft: wp('1%') ,fontSize: hp('2.2%'), fontWeight: 'bold', color: 'orange'}}>Qual a importância dos Insetos?</Text>
          </View>
        </View>
          <ScrollView>
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: hp('10%')}}>
              <View style={styles.boxMenu}>
                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoImportancia(true), setValorIdImportancia(0)}}
                    >
                    <View>
                      <Image source={ecologicaP} style={styles.imgWater} resizeMode="stretch" />
                    </View>
                    </TouchableOpacity>
                  </View>

                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoImportancia(true), setValorIdImportancia(1)}}
                    >
                      <View>
                        <Image source={medicaP} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoImportancia(true), setValorIdImportancia(2)}}
                    >
                      <View>
                        <Image source={veterinariaP} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    
                    </TouchableOpacity>
                  </View>
                </View>


                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoImportancia(true), setValorIdImportancia(3)}}
                    >

                      <View>
                        <Image source={agricolaP} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.opcaoMenuVivem}>
                  <View style={styles.boxInterno}>
                    <TouchableOpacity style={styles.boxInterno}
                      onPress={() => {setModalMaisInfoImportancia(true), setValorIdImportancia(4)}}
                    >

                      <View>
                        <Image source={forenseP} style={styles.imgWater} resizeMode="stretch" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </Modal>
    )
  }


  function reconhecer() {
    return(
      <View style={styles.boxModalReconhecer}>
        <Modal
                  animationType="fade"
                  visible={modalVisibleInicial}
                  transparent={true}
                  onRequestClose={() => {
                      setModalVisibleInicial(false);
                      StatusBar.setBackgroundColor('#7EC24D'), StatusBar.setBarStyle('dark-content');
                  }}>
                     <View style={styles.headerModalReconhecer}>
                      <View style={styles.boxTextHeaderModal}>
                        <TouchableOpacity style={styles.BoxbuttonBackModal}
                          onPress={() => {setModalVisibleInicial(false), StatusBar.setBarStyle('dark-content'), StatusBar.setBackgroundColor('#7EC24D');}}
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
                        <View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', width: wp('100%'),marginBottom: hp('4%')}}>
                          <TouchableOpacity style={{marginLeft: wp('1%'), width: wp('10%')}} onPress={() => {carousel.snapToPrev();}}>
                          {/* <Image source={buttonLeft} style={{width: wp('6%'), height: hp('4.5%')}}/> */}
                            <FontAwesome5 name="angle-left" size={50} color="#FFF" />
                          </TouchableOpacity> 
                          <TouchableOpacity  style={{marginRight: wp('1%') ,alignItems: 'flex-end', width: wp('10%')}} onPress={() => {carousel.snapToNext();}}>
                          {/* <Image source={buttonRight} style={{width: wp('6%'), height: hp('4.5%')}}/> */}
                            <FontAwesome5 name="angle-right" size={50} color="#FFF" />
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
      <View style={{width: wp('0%'), height: hp('0%')}}>{reconhecer()}{modalMaisInfReconhecer()}{ondeVivem()}{modalMaisInfOndeVivem()}{maisComuns()}{modalMaisInfComuns()}{importancia()}{modalMaisInfImportancia()}</View>
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
                  onPress={() => {setModalVisibleInicial(true), StatusBar.setBarStyle('dark-light'),StatusBar.setBackgroundColor('#6456FF')}}
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
                  onPress={() => {StatusBar.setBackgroundColor('#7EC24D'), StatusBar.setBarStyle('dark-light'), setModalOndeVivem(true)}}
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
                  onPress={() => {StatusBar.setBackgroundColor('#cc0066'), StatusBar.setBarStyle('dark-light'), setModalMaisComuns(true)}}
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
                  onPress={() => {StatusBar.setBackgroundColor('orange'), StatusBar.setBarStyle('dark-content'), setModalImportancia(true)}}
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

