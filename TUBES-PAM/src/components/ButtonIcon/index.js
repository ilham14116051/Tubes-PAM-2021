import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import {IconGopay,IconArrow,IconSatuan, IconSetrika, IconEkspress,IconRoger, IconAkun, IconKiloan, IconKarpet, Iconvip} from "../../assets"


const ButtonIcon = ({title , type, onPress}) => {
			const Icon = () => {
				if(title =="Gopay") return <IconGopay />

				if(title =="Arrow") return <IconArrow />

				if(title == "Kiloan") return <IconKiloan />
				
				if(title == "Satuan") return <IconSatuan />

				if(title == "vip") return <Iconvip />

				if(title == "Karpet") return <IconKarpet />

				if(title == "Setrika") return <IconSetrika />

				if(title == "Ekspress") return <IconEkspress />

				if(title == "Roger") return <IconRoger />

				if(title == "Akun") return <IconAkun />


				return <IconGopay />
				
			}

	return (
		<TouchableOpacity style={styles.container(type)} onPress={onPress} >
			<View style={styles.icon(type)}>
				<Icon/>
			</View>
		</TouchableOpacity>
		
	)
}

export default ButtonIcon

const styles = StyleSheet.create({
	container:(type)=> ({
		marginBottom: 12,
		marginRight	:type === "layanan" ? 30 : 0	
	}),
	icon: (type) => ({
		padding: type === "layanan" ? 3 : 7,
		borderRadius: 10,
	}),

})
