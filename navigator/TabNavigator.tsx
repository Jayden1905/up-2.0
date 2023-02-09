import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CustomersScreen from '../screens/CustomersScreen'
import OrdersScreen from '../screens/OrdersScreen'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/themed'

export type TabStackParamList = {
  Customers: undefined
  Orders: undefined
}

const iconName = (routeName: string) => {
  switch (routeName) {
    case 'Customers':
      return 'users'
    case 'Orders':
      return 'box'
    default:
      return 'users'
  }
}

const iconType = (routeName: string) => {
  switch (routeName) {
    case 'Customers':
      return 'feather'
    case 'Orders':
      return 'entypo'
    default:
      return 'entypo'
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
        tabBarIcon: ({ focused, color, size }) => {
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
