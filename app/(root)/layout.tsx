import Sidebar from "@/components/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggegIn = { firstName: 'Sunflower', lastName: 'Sunflower'};


    return (
        <main className="flex h-screen w-full font-inter">
            <Sidebar user={loggegIn} />
            {children}
        </main>
    );
}
