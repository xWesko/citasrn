import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import Cita from './componentes/Cita';
import Formulario from './componentes/Formulario';

const App = () => {

  // Definir el state de citas

  const [citas, setCitas] = useState([
    { id: '1', paciente: 'Hook', propietario: 'Luis', sintomas: 'No come' },
    { id: '2', paciente: 'Redux', propietario: 'Miguel', sintomas: 'No duerme' },
    { id: '3', paciente: 'Native', propietario: 'Funes', sintomas: 'No canta' },
  ]);


  // Eliminar pacientes del state

  const eliminarPaciente = id => {
    setCitas( (citasActuales) =>{
      return citasActuales.filter( cita => cita.id !== id );
    })
  }




  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}> Administrador de citas </Text>

      <Formulario />


      <Text style={styles.titulo}>{citas.length > 0 ? ' Administra tus citas' : 'No hay citas, agrega una' } </Text>

      <FlatList
        data={citas}
        renderItem={ ({item}) => <Cita item={item} eliminarPaciente={eliminarPaciente} />  }
        keyExtractor={ cita => cita.id }
      />
    </View>
  );
};





const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#222',
    flex: 1,

  },
  titulo: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF'
  }

});

export default App;
