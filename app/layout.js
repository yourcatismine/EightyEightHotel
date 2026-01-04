import './globals.css'

export const metadata = {
    title: 'Eighty Eight Hotel',
    description: 'Urban Comfort. Refined Living.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}