import { Inter, Roboto, Open_Sans } from 'next/font/google'
 
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto = Roboto({
    weight: ["700"],
    subsets: ['cyrillic'],
})

export const openSansHeader = Open_Sans({ weight: ["700"], subsets: ["latin"] });
export const openSansCell = Open_Sans({ weight: ["500"], subsets: ["latin"] });