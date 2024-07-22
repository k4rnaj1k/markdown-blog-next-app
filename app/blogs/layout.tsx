
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { Navbar } from '../components/Navbar'
import theme from '../utils/theme'

export default function NavBarLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (<ThemeProvider theme={theme}>
    <Navbar />
    {/* 
    This shit caused me to lose my mind in search of a good way of styling the whole page.
    Turns out this cssBaseline is enough to set the bg color.
    */}
    <CssBaseline />
    <Box>
      {children}
    </Box>
  </ThemeProvider>
  )
}
