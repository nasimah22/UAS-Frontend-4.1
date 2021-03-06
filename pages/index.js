import Head from "next/head";
import Image from "next/image";
import Nav from "../components/user/Nav";
import Script from "next/script";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const sepatu = [
                      {merk : 'Vans', ukuran : '37'},
                      {merk : 'Converse', ukuran : '38'},
                      {merk : 'Fila', ukuran: '39'}
                    ];
  const router = useRouter()

  const sendParamRouter = (merk) => {
    router.push (`/user/${merk}`)
  }
  return (
    <div className="container mt-4">
      <Nav />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Hallo Guys...</h3>
        <h3>Daftar Macam Sepatu</h3>
        <ul>
          {sepatu.map ((spt,idx)=>(
            <>
            <li key = {idx}>
              <Link href={`/user/${spt.merk}`}>
              <a>{spt.merk}</a>
              </Link>
              <p>{spt.ukuran}</p>
              <button className="btn btn-primary"
                      onClick={(e)=>sendParamRouter(spt.merk)}>
                        Cek Harga
              </button> <br></br>
            </li>
            </>
          ))}
        </ul>
      </main>

      <footer>
        <h4>footer</h4>
      </footer>
      <div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></Script>
      </div>
    </div>
  );
}