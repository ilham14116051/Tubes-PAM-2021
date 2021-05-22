import React from 'react'
import {
	StyleSheet, Text, View, TouchableOpacity,
	ScrollView, Dimensions
} from 'react-native'
const OPTIONS =['Dana','Shopeepay','Gopay'];
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Pick3 =(props)=> {
	const onPressItem=(option) =>{
		 props.changeModalVisibility(false);
		 props.setData(option);
	}

	const option = OPTIONS.map((item, index) => {
		return (
			<TouchableOpacity style={styles.option} key={index}
			onPress={()=> onPressItem(item)}>
				<Text style={styles.text}>
					{item}

				</Text>
			</TouchableOpacity>
		)
	})
	return (
		<TouchableOpacity onPress={()=> props.changeModalVisibility(false)}
		style={styles.container}>
			<View style={[styles.modal, {width:windowWidth -100, height:windowHeight/5 }] }>
				<ScrollView>
					 {option}
				</ScrollView>
			</View>

		</TouchableOpacity>
		)
}
const styles=StyleSheet.create({
		container:{
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center'
		},
		modal:{
			backgroundColor: 'white',
			borderRadius: 10
		},
		options:{
			alignItems:'flex-start' 
		},
		text:{
			margin: 20,
			fontSize: 20,
			fontWeight: 'bold'
		}

})

export {Pick3}