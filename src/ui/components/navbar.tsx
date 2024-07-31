import React from "react";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./NavMenu";


const NavBar = () => {

  return (
    <nav className="fixed top-0 left-0 right-0 w-full box-border mix-blend-normal py-3">
      <div className="container flex flex-row justify-between h-16 px-6 mx-auto">
        <div className="flex flex-row gap-10 justify-start items-center">
          <Link href="/" className="flex flex-row gap-1 items-center">
            <Image src={"/assets/Image.png"} alt="" width={50} height={56} />
            <h1 className="font-bold leading-6">Vortex Scans</h1>
          </Link>
          <NavMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
