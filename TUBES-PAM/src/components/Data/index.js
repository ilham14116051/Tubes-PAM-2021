import React from 'react';
import { StyleSheet, Text, View,Dimensions,Image } from 'react-native';
import  ButtonIcon  from "../ButtonIcon/index";
import Gap from '../Gap';

const Data = () => {
	return (
		<View style={styles.container}>
			{/* <View style={styles.buttonAksi}>
				<View>
				{/* <ButtonIcon title="Akun"></ButtonIcon>	
				<ButtonIcon title="Akun"></ButtonIcon>
				<ButtonIcon title="Akun"></ButtonIcon> */}
				{/* </View>
				
				<Gap width ={10}/>
				</View>	 */}
					 
			<View style={styles.informasiSaldo}>
				
				
				<View style={styles.text}>
				<ButtonIcon title="Akun"/>
					{/* <Text style={styles.labelSaldo}>Saldo :</Text> */}
					<Text style={styles.valueSaldo}>Data Pribadi</Text>
				</View>
				<View style={styles.text}>
				
					<Text style={styles.valueSaldo}>Settings  </Text>
					{/* <Text style={styles.valueGopay}>RP. 100,000</Text> */}
				</View>
				<View style={styles.text}>
				
					<Text style={styles.valueSaldo}>Logout  </Text>
					{/* <Text style={styles.valueGopay}>RP. 100,000</Text> */}
				</View>
			</View>
			{/* <View style={styles.buttonArrow}>
					<ButtonIcon title= "Arrow"/>				
				</View>	 */}
	
		</View>
	);
};

export default Data;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
	
		padding: 3,
		marginHorizontal: -60,
		borderRadius: 10,
		marginTop: windowHeight*0.0001,
		flexDirection:'row',
		alignItems:'center',
	},
	text: {
		flexDirection: 'row',
		
	},
	informasiSaldo: {
		width: '70%',
		marginLeft: 0,
		height: 90,
		marginBottom: -160,

	},
	labelSaldo: {
		fontSize: 20,
		fontFamily: 'TitilliumWeb-Reguler'
	},
	valueSaldo: {
		marginLeft: 15,
		marginTop: 10,
		fontSize: 20,
		fontFamily: 'TitilliumWeb-Bold'
	},
	labelGopay: {
		fontSize: 20,
		fontFamily: 'TitilliumWeb-Bold'
	},

	buttonAksi: {
		paddingTop: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems:'center',
	},
	buttonArrow: {
		flexDirection: 'row',
		marginLeft: 40
	},

})