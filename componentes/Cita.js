
import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

const Cita = ( {item, eliminarPaciente} ) => {

    const dialogoEliminar = id => {
        console.log('Eliminando...', id);
      
        eliminarPaciente(id)
    }

    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}> Paciente: </Text>
                <Text style={styles.texto}> { item.paciente } </Text>
            </View>
            <View>
                <Text style={styles.label}> Propietario: </Text>
                <Text style={styles.texto}> { item.propietario } </Text>
            </View>
            <View>
                <Text style={styles.label}> Sintomas: </Text>
                <Text style={styles.texto}> { item.sintomas } </Text>
            </View>

            <View>
                <TouchableHighlight onPress={ () => dialogoEliminar(item.id) } style={styles.btnEliminar}>
                    <Text style={styles.txtBtnEliminar}> Eliminar &times;  </Text>
                </TouchableHighlight>
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF',
        borderBottomColor: '#E1E1E1',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
       
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,

    },
    texto:{
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: '#EC3636',
        marginVertical: 10,
    },
    txtBtnEliminar:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    }
});



export default Cita;