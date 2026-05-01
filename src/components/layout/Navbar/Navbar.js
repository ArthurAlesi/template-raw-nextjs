import Link from "next/link";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/account">Account</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/settings">Settings</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/list">List</Link></li>
      </ul>
    </nav>
  );
}