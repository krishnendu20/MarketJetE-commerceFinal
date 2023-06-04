import Head from "next/head";

export default function MyHeader(props) {
  
    return(
        <>
        <Head>
            <title>{props.title}</title>
            <img class="w-10 h-12 mr-2 flex flex-col bg-slate-900 flex-grow w-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
        </Head>
        </>
    )
}