import React, {useState}   from 'react'

import { StyleSheet, Text, View,TextInput,ImageBackground,ScrollView,Dimensions,Item,SafeAreaView,TouchableOpacity,Modal } from 'react-native'
import { BackgroundSatu, Logo } from '../../assets';
import { Pick3 } from '../../components/Pick3';

const Pesanan = (onPress,onLongPress) => {
	
		const Pilih3 = ()=>{
			const [chooseData, setchooseData] = useState('Pilih Metode Pembayaran');
		
			const [isModalVisible, setisModalVisible] = useState(false);
		
				const changeModalVisibility = (bool) =>{
					setisModalVisible(bool)
				}
		
				const setData=(option)=>{
					setchooseData(option)
				}
		
				return(
				<SafeAreaView style={styles.container}>
					<TouchableOpacity onPress={()=>changeModalVisibility(true)} 
					style={styles.touch}>
						<Text style={styles.text}>
						{chooseData}
						</Text>
					</TouchableOpacity>
					<Modal transparent={true} animationType='fade' visible={isModalVisible} 
					nRequestClose={() =>changeModalVisibility(false) } >
						<Pick3 changeModalVisibility={changeModalVisibility}
						setData={setData}/>
					</Modal >
				</SafeAreaView>
				)
			}
		

	return (
		<View style={styles.page}>
			<ScrollView showsVerticalScrollIndicator={false}>
			<ImageBackground source={BackgroundSatu} style={styles.header}>
			</ImageBackground>
			<Text style={styles.label}>Data Transaksi</Text>
			<Text style={styles.nama}> Nama</Text>
			<View style={styles.form}>
					<TextInput style={styles.input}></TextInput>
			</View>
			<Text style={styles.nama}> Tanggal </Text>
			<View style={styles.form}>
					<TextInput style={styles.input}></TextInput>
			</View>
			<Text style={styles.nama}> Alamat</Text>
			<View style={styles.form}>
					<TextInput style={styles.input}></TextInput>
			</View>
			<Text style={styles.nama}> Kontak </Text>
			<View style={styles.form}>
					<TextInput style={styles.input}></TextInput>
			</View>
				<Text style={styles.nama}>Metode Pembayaran</Text>
				<TouchableOpacity onPress={onPress}
            onLongPress={onLongPress}  style={styles.pilih}>
					<Pilih3 />
				</TouchableOpacity>

					<TouchableOpacity>
					<View style={styles.buatpesanan}>
					<Text style={styles.textpesanan}>Pesan</Text>
				</View>
					</TouchableOpacity>

			</ScrollView>
		</View>
	)

}

export default Pesanan
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	page: {
		flex: 1,
		backgroundColor: '#FFFCFC'
	},

	header: {
		width: windowWidth,
		height: windowHeight * 0.25	,
		paddingHorizontal: 25,
		paddingTop: 25,  
	},
	label: {
		 paddingHorizontal:145,
		fontSize: 18,
		fontFamily: 'TitilliumWeb-Bold'
	},
	form: {
		padding: 1,
		backgroundColor:'#BBEDE9',
		flexDirection: 'row',
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,	
		elevation: 1,
		marginVertical: windowHeight*0.02,
		alignItems: 'center'
	},
	input: {

	},
	nama: {
		fontSize:18,
		fontFamily: 'TitilliumWeb-Bold'
	},
	pick:{
		padding: 1,
		backgroundColor:'#BBEDE9',
		flexDirection: 'row',
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,	
		elevation: 1,
		marginVertical: windowHeight*0.02,
		alignItems: 'center'
	},
	touch:{
		padding : 17,
		backgroundColor: '#BBEDE9',
		alignSelf: 'stretch',
		paddingHorizontal: 20
	},
	pilih:{
		padding: 1,
		backgroundColor:'#BBEDE9',
		flexDirection: 'row',
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,	
		elevation: 1,
		marginVertical: windowHeight*0.02,
		alignItems: 'center'
	},
	container:{
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
	
	},
	buatpesanan:{
		backgroundColor: '#BBEDE9',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 17,
		marginHorizontal: 90,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,
		marginTop: windowHeight*0.02,
		marginBottom: windowHeight*0.05,
		flexDirection:'row'
	},
	textpesanan:{
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})
