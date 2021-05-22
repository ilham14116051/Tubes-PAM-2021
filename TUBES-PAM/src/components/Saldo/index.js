import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import  ButtonIcon  from "../ButtonIcon/index";
import Gap from '../Gap';

const Saldo = () => {
	return (
		<View style={styles.container}>
				
			<View style={styles.informasiSaldo}>
				<View style={styles.text}>
	
					<Text style={styles.valueSaldo}>RP. 200,000</Text>
				</View>
				<View style={styles.text}>
					<Text style={styles.labelGopay}>Saldo </Text>
		
				</View>
			</View>	
			
				<View style={styles.buttonAksi}>
					<ButtonIcon title="Gopay" />	
					<Gap width ={10}/>			
				</View>		
	
		</View>
	);
};

export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		padding: 17,
		marginHorizontal: 30,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,

		elevation: 7,
		marginTop: windowHeight*0.001,
		flexDirection:'row'
	},
	text: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	informasiSaldo: {
		width: '35%',
		backgroundColor: 'white',
		marginTop: 5
	},
	labelSaldo: {
		fontSize: 20,
		fontFamily: 'TitilliumWeb-Reguler'
	},
	valueSaldo: {
		fontSize: 20,
		fontFamily: 'TitilliumWeb-Bold'
	},
	// labelGopay: {
	// 	fontSize: 20,
	// 	fontFamily: 'TitilliumWeb-Reguler'
	// },
	// valueGopay: {
	// 	fontSize: 20,
	// 	fontFamily: 'TitilliumWeb-Bold',
	// 	color: WARNA_UTAMA
	// },
	buttonAksi: {
		flexDirection: 'row',
		marginLeft: 0
	},
	buttonArrow: {
		flexDirection: 'row',
		marginLeft: 0,
		marginTop: -4
	}

})
