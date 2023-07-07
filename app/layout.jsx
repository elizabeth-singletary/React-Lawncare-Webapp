import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Evergreen Lawncare',
  description: 'Lawncare Company based out of Durham, North Carolina',
}

export default function RootLayout({ children }) {
  const bodyStyle = {
    fontFamily: "'Source Sans Pro', sans-serif",
  };
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700" rel="stylesheet" />
      <body class="leading-normal tracking-normal text-white gradient" style={bodyStyle}>{children}</body>
    </html>
  )
}
