import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <h1>Welcome to Addis Eats</h1>

          <p>
            Discover delicious Ethiopian food and order your favorite dishes
            from Addis Eats.
          </p>

          <Link href="/menu">
            View Menu
          </Link>
        </div>

        <Image
          src="/images/addis-eats.jpeg"
          alt="Addis Eats Ethiopian food"
          width={1600}
          height={900}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </section>

      <section>
        <h2>Explore Addis Eats</h2>

        <p>
          <Link href="/menu">Browse our menu</Link>
        </p>

        <p>
          <Link href="/orders">View your orders</Link>
        </p>
      </section>
    </main>
  );
}