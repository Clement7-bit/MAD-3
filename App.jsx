import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const App = () => {
  return (
    <View style={styles.utama}>
      <Text style={styles.title}>Welcome</Text>
      <View>
        <Text style={styles.textUsername}>Username</Text>
        <TextInput style={styles.inputUsername} placeholder={'Masukan username anda'} />
      </View>

      <View>
        <Text style={styles.textUsername}>Password</Text>
        <TextInput style={styles.inputUsername} placeholder={'Masukan password anda'}/>
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={.8}>
        <Text style={{color: 'white'}}>Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight:"900",
    color:'black'
  },
  utama: {
    padding: 20
  },
  textUsername: {
    marginTop: 25,
    color: 'black',
    fontWeight:"500"
  },
  inputUsername: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10
  },
  button: {
    backgroundColor: '#e66d28',
    marginTop: 50,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  }
})