import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';
import axios from "axios";

const UpdateSepatu = () => {
    //deklarasi state
    const [_merk, setMerk] = useState('');
    const [_ukuran, setUkuran] = useState('');
    const [_warna, setWarna] = useState('');
    const [_harga, setHarga] = useState('');

    //mengambil data yang dikirim melalui router
    const router = useRouter();
    const { merk, ukuran, warna, harga } = router.query;

    useEffect(() =>{
        if (typeof merk == 'string') {
            setMerk(merk);
        }
        if (typeof ukuran == 'string') {
            setUkuran(ukuran)
        }
        if (typeof warna == 'string') {
            setWarna(warna)
        }
        if (typeof harga == 'string') {
            setHarga(harga)
        }
    }, [merk, ukuran, warna, harga])

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            axios 
                .put('http://localhost:5000/sepatu/${_merk}', {
                    merk: _merk,
                    ukuran: _ukuran,
                    warna: _warna,
                    harga: _harga,
                })
                .then(response => {
                    console.log(response);
                });
            
            alert("Update Data Sukses")
            Router.push('/admin/datasepatu')
        } catch (e) {
            console.log({message: e.message});
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 font-blod text-center mb-3">
                        Edit Data Sepatu
                    </h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="merk"
                                type="text"
                                placeholder="merk"
                                value={_merk}
                                onChange={(e) => setMerk(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="ukuran"
                                type="text"
                                placeholder="ukuran"
                                value={_ukuran}
                                onChange={(e) => setUkuran(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="warna"
                                type="text"
                                placeholder="warna"
                                value={_warna}
                                onChange={(e) => setWarna(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="harga"
                                type="text"
                                placeholder="harga"
                                value={_harga}
                                onChange={(e) => setHarga(e.target.value)}    
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-row-reverse w-75">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
    
}

export default UpdateSepatu;