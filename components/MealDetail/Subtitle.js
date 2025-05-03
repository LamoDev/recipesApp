import {View,Text,StyleSheet} from 'react-native'


function Subtitle({children}){
    return  <View style={styles.subtitleContainer}>
              <Text style={styles.subtitle}>{children}</Text>
            </View>
    

}

export default Subtitle ;

const styles=StyleSheet.create({
    
      subtitleContainer: {
        borderBottomColor: "#556e58",
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical:4,
        padding: 6,
      },
      subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#556e58",
      },
})
