import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import { useTailwind } from 'tailwind-rn/dist'

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  const tw = useTailwind()
  return (
    <View style={tw('flex justify-center items-center pt-2')}>{children}</View>
  )
}
