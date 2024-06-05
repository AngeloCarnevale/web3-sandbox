import { Config, Goerli, Mainnet, DAppProvider as Provider } from "@usedapp/core"
import { getDefaultProvider } from "ethers"

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
    [Goerli.chainId]: getDefaultProvider('goerli'),
  },
}

export default function DAppProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider config={config}>{children}</Provider>
  )
}
