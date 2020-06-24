import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {

  //
  const [mostrarForm, guardarMostrarForm] = useState(false);

  // Definir el state de citas

  const [citas, setCitas] = useState([ ]);


  // Eliminar pacientes del state

  const eliminarPaciente = id => {
    setCitas( (citasActuales) =>{
      return citasActuales.filter( cita => cita.id !== id );
    })
  }

  //Muestra/oculta el formulario
  const MostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm);
  }

  //Ocultar tecladi
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  }





  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
    <View style={styles.contenedor}>
      <Text style={styles.titulo}> Administrador de citas </Text>

      <View>
          <TouchableHighlight onPress={ () => MostrarFormulario() } style={styles.btnMostarForm}>
              <Text style={styles.txtBtnMostrarForm}> {mostrarForm ? 'Cancelar crear cita' : 'Crear nueva cita' } </Text>
          </TouchableHighlight>
      </View>

      <View style={styles.contenido}>

        {mostrarForm ? (
          <>
          <Text style={styles.titulo}> Crear Nueva Cita </Text>
            <Formulario 
              citas = {citas}
              setCitas = {setCitas}
              guardarMostrarForm={guardarMostrarForm}
            />
          </>
        ): (
          <>
            <Text style={styles.titulo}>{citas.length > 0 ? ' Administra tus citas' : 'No hay citas, agrega una' } </Text>

            <FlatList
              style={styles.listado}
              data={citas}
              renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente} />  }
              keyExtractor={ cita => cita.id }
            />
          </>
        )}

      </View>
      
    </View>
    </TouchableWithoutFeedback>
  );
};





const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#E9E9E9',
    flex: 1,
    

  },
  titulo: {
    textAlign: 'center',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  contenido: {
    flex: 1,
    marginHorizontal: '4.5%'
  },
  listado:{
    flex:1,
  },
  btnMostarForm: {
    padding: 10,
    backgroundColor: '#3360FC',
    marginVertical: 10,
    marginHorizontal: '4.5%'
},
txtBtnMostrarForm:{
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    
}

});

export default App;
