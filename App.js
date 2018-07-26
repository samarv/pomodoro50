import React from 'react';
import { StyleSheet, Text, View,Button , TextInput} from 'react-native';
import { Constants } from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'red',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textTimeContainer: {
    fontSize: 32
  },
  inputContainer: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'red',
    padding:10
  }
});


onPauseButton = () => {
  console.log("pause pressed8")
}

onStopButton = () => {
  console.log("pause pressed8")
}




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

  
  // incrementCount = () => {
  //   this.setState(prevState => ({count: prevState.count + 1}))
  //   if(this.state.count % 60 === 0 && this.state.count !== 0){
  //     this.incrementMinute();
  //   }
  //   if(this.state.min % 60 === 0 &&  this.state.min !== 0){
  //     this.incrementHour();
  //   }

  //   if(this.state.hour % 24 === 0 &&  this.state.hour !== 0){
  //     this.incrementDay();
  //   }
  // }

  // incrementMinute = () => {
  //   this.setState(prevState => ({
  //     count: 0,
  //     min: prevState.min + 1
  //   }))
  // }

  // incrementHour = () => {
  //   this.setState(prevState => ({
  //     min: 0,
  //     hour: prevState.hour + 1
  //   }))
  // }

  // incrementDay = () => {
  //   this.setState(prevState => ({
  //     hour: 0
  //   }))
  // }

  decrementStart = () => {
    setInterval(this.decrementTimer, 1000)
  }

  decrementTimer = () => {
    // if timer hour > 0 or timerminute> 0 or timersecond>0
    //  decrease 1 from from timer second, 
    //else
    // do nothing
    if (this.state.timerSecond > 0){
      this.decrementSecond();
    }
    else if (this.state.timerSecond === 0) {
      if(this.state.timerMinute > 0){
        this.decrementMinute();
      }
      else if(this.state.timerMinute === 0 && this.state.timerHour > 0){
        this.decrementHour();
      }
      else{
        console.log(this.state.timerSecond)
      }
    }
    else{
      console.log(this.state.timerSecond)
    }
  }

  decrementSecond = () => {
    this.setState(prevState => ({timerSecond: prevState.timerSecond - 1}))
  }

  decrementMinute = () => {
    this.setState(prevState => ({
      timerSecond: 59,
      timerMinute: prevState.timerMinute - 1
    }))
  }

  decrementHour = () => {
    this.setState(prevState => ({
      timerMinute: 59,
      timerHour: prevState.timerHour - 1
    }))
  }

  
  render() {
    return (
    <View style={[styles.container]}>
      <View style={[styles.timeContainer]}>
        <Text style={[styles.textTimeContainer]}>{this.state.timerHour}</Text>
        <Text style={[styles.textTimeContainer]}>:</Text>
        <Text style={[styles.textTimeContainer]}>{this.state.timerMinute}</Text>
        <Text style={[styles.textTimeContainer]}>:</Text>
        <Text style={[styles.textTimeContainer]}>{this.state.timerSecond}</Text>
      </View>
      <View style={[styles.timeContainer]}>
        <TextInput
          style={[styles.inputContainer]}
          placeholder="put in hours"
          onChangeText={(timerHour) => this.setState({timerHour})}
        />
        <TextInput
          style={[styles.inputContainer]}
          placeholder="put in minutes"
          onChangeText={(timerminute) => this.setState({timerminute})}
        />
        <TextInput
          style={[styles.inputContainer]}
          placeholder="put in seconds"
          onChangeText={(timerSecond) => this.setState({timerSecond})}
        />
      </View>
      <View style={[styles.timeContainer]}>
        <Button
              onPress = {this.decrementStart}
              title="Start the timer"
              color="#841584"
            />
      </View>
    </View>
    );
  }
}