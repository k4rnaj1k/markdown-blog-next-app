'use client'
import React from 'react'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { Silkscreen } from 'next/font/google'

const silkscreen = Silkscreen({
  weight: ['400','700'],
  style: ['normal'],
  subsets: ["latin"]
})

const navBarTheme = createTheme({
  typography:{
    fontSize: 25
  }
})

export default function NavBarLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <ThemeProvider theme={navBarTheme}>
      <div role='navBar'>
        <Breadcrumbs aria-label='breadcrumb' separator=" " bgcolor='#2b3035'>
          <Typography color='#acaeb0' fontFamily={silkscreen.style.fontFamily}>
            Markdown Blog
          </Typography>
          <Link
            underline='hover'
            color='#acaeb0'
            href='/home'
          >
            Home
          </Link>
          <Link
            underline='hover'
            color='#acaeb0'
            href='/about'
          >
            About
          </Link>
        </Breadcrumbs>
      </div>
      </ThemeProvider>
      {children}
    </section>
  )
}
