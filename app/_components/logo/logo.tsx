import logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Logo=()=>{
    return(
        <Link href="/" >
            <Image src={logo} alt="Go to homepage" width='50' height='50' />
        </Link>
    )
}

export default Logo;