import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import '../globals.css';

export const metadata = {
    title: 'Threads',
    description: "A Next.js App"
}

const inter = Inter({subsets:["latin"]}) //Import font

export default function RootLayout({children}:{children:React.ReactNode}){
    return (
            <html lang="en">
                <body className={'${inter.className} bg-dark-1'}>
                <ClerkProvider>
                    {children}
                </ClerkProvider>
                </body>
            </html>
    )
}