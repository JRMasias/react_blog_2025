"use client";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { links } from "@/lib/links";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "@/../public/images/chatterBox_transparent.png";

export default function Navbar() {
    const [screenWidth, setScreenWidth] = useState<number>(0);

    // use effect gets and watches screen width
    useEffect(() => {
        function handleScreenWidth() {
            setScreenWidth(window.innerWidth);
        }

        handleScreenWidth();

        window.addEventListener("resize", handleScreenWidth);
        return () => window.removeEventListener("resize", handleScreenWidth);
    }, []); // end useEffect()

    return (
        <div className="sticky top-0 right-0 p-2 bg-purple-950">
            <div className="max-w-[900px] mx-auto flex justify-between items-center">
                {/* Logo Icon */}
                <Image src={logo} alt="logo" className="w-48" priority />
                {screenWidth <= 768 ?
                    <Sheet>
                        {/* FA BARS */}
                        <SheetTrigger asChild className="">
                            <div className="w-10 h-12 p-1 flex flex-col justify-evenly items-center cursor-pointer">
                                <div className="w-full h-1 bg-white rounded-lg" />
                                <div className="w-full h-1 bg-white rounded-lg" />
                                <div className="w-full h-1 bg-white rounded-lg" />
                            </div>
                        </SheetTrigger>
                        <SheetContent side="top" className="flex flex-col pt-16 gap-0 border-b-0 justify-center items-center bg-purple-950 w-full text-white">
                            <SheetDescription></SheetDescription>
                            <SheetTitle />
                            {links.map((link, index) => {
                                return (
                                    <SheetClose asChild key={index}>
                                        <Link href={link.href} className="flex justify-start items-center gap-2 p-4 w-full">
                                            {link.icon}
                                            <p>{link.name}</p>
                                        </Link>
                                    </SheetClose>

                                );
                            })}
                        </SheetContent>
                    </Sheet>
                    :
                    <div className="flex items-center pe-2 gap-4">
                        {links.map((link, index) => {
                            return (
                                <Link key={index} href={link.href} className="text-white flex gap-1 border-l-2 border-l-purple-900 ps-3 hover:text-orange-500">
                                    {link.icon}
                                    <p>{link.name}</p>
                                </Link>
                            );
                        })}
                    </div>
                }
            </div>
        </div>
    );
}