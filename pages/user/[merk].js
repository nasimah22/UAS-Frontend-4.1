import { useRouter } from "next/router"

const merk = () =>{
    const sepatu = [
            {merk : 'Vans', produk : 'skateboard'},
            {merk : 'Converse', produk : 'brandsupreme'},
            {merk : 'Fila', produk : 'apparel'}
    ];
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const {merk} = router.query;
    const data = sepatu.find(m => m.merk == merk)
    return(
        <>
            <p>Merk : {merk}</p>
            <p>Produk : {data.produk}</p>
        </>
    )
}

export default merk;