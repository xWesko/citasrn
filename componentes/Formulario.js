import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {

    const [paciente, guardarPaciente]        = useState('');
    const [propietario, guardarPropietario]  = useState('');
    const [telefono, guardarTelefono]        = useState('');
    const [fecha, guardarFecha]              = useState('');
    const [hora, guardarHora]                = useState('');
    const [sintomas, guardarSintomas]        = useState('');
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);


    // Muestra/Oculta la fecha
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const confirmarFecha = (date) => {
        const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
        guardarFecha(date.toLocaleDateString('es-Es', opciones));
        hideDatePicker();
    };

    // Muestra/Oculta la hora

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
    const confirmarHora = (date) => {
        const opciones = { hour: 'numeric', minute: '2-digit' };l
        guardarHora(date.toLocaleDateString('es-Es', opciones));
        hideTimePicker();
    };

    //Crear nueva cita
    const crearNuevaCita = () => {
        //Validar
        if( paciente.trim() === '' || 
            propietario.trim() === '' || 
            telefono.trim() === '' || 
            fecha.trim() === '' ||  
            hora.trim() === '' ||
            sintomas.trim() === '')
        {// Falla la validación
            mostrarAlerta();
            return;
        }
    }

    //Muestra la alerta si falla la validación
    const mostrarAlerta = () =>{
       Alert.alert(
           'Error', //Titulo
           'Todos los campos son obligatorios', // mensaje
           [{
               text: 'Cerrar' //Arreglo de botones
           }]
       ) 
    }

  

    return (
       <>   
            <View style={styles.form}>

                <View>
                    <Text style={styles.label}> Paciente: </Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={ texto => guardarPaciente(texto) }
                    />
                </View>

                <View>
                    <Text style={styles.label}> Dueño: </Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={ texto => guardarPropietario(texto) }
                    />
                </View>

                <View>
                    <Text style={styles.label}>Teléfono contacto: </Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={ texto => guardarTelefono }
                        keyboardType='numeric'
                    />
                </View>

                <View>
                    <Text style={styles.label}>Fecha</Text>
                    <Button title="Seleccionar fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                    />
                    <Text> {fecha} </Text>
                </View>

                <View>
                    <Text style={styles.label}>Hora</Text>
                    <Button title="Seleccionar hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                    />
                    <Text> {hora} </Text> 
                </View>

                <View>
                    <Text style={styles.label}> Sintomas: </Text>
                    <TextInput 
                        multiline
                        style={styles.input}
                        onChangeText={ texto => guardarSintomas(texto) }
                    />
                </View>

                <View>
                    <TouchableHighlight onPress={ () => crearNuevaCita() } style={styles.btnSubmit}>
                        <Text style={styles.txtBtnSubmit}> Crear nueva cita </Text>
                    </TouchableHighlight>
                </View>

            </View>
       </>
    );
}

const styles = StyleSheet.create({
    form: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginHorizontal: '2.5%',
        borderRadius: 20,
        marginHorizontal: '4.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: '#1BA936',
        marginVertical: 10,
    },
    txtBtnSubmit:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    }

})

export default Formulario;