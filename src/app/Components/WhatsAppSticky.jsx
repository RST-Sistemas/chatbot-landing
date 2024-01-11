import Image from "next/image";
import { WhatsappIconOutline } from "@/assets/svg";
import Link from "next/link";

export default function WhatsAppSticky() {
  return (
    <div className='sticky bottom-0 z-10'>
      <Link href={"https://wa.me/2615086780"} target='_blank'>
        <div className='absolute bottom-5  right-5 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] '>
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
