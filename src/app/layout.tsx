import React from 'react'

function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang='en'>
        <body>
            {children}
        </body>
    </html>
  )
}

export default RootLayout