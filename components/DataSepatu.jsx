
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
                        </tr>
                    ))}
                </tbody>
           </table>
       </div>
    )
}

export default DataSepatu;