import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

interface Props {
  children: ReactNode
}

export default function MainLayout({ children }: Props) {
  const tw = useTailwind()
  return <View style={tw('flex justify-center')}>{children}</View>
}
