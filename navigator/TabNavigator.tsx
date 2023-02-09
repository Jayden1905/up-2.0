import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed'
import React, { useEffect } from 'react'
import CustomersScreen from '../screens/CustomersScreen'
import OrdersScreen from '../screens/OrdersScreen'
import { TabStackParamList } from '../types'

const iconName = (routeName: string) => {
  switch (routeName) {
    case 'Customers':
      return 'users' as const
    case 'Orders':
      return 'box' as const
    default:
      return 'users' as const
  }
}

const iconType = (routeName: string) => {
  switch (routeName) {
    case 'Customers':
      return 'feather' as const
    case 'Orders':
      return 'entypo' as const
    default:
      return 'entypo' as const
  }
}

const Tab = createBottomTabNavigator<TabStackParamList>()

export default function TabNavigator() {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#59c1cc',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          return (
            <Icon
              type={iconType(route.name)}
              name={iconName(route.name)}
              size={size}
              color={color}
            />
          )
        },
      })}
    >
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  )
}
