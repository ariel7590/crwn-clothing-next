import Link from "next/link";
import cart from "@/public/cart-icon.svg";
import Image from "next/image";
import { auth } from "@/app/_lib/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className="uppercase flex items-center gap-4">
      {session ? (
        <div className="font-bold">
          Welcome {session.user?.name?.split(" ")[0]}
        </div>
      ) : (
        <div className="font-bold">Welcome Guest</div>
      )}
      <Link href="/shop">shop</Link>
      <Link href="/contact">contact</Link>
      <Link href="/signin">sign in</Link>
      <div>
        <Image
          src={cart}
          width="30"
          height="30"
          alt="shopping cart"
          className="mb-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
