import React, { useState } from "react";
import { 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Image,
    FlatList, 
    Alert
} from "react-native" ;

import { AntDesign } from "@expo/vector-icons";
import { Header } from "../components/Header";
import { Tasks } from "../components/Tasks";
import { styles } from "./styles";

export function Home(){
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksName, setTasksName] = useState('');

  // Adiciona uma tarefa, verifica se tem repetida e retira os espaços no cadastro
  function handleTaskAdd(){
    const newTask = tasksName.trim();

    if(newTask || newTask != ''){
      if(tasks.includes(tasksName)){
        return Alert.alert('Tarefa', 'Já existe uma tarefa na lista.')
      }    

      setTasks(prevState => [...prevState, tasksName]);
      
      // Limpa o input
      setTasksName('');
    } else {
      return Alert.alert('Tarefa', 'Insira um nome para a Tarefa');
    }
  }

  // Remove tarefa da lista
  function handleTaskRemove(description: string){
    //return console.log(tasks.filter(task => task !== description));

    Alert.alert('Detetar Tarefa', `Deseja deletar a tarefa: ${description}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task !== description))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return(
    <View style={styles.container}>
      
      <Header />

      <View style={styles.form}>
        <TextInput 
            style={styles.input}
            value={tasksName}
            placeholder="Adicone uma nova tarefa"
            autoCorrect={false}
            //returnKeyType="done"
            placeholderTextColor="#808080"
            onChangeText={text => setTasksName(text)}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleTaskAdd}
        >   
          <AntDesign name="pluscircleo" size={16} color="#F2F2F2" />
        </TouchableOpacity>
      </View>

      <View style={styles.tasks}>
        <TouchableOpacity style={styles.created}>
            <Text style={styles.textCreated}>Criadas</Text>
            <Text style={styles.counter}>{tasks.length}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.done}>
            <Text style={styles.textDone}>Concluídas</Text>
            <Text style={styles.counter}>{tasks.length}</Text>
        </TouchableOpacity>
      </View> 

      <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Tasks
              description={item}
              onRemove={() => handleTaskRemove(item)}
              finished={true}
             
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.listEmptyContainer}>
              <Image source={require("../../images/Clipboard.png")} />

              <Text style={styles.title}> Você ainda não tem tarefas cadastradas </Text>
              <Text style={styles.subTitle}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
             {paddingBottom: 100},
             tasks.length === 0 && { flex: 1 }
          ]}
      />
      
    </View>
  )
}