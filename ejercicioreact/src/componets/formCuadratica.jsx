import { useState } from "react";



function Cuadatrica() {
    const [respuestaMas, setRespuestaMas] = useState(0);
    const [respuestaMenos, setRespuestaMenos] = useState(0);
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);
    const [C, setC] = useState(0);


    return(
        <div className="container">
            <form className="shadow p-3 mb-5 bg-body-tertiary rounded">
                <div className="row">
                <div className="col-lg-8 col-sm-12 mx-auto">
                    <div className="card mb-5">
                        <div className="card-body">
                        <h5 className="card-title">Ingrese los numeros A, B y C</h5>
                            <div className="row">
                                <div className="col-lg-4 col-sm-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">A</span>
                                        <input type="number" className="form-control" placeholder="0" aria-label="Username" aria-describedby="basic-addon1" value={A} onChange={e => setA(parseFloat( e.target.value))}/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">B</span>
                                        <input type="number" className="form-control" placeholder="0" aria-label="Username" aria-describedby="basic-addon1" value={B} onChange={e => setB(parseFloat(e.target.value))}/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">C</span>
                                        <input type="number" className="form-control" placeholder="0" aria-label="Username" aria-describedby="basic-addon1" value={C} onChange={e => setC(parseFloat(e.target.value))}/>
                                    </div>
                                </div>    
                            </div>
                        </div>                                                                
                    </div>
                    <div className="card mb-5">
                        <div className="card-body">
                        <h5 className="card-title">Respuestas</h5>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">+</span>
                                        <input type="number" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={respuestaMas} readOnly/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">-</span>
                                        <input type="number" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={respuestaMenos} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>                                                                
                    </div>
                    <div className="row ">
                        <div className="col-lg-6 col-sm-12 d-grid mx-auto">
                            <button type="button" className="btn btn-success" onClick={() => setRespuestaMas(calcular(A,B))}>Calcular</button>
                        </div>
                    </div> 
                </div>                      
                </div>
                                             
            </form>
        </div>
    );

    function calcular(NumeroA, NumeroB){
        return NumeroA + NumeroB;
    }
}



export default Cuadatrica;

