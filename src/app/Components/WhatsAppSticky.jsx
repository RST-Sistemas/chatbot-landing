import Image from "next/image";
import { WhatsappIconOutline } from "@/assets/svg";
import Link from "next/link";

export default function WhatsAppSticky() {
  return (
    <div className='sticky bottom-0 z-30'>
      <Link href={"https://wa.me/2615086780"} target='_blank'>
        <div className='absolute bottom-5 right-32 min-[375px]:right-24 min-[425px]:right-[74px] min-[480px]:right-[35px] min-[520px]:right-[15px] sm:right-5 flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] hover:opacity-90 hover:scale-110 transition-all ease-out'>
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
