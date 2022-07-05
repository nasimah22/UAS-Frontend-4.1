import { useRouter } from "next/router";
import { useState } from "react"

const SepatuByMerk = () =>{
    const [merk, setMerk] = useState('')
    const router = useRouter()
    const getSptByMerk = (e) =>{
        e.preventDefault();
        router.push({
            pathname : 'datasepatu',
            query : {'merk' : merk}
        })
    }
    return(
        <div className="container">
            <form onSubmit={getSptByMerk}>
                <div className="row">
                    <div className="col-8"></div>
                    <div className="col d-flex flex-reverse">
                        <input type="text"
                            className="from-control"
                            placeholder="Cari by Merk"
                            value={merk}
                            onChange={(e)=>setMerk(e.target.value)}
                        />
                        <input type="submit" value="Cari"
                                className="btn btn-success ms-2 fs-6" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SepatuByMerk;