import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Box } from '@mui/material'

const Layout = ({children}) => {
  return (
   <div>
    <Header/>
     <Box sx={{minHeight:"calc(100vh - 256px)",display:"flex",flexDirection:"column",position:"relative"}}>
      {children}
    </Box>
    <Footer/>
   </div>
  )
}

export default Layout
