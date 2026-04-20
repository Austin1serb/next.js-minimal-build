export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				{children}
				<div style={{ position: "fixed", bottom: 0, left: 20 }}>
					<a href="https://www.serbyte.net/">Seattle Web Design</a>
				</div>
			</body>
		</html>
	);
}
