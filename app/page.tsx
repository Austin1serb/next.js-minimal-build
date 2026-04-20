import Image from "next/image";

export default function Home() {
	return (
		<main
			style={{
				padding: 24,
				maxWidth: 1200,
				margin: "0 auto",
			}}
		>
			<h1 style={{ marginBottom: 12 }}>next/image stale local image repro</h1>

			<p>
				This page renders the same local file from <code>public/image.jpg</code> two ways:
			</p>

			<ul style={{ paddingLeft: 20 }}>
				<li>
					<code>next/image</code>
				</li>
				<li>
					plain HTML <code>&lt;img&gt;</code>
				</li>
			</ul>

			<ol style={{ paddingLeft: 20, marginBottom: 24 }}>
				<li>
					Run <code>npm install</code>
				</li>
				<li>
					Run <code>npm run dev</code>
				</li>
				<li>
					Open <code>http://localhost:3000</code>
				</li>
				<li>
					Edit <code>public/image.jpg</code> without changing the filename, for example crop it or apply a visible filter
				</li>
				<li>Refresh the page</li>
			</ol>

			<p style={{ marginBottom: 24 }}>
				Expected: both images update.
				<br />
				Observed: the plain <code>&lt;img&gt;</code> updates, but <code>next/image</code> can stay stale until <code>.next</code> is deleted and the dev server is restarted.
			</p>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
					gap: 20,
					alignItems: "start",
				}}
			>
				<figure
					style={{
						border: "1px solid #ddd",
						padding: 12,
						background: "#fff",
					}}
				>
					<div style={{ width: "100%" }}>
						<Image
							src="/image.jpg"
							alt="Rendered with next/image"
							width={800}
							height={450}
							priority
							style={{
								width: "100%",
								height: "auto",
							}}
						/>
					</div>
					<figcaption
						style={{
							marginTop: 10,
						}}
					>
						<strong>next/image</strong>
						<div>
							This is the version that can remain stale after editing <code>public/image.jpg</code>.
						</div>
					</figcaption>
				</figure>

				<figure
					style={{
						border: "1px solid #ddd",
						padding: 12,
						background: "#fff",
					}}
				>
					<img
						src="/image.jpg"
						alt="Rendered with plain img"
						width={800}
						height={450}
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
					<figcaption
						style={{
							marginTop: 10,
						}}
					>
						<strong>Plain HTML img</strong>
						<div>This version updates normally after editing the same file.</div>
					</figcaption>
				</figure>
			</div>
		</main>
	);
}
