import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, ScrollView } from 'react-native'
import { BackgroundSatu, Logo } from '../../assets';
import {PesananAktif, Saldo} from "../../components";


const move = () => {
	

    return (
        <View style={styles.page}>
		<ScrollView showsVerticalScrollIndicator={false}>
         <ImageBackground source={BackgroundSatu} style={styles.header}></ImageBackground>
            <Text>
            <Text style={styles.label}>Riwayat Pesanan : </Text>

            </Text>
            
				<View style={styles.pesananAktif}>
				<PesananAktif title="Pesanan No. 0002141" status ="Sudah Selesai"/>
				<PesananAktif title="Pesanan No. 0002142" status ="Dalam Proses Pengerjaan"/>
				<PesananAktif title="Pesanan No. 0002143" status ="Sudah Selesai"/>
				<PesananAktif title="Pesanan No. 0002144" status ="Sudah Selesai"/>
			</View>
			</ScrollView>
        </View>
    )
}

export default move

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

    label: {
		fontSize: 25,
		fontFamily: 'TitilliumWeb-Bold',
    
	},



})
