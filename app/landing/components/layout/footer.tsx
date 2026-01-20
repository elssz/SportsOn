import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white">
      <div className="container mx-auto flex justify-between pt-14 pb-24">
        <div className="w-105">
          <Image
            src="/images/logo-footer.svg"
            alt="Logo Footer"
            width={187}
            height={44}
          />
          <p className="text-white mt-8">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
        </div>
        <div className="w-105 grid grid-cols-2 text-white">
          <div className="flex gap-7 flex-col">
            <Link href="/#">Home</Link>
            <Link href="/#">Categories</Link>
            <Link href="/#">Explore Products</Link>
            <Link href="/#">About Us</Link>
          </div>
          <div className="flex gap-7 flex-col">
            <Link href="/#">Instagram</Link>
            <Link href="/#">Facebook</Link>
            <Link href="/#">TikTok</Link>
            <Link href="/#">Youtube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/15">
        <div className="mx-auto py-6 container flex justify-between">
          <div>SportsOn © 2025 All Rights Reserverd.</div>
          <div className="grid grid-cols-2 w-105">
            <Link href="/#">Privacy Policy</Link>
            <Link href="/#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
