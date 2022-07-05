import Link from "next/link";
const DataSepatu = ({data}) =>{
    return(
       <div className='container'>
           <h3>Data Sepatu</h3>
           <table className = "table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Merk</th>
                        <th>Ukuran</th>
                        <th>Warna</th>
                        <th>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((spt,idx)=>(
                        <tr key = {idx}>
                            <td>{spt.merk}</td>
                            <td>{spt.ukuran}</td>
                            <td>{spt.warna}</td>
                            <td>{spt.harga}</td>
                            <td>
                                <div className="d-flex justify-content-between">
                                    <Link href={`/admin/updatesepatu?merk=${spt.merk}
                                        &ukuran=${spt.ukuran}&warna=${spt.warna}
                                        &harga=${spt.harga}`}
                                    >
                                        <a>Edit</a>
                                    </Link>
                                </div>
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
           </table>
       </div>
    )
}

export default DataSepatu;