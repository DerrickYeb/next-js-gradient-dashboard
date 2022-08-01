import { Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AppLayout from '../src/components/AppLayout'
import styles from '../styles/Home.module.css'
import Dashboard from './dashboard'

const Home= () => {
  return (
  <>
  <AppLayout as="main">
    <Dashboard/>
  </AppLayout>
  </>
  )
}

export default Home
