import Link from "next/link"
import Image from "next/image"
import CustomBottom from "./CustomBottom"
const NavBar = () => {
  return (
    <header className="w-full absolute z-index">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
<Link href='/' className="flex justify-center item-center">
    <Image src='/logo.svg' alt="car hub logo" width={118} height={18} className="object-contain"/>
</Link>
<CustomBottom title="sig in" btnType="button" containerStyles="text-secondary-green rounded-full bg-white min-w-[130px]"/>
        </nav>
        </header>
  )
}

export default NavBar