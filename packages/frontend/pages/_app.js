import * as React from 'react';
import NextHead from 'next/head';
import '../styles/globals.css';

// Imports
import { chain, createClient, WagmiConfig, configureChains } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import '@rainbow-me/rainbowkit/styles.css';
import { darkTheme, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { useIsMounted } from '../hooks';

// Get environment variables
const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_ID;
// const infuraId = process.env.NEXT_PUBLIC_INFURA_ID;

const hardhatChain = {
  id: 31337,
  name: 'Hardhat',
  nativeCurrency: {
    decimals: 18,
    name: 'Hardhat',
    symbol: 'HARD',
  },
  network: 'hardhat',
  rpcUrls: {
    default: 'http://127.0.0.1:8545',
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  // [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, hardhatChain],
  // [chain.optimismGoerli, hardhatChain],
  // [chain.optimismGoerli],
  [chain.sepolia],
  // [alchemyProvider({ apiKey: alchemyId }), publicProvider()]
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'OPenScience',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const App = ({ Component, pageProps }) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={darkTheme({
        accentColor: '#7b3fe4',
        accentColorForeground: 'white',
        borderRadius: 'medium',
      })} chains={chains} coolMode>
        <NextHead>
          <title>OPenScience</title>
        </NextHead>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
