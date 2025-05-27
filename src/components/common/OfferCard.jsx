'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';


// const offerData = {
//   _id: '68359512bf7f1cba82669d63',
//   title: 'Special Piercing Offer!',
//   content: [
//     `<h2 style="color:white">Limited Time Only!</h2><p style="color:white"><span style="background-color: rgba(230,0,0,0.5); padding: 4px;">Get exclusive discounts on all piercings this week. Walk-in welcome!</span></p>`,
//   ],
//   imageUrl:
//     '1748342034685-521710209-Close-up, super realistic image of an ear piercing. Client\'s earlobe in focus, piercer\'s gloved hands visible, sterile needle. Smooth color gradient transitions. Adorable and charming features.jpg',
//   redirectUrl: '/',
//   displayOn: ['/'],
//   isActive: true,
// };

export default function OfferCard({offerData}) {
  const pathname = usePathname();

  if (!offerData?.isActive || !offerData?.displayOn.includes(pathname)) {
    return null;
  }


  return (
    <section
      className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-xl my-8"
    >
      <Image
        src={`/hero.jpg`}
        alt="Special Offer Background"
        fill
        className="object-cover object-center brightness-75"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-start text-white text-center px-4 pt-10 z-10">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">{offerData?.title}</h1>

        {/* Content Box */}
        <div className="bg-black/50 backdrop-blur-sm mt-6 p-4 md:p-6 rounded-lg max-w-2xl w-full">
               <div
        className="prose prose-lg prose-gray max-w-none blog-content"
        dangerouslySetInnerHTML={{ __html: offerData?.content }}
      />

         
          {offerData?.redirectUrl && (
            <Link
              href={offerData?.redirectUrl}
              className={(
                'mt-4 inline-block px-6 py-3 rounded-lg font-medium transition-all border-primary border hover:bg-primary hover:text-white text-primary'
              )}
            >
              Check Out
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
