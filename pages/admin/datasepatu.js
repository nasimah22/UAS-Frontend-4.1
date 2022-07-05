import LayoutAdmin from "../../components/admin/LayoutAdmin"
import SepatuByMerk from "../../components/admin/SepatuByMerk"
import DataSepatu from "../../components/admin/DataSepatu"

const datasepatu = ({data}) =>{
        {Array.isArray(data) ? data : data = [data]}
    return(
        <LayoutAdmin>
            <SepatuByMerk/>
            <DataSepatu data = {data}/>
        </LayoutAdmin>
    )
}

export async function getServerSideProps({query}){
    const merk = query.merk;
    let url = `http://localhost:5000/sepatu`
    if (typeof merk === 'string'){
        url = `http://localhost:5000/sepatu/${merk}`
    }
    //fetch data
    const res = await fetch(url)
    const data = await res.json()
    return {props : {data}}
}

export default datasepatu;