import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <h1><Link href="/">Next.js</Link></h1>
      <nav>
        <ul>
          <li><Link href="/movie">영화</Link></li>
          <li><Link href="/memo">메모</Link></li>
        </ul>
      </nav>
    </header>
  )
}
