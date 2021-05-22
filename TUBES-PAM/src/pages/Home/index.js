import React from 'react'
import { StyleSheet, Text,Image , View, ImageBackground, Dimensions, ScrollView } from 'react-native'
import { BackgroundSatu, Logo } from '../../assets';
import {PesananAktif, Saldo} from "../../components/";
import ButtonIcon from '../../components/ButtonIcon';


const Home = ({navigation}) => {
	const handleGoTo=screen=>{
		navigation.navigate(screen);
	};
	return (
		<View style={styles.page}>
			<ScrollView showsVerticalScrollIndicator={false}>
			<ImageBackground source={BackgroundSatu} style={styles.header}>
			</ImageBackground>
			<Saldo />
			<View style={styles.layanan}>
				<Text style={styles.label}>Layanan Kami</Text>
				<View style={styles.iconLayanan}>
				<ButtonIcon title="Kiloan" type="layanan"onPress={()=> handleGoTo('Pesanan')}/>
				
				<ButtonIcon title="Satuan" type="layanan"onPress={()=> handleGoTo('Pesanan')}/>
				<ButtonIcon title="vip" type="layanan"onPress={()=> handleGoTo('Pesanan')}/>
				<ButtonIcon title="Karpet" type="layanan"onPress={()=> handleGoTo('Pesanan')}/>
				<ButtonIcon title="Setrika" type="layanan"onPress={()=> handleGoTo('Pesanan')}/>				
				<ButtonIcon title="Ekspress" type="layanan"/>

				</View>
			</View>
				<View style={styles.pesananAktif}>
				<Text style={styles.label}>Pesanan Aktif</Text>
				<PesananAktif title="Pesanan No. 0002142" status ="Sudah Selesai"/>
				<PesananAktif title="Pesanan No. 0002142" status ="Dalam Proses Pengerjaan"/>
			</View>
			</ScrollView>
		
		</View>
	)
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: 'white'
	},

	header: {
		width: windowWidth,
		height: windowHeight * 0.25	,
		paddingHorizontal: 25,
		paddingTop: 25,  
	},
	logo: {
		width: windowWidth*0.25,
		height: windowHeight * 0.06	
	},
	hello: {
			marginTop: windowHeight*0.06,
	},
	selamat: {
		fontSize: 24,
		fontFamily: 'TitilliumWeb-Reguler'
	},
	username: {
		fontSize:18,
		fontFamily: 'TitilliumWeb-Bold'
	},
	layanan: {
		paddingHorizontal: 30,
		paddingTop: 30,
	},
	label: {
		fontSize: 18,
		fontFamily: 'TitilliumWeb-Bold'
	},
	iconLayanan:{
		flexDirection : 'row',
		justifyContent: 'space-between',
		marginTop: 10,
		flexWrap: 'wrap'
	},
	pesananAktif:{
		paddingHorizontal: 30,
		backgroundColor: '#F6F6F6',
		flex: 1,
		borderTopRightRadius: 20,
		borderTopLeftRadius:20,
	}
});