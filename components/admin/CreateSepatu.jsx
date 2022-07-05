import { useState } from "react"
import axios from "axios"

const CreateSepatu = () => {
    const [merk, setMerk] = useState('');
    const [ukuran, setUkuran] = useState('');
    const [warna, setWarna] = useState('');
    const [harga, setHarga] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            axios
                .post("http://localhost:5000/sepatu", {
                    merk,
                    ukuran,
                    warna,
                    harga,
                })
                .then(response => {
                    console.log(response);
                });
            alert("Penambahan Data sukses")
           clearInput()
        } catch (e) {
            throw Error(e.message)
        }
    }
    const clearInput = () => {
        setMerk('')
        setUkuran('')
        setWarna('')
        setHarga('')
    }

    return(
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h1 className="w-75 text-center">Input Sepatu</h1>
                    <div className="w-75">
                        <div className="form-floating">
                            <input
                                className="form-control mb-2"
                                id="merk"
                                type="text"
                                placeholder="merk"
                                value={merk}
                                onChange={(e) => setMerk(e.target.value)}
                            />
                            <label htmlFor="nim">Merk</label>
                        </div>

                        <div className="form-floating">
                        <input
                                className="form-control mb-2"
                                id="ukuran"
                                type="text"
                                placeholder="ukuran"
                                value={ukuran}
                                onChange={(e) => setUkuran(e.target.value)}
                            />
                            <label htmlFor="nama">Ukuran</label>
                        </div>

                        <div className="form-floating">
                        <input
                                className="form-control mb-2"
                                id="warna"
                                type="text"
                                placeholder="warna"
                                value={warna}
                                onChange={(e) => setWarna(e.target.value)}
                            />
                            <label htmlFor="angkatan">Warna</label>
                        </div>

                        <div className="form-floating">
                        <input
                                className="form-control mb-2"
                                id="harga"
                                type="text"
                                placeholder="harga"
                                value={harga}
                                onChange={(e) => setHarga(e.target.value)}
                            />
                            <label htmlFor="prodi">Harga</label>
                        </div>
                    </div>
                    <div className="w-75 d-flex flex-row-revverse">
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateSepatu;