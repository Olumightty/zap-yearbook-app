'use client'
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';

interface FlipCardProps {
    imageUrl: string,
    firstName: string,
    lastName: string
    nickname: string
    bibleVerse: string
    wisdomQuote: string
    socials:{
        instagram: string,
        x: string 
        linkedin: string
        github: string
    }
}
const FlipCard = (props: FlipCardProps) => {
  const cardRef = useRef(null);
  const frontRef = useRef(null);
  const backRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const { contextSafe } = useGSAP()

  // Initialize GSAP animations
  useEffect(() => {
    // Set initial states
    gsap.set(backRef.current, { rotationY: -180 });
    gsap.set([frontRef.current, backRef.current], { backfaceVisibility: "hidden" });
  }, []);

  const handleFlip = contextSafe(() => {
    setIsFlipped(!isFlipped);
    
    gsap.to(cardRef.current, {
      backgroundColor: isFlipped ? "#000" : "#E60012",
      duration: 0.8,
      ease: "power2.inOut"
    })
    // Front card animation
    gsap.to(frontRef.current, {
      rotationY: isFlipped ? 0 : 180,
      duration: 0.8,
      ease: "power2.inOut"
    });
    
    // Back card animation
    gsap.to(backRef.current, {
      rotationY: isFlipped ? -180 : 0,
      duration: 0.8,
      ease: "power2.inOut"
    });
  });

  return (
    <div 
      ref={cardRef} 
      className="bg-black p-5 w-fit rounded-xl shadow-2xl cursor-pointer perspective-1000" 
      onClick={handleFlip}
      style={{ perspective: "1000px" }}
    >
      <div style={{ transformStyle: "preserve-3d", position: "relative" }}>
        {/* Front of card */}
        <div 
          ref={frontRef} 
          className="relative"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-[245px] h-[281px] bg-white">
            <Image src={props.imageUrl} width={245} height={281} alt={props.lastName} />
          </div>
          <header className="mt-2">
            <h2 className="text-lg font-extrabold text-white">{props.firstName}</h2>
            <h2 className="text-lg font-extrabold text-white">{props.lastName}</h2>
          </header>
        </div>
        
        {/* Back of card with person info */}
        <div 
          ref={backRef} 
          className="absolute top-0 left-0 w-full h-full rounded-xl flex flex-col justify-between"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)"
          }}
        >
          <div>
            <p className="text-white mb-2"><span className="font-bold">AKA</span> {props.nickname || 'N/A'}</p>
            <p className="text-white mb-2"><span className="font-bold">Bible Verse:</span> {props.bibleVerse || 'N/A'}</p>
            <p className="text-white mb-2"><span className="font-bold">Wise Saying:</span> {props.wisdomQuote || 'N/A'}</p>
          </div>
          <div className=' flex items-center gap-5'>
            <Link href={'#'}><Image width={24} height={24} src="/instagram.svg" alt="instagram" /></Link>
            <Link href={'#'}><Image width={24} height={24} src="/x.svg" alt="x" /></Link>
            <Link href={'#'}><Image width={24} height={24} src="/linkedin.svg" alt="linkedin" /></Link>
            <Link href={'#'}><Image width={24} height={24} src="/github.svg" alt="github" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;