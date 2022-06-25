import { ReactComponent as EthereumIcon } from './assets/pic_network-Ethereum.svg'
import { ReactComponent as PolygonIcon } from './assets/pic_network-Polygon.svg'
import { ReactComponent as SolanaIcon } from './assets/pic_network-Solana.svg'
import { ReactComponent as BankTokenIcon } from './assets/pic_token-BANK.svg'
import { ReactComponent as ApeTokenIcon } from './assets/pic_token-APE.svg'
import { ReactComponent as DaoMasterTokenIcon } from './assets/pic_token-DAOMSTR.svg'
import { ReactComponent as MkrTokenIcon } from './assets/pic_token-MKR.svg'
import { ReactComponent as BoredApeIcon } from './assets/pic_NFT-BoredApeYachtClub.svg'
import { ReactComponent as CryptoPunkIcon } from './assets/pic_NFT-CryptoPunk.svg'
import { ReactComponent as DevForRevolutionIcon } from './assets/pic_NFT-DevForRevolution.svg'
import { ReactComponent as EnsIcon } from './assets/pic_NFT-ENS.svg'
import { ReactComponent as LostPoetsIcon } from './assets/pic_NFT-LOSTPOETS.svg'
import { ReactComponent as NounsIcon } from './assets/pic_NFT-Nouns.svg'

export type DigitalAsset = {
    name: string
    address: string
    img: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export type Network = {
    name: string
    img: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export let networks: Network[] = [
    { name: "Ethereum", img: EthereumIcon },
    { name: "Polygon", img: PolygonIcon },
    { name: "Solana", img: SolanaIcon },
]

export let tokens: DigitalAsset[] = [
    { name: "BANK", address: "0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198", img: BankTokenIcon },
    { name: "APE", address: "0x4d224452801ACEd8B2F0aebE155379bb5D594381", img: ApeTokenIcon },
    { name: "DAOMSTR", address: "0x7F6B4d98789d283622D6B85d0efa3a7928C59B89", img: DaoMasterTokenIcon },
    { name: "MKR", address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", img: MkrTokenIcon },
];
export let nfts: DigitalAsset[] = [
    { name: "Devs for Revolution", address: "0x25ed58c027921E14D86380eA2646E3a1B5C55A8b", img: DevForRevolutionIcon },
    { name: "Bored Ape Yacht Club", address: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D", img: BoredApeIcon },
    { name: "Crypto Punks", address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB", img: CryptoPunkIcon },
    { name: "Nouns", address: "0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03", img: NounsIcon },
];