import { useNavigation } from '@react-navigation/native'
import { Image, Input } from '@rneui/themed'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import { CustomersScreenNavigationProps } from '../types'

const CustomersScreen = () => {
  const navigation = useNavigation<CustomersScreenNavigationProps>()
  const tw = useTailwind()
  const [input, setInput] = useState<string>('')

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <ScrollView style={tw('bg-[#59c1cc]')}>
      <Image
        source={{ uri: 'https://links.papareact.com/3jc' }}
        containerStyle={tw('w-full h-64')}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Search by Customers"
        value={input}
        onChangeText={setInput}
        containerStyle={tw('bg-white pt-5 pb-0 px-10')}
      />
    </ScrollView>
  )
}

export default CustomersScreen
