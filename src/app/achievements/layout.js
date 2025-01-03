import HomeBtn from "../components/HomeBtn";
export default function SubPagesLayout({children}) {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center px-8 xs:px-16 py-20 lg:px-32">
        <HomeBtn />
        {children}
    
        </main>
    ); 
}