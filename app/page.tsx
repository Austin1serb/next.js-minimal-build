import Image from 'next/image'

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>next/image stale local image repro</h1>
      <p>
        This page renders a local image from <code>public/repro.svg</code> with a stable path.
      </p>
      <ol>
        <li>Run <code>npm install</code></li>
        <li>Run <code>npm run dev</code></li>
        <li>Open <code>http://localhost:3000</code></li>
        <li>Edit <code>public/repro.svg</code> without changing the filename, for example change the text or background color</li>
        <li>Refresh the page</li>
      </ol>
      <p>
        Current bug: the old image can continue rendering until the dev server is restarted or <code>.next</code> is deleted.
      </p>
      <div style={{ maxWidth: 900 }}>
        <Image
          src="/repro.svg"
          alt="Reproduction image"
          width={800}
          height={450}
          priority
        />
      </div>
    </main>
  )
}
