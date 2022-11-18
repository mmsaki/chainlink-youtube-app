import '../styles/globals.css'

import "@rainbow-me/rainbowkit/styles.css"
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit"
import { chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { publicProvider } from "wagmi/providers/public"
import merge from 'lodash.merge'

const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID })],
  [publicProvider()],
  [jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://127.0.0.1:24012`,
      }),
    })],
)


const { connectors } = getDefaultWallets({
  appName: "Chainlink Demo App",
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
});

const myTheme = merge(darkTheme())

function MyApp({ Component, pageProps }) {
  return (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider chains={chains} theme={myTheme}>
      <Component {...pageProps} />
    </RainbowKitProvider>
  </WagmiConfig>
  )
}

export default MyApp