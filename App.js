import React from 'react';
import { StyleSheet, 
  Text, 
  View,
Button,
TouchableOpacity } from 'react-native';

export default class App extends React.Component {
constructor()
{
super()

this.state={

resultText:"",
caltext:''
}

  this.ops=['C','+','-','*','/']


}


validate()
{

const text=this.state.resultText
switch(text.slice(-1)){

case '+':
case '-':
case '*':
case '/':
         return false

}

return true
}



btnPressed(text)
{

if(text=='=')
{
    return this.validate() && this.cal()
}
this.setState({

resultText:this.state.resultText+text

})

}


cal()
{

const text=this.state.resultText

this.setState({
caltext: eval(text),
resultText:" "

})



}





operation(opss)
{

if(this.state.resultText.length<1)return
switch(opss)
{
case 'C':

let arr=this.state.resultText.split('')

arr.pop()
this.setState({
resultText:arr.join('')
})

break
case'+':
case'-':
case'*':
case'/':

const lastchar=this.state.resultText.split('').pop()

if(this.ops.indexOf(lastchar) > 0 ) return
if(this.state.text='' ) return
this.setState({
resultText:this.state.resultText+opss
})



}




}

  render() {

   let rows=[]
   let nums=[[1,2,3],[4,5,6],[7,8,9],['.',0,'=']]
   for(let i=0;i<4;i++)
   {
     let row=[]
     for(let j=0;j<3;j++)
     {
      row.push(<TouchableOpacity  key={nums[i][j]} onPress={()=> this.btnPressed(nums[i][j])} style={styles.btn} >
      <Text style={styles.btntxt}>{nums[i][j]}</Text>
      </TouchableOpacity>)
     }
     rows.push(<View  style={styles.row}>{row}</View>);
   }
  
  const cols=[]
  
  for(let i=0;i<5;i++)
   {
   
      cols.push(<TouchableOpacity key={this.ops[i]} onPress={()=>this.operation(this.ops[i]) } style={styles.btn} ><Text style={styles.opstxt}>{this.ops[i]}</Text></TouchableOpacity>)
     
    
   }

    return (
      <View style={styles.container}>
      <View style={styles.result}>
      <Text style={styles.restext}>{this.state.resultText}</Text>
      
      </View>
      <View style={styles.calculation}>
      <Text style={styles.caltext}>{this.state.caltext}</Text>

      </View>
      <View style={styles.buttons}>
      <View style={styles.numbers}>
      {rows}
      
      </View>

      <View style={styles.operation}>
     
     {cols}
      
      
      </View>
      </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:20,
    
  },
  result: {
    flex: 2,
    alignItems:'flex-end',
    justifyContent:'center',
  backgroundColor: 'white',
    
  },
  caltext: {
    fontSize:30,
       
    justifyContent:'center',
    
  },

  btn:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',    

    alignSelf:'stretch',
  },
  restext: {
    fontSize:50,

    alignSelf:'stretch',
    
  },
  btntxt:{
fontSize:40,
color:'white',
   textAlign: 'center',

  },
  opstxt:{
   textAlign: 'center',
    fontSize:30,
    alignContent:'center',
    color:'black',
      },

  calculation: {
    flex: 1,
    backgroundColor: '#666',
    
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center',
    
  },
  
  buttons: {
    flexGrow: 7,
   
    flexDirection:'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#a4a4a4',
    
  },
  operation: {
    flex: 1,
    backgroundColor: '#a6a6a6',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'space-around',
    
  },
 
});
