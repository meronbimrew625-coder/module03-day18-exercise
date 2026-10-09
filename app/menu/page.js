import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <h2>Welcome to Addis Eats</h2>
          <p>Explore Ethiopian dishes, add them to your cart, and place an order.</p>
          <p>
            <Link href="/menu">View menu</Link>
          </p>
        </div>
        <Image
          src="/images/hero-addis-eats.png"
          alt="Illustrated Ethiopian food spread for Addis Eats"
          width={1600}
          height={900}
          priority
          sizes="(max-width: 1100px) 100vw, 1100px"
        />
      </section>
      <p>
        <Link href="/orders">View orders</Link>
      </p>
    </main>
  );
}
