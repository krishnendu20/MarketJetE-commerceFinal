import MyHeader from "./header";
import Link from "next/link"
export default function MyLayout(props)  
{
    return(
        <>
        <MyHeader title={props.title} />
        <nav>
        <div style={{ position: "absolute", top: 0, width:"100%" }}>
            <div class ="bg-slate-600 h-10">
        <Link href="/" class="px-6 py-3 bg-slate-600 "> Home</Link>
        <Link href="/contact" class="px-6 py-3 bg-slate-600 "> Contact Us</Link>
        <Link href="/about" class="px-6 py-3 bg-slate-600 "> About Us</Link>
    </div>
    </div>
        </nav>
        <main>

        </main>
        <div style={{ position: "absolute", bottom: -100, width:"100%" }}>
            Made By Dipto @copyright</div>
        </>
    )
}