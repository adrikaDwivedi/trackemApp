import { StyleSheet, Text, View , TouchableOpacity, TextInput} from 'react-native'
import { useState } from 'react'


const OtpScreen = ({route , navigation}) => {

    const {confirmation} = route.params;
    const[otp , setOtp] = useState('');

    const verifyOtp = async () =>{
        try{
            const result = await confirmation.confirm(otp);
            navigation.replace("HomeSceen");
        }
        catch(err){
            alert("Invalid OTP");
        }
    };

return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter OTP"
        keyboardType="number-pad"
        onChangeText={setOtp}
        value={otp}
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
          marginBottom: 20,
        }}
      /> 

      <Button title="Verify OTP" onPress={verifyOtp} />
    </View>
  );
}

export default OtpScreen




// const styles = StyleSheet.create({})




