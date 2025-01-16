import Image from "next/image";
import logo from "@/../public/images/chatterBox_transparent.png";

export default function LandingHeader() {
    return (
        <nav className="bg-gradient-to-b from-purple-800 to-purple-950 w-full p-2 flex flex-nowrap justify-start items-center">
            <div className="w-full max-w-[900px] mx-auto flex items-center justify-center md:justify-start">
                <Image src={logo} alt="chatter box" className="w-48" />
            </div>
        </nav>
    );
}