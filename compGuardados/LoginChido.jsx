import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import tw from 'twrnc';

export default function LoginChido() {
  return (
    <View style={tw `p-4 android:pt-2 bg-white dark:bg-black` }>
      
      <View style={{ alignItems: 'center' }}>
        <Image
          style={{ width: 250, height: 60 }}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' }}
          alt="Your Company"
        />
        <Text style={{ marginTop: 20, fontSize: 20, fontWeight: 'bold', color: '#333' }}>
          Inicia sesión con tu cuenta
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <TextInput
          placeholder="Email address"
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            padding: 10,
            fontSize: 16,
            marginBottom: 10,
          }}
          autoCompleteType="email"
          keyboardType="email-address"
        />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16, color: '#333', flex: 1 }}>Password</Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: 'blue' }}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          placeholder="Password"
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 5,
            padding: 10,
            fontSize: 16,
            marginBottom: 10,
          }}
          autoCompleteType="password"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            borderRadius: 5,
            padding: 10,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Sign in</Text>
        </TouchableOpacity>

        <Text style={{ marginTop: 20, fontSize: 16, color: '#666', textAlign: 'center' }}>
          Not a member?{' '}
          <TouchableOpacity>
            <Text style={{ color: 'blue', fontWeight: 'bold' }}>Start a 14 day free trial</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}