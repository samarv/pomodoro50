import React from 'react';
import { StyleSheet,Alert, Text, View,Button , TextInput} from 'react-native';
import { Constants } from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'red',
  },
  inputMinutes: {
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    margin:10,
  },
  buttonMinute: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'black',
    padding:10
  }
});



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerSecond:0,
      timerMinute:0,
      timerHour:0,
      count:2,
      min:29,
      hour:0,
      inputMin: '',
      input: ''
    };

  }
  onSubmit = async () => {
    
    var result = await this.setMinute()
    setInterval(this.decrementCount, 1000)
    
  }

  setMinute = () => {
    let secs = this.state.timerMinute * 60
      console.log(secs)
      this.setState({
        timerSecond: secs
      })
  }

  decrementCount = () => {
    this.setState(prevState => ({timerSecond: prevState.timerSecond - 1}))
  }
  render() {
    return (
    <View style={[styles.container]}>
      <TextInput
          style={[styles.inputMinutes]}
          placeholder="type in number of minutes!"
          onChangeText={(timerMinute) => this.setState({timerMinute})}
        />
      <Button 
        onPress={this.onSubmit}
        title="Go! Go! Go!"
      />
      <Text> { this.state.timerMinute} </Text>
      <Text> { this.state.timerSecond} </Text>
    </View>
    );
  }
}