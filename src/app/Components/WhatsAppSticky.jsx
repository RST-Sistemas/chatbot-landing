/** @format */

import Image from "next/image";
import { WhatsappIconOutline } from "../../assets/svg";
import Link from "next/link";

export default function WhatsAppSticky() {
  return (
    <div className='sticky bottom-0 z-30'>
      <Link href={"https://wa.me/2615086780"} target='_blank'>
        <div className='absolute bottom-3 right-3  flex  items-center justify-center w-16 h-16 rounded-full bg-[#25D366] hover:scale-110 transition-all ease-out'>
          <Image
            src={WhatsappIconOutline}
            alt='whatsapp'
            width={40}
            height={40}
          />
        </div>
      </Link>
    </div>
  );
}
