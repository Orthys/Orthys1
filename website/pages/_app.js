import '../styles/globals.css'
import { CartProvider } from '../utils/cart.js'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp