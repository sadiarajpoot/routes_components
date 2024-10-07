import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/career'>Career</Link></li>
        <li><Link href='/contact-us'>CONTACT US</Link></li>
      </ul>
    </div>
  );
}
