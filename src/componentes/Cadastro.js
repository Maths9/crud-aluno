import React, { useState, useEffect } from 'react'

import fireDb from '../database/firebase'

const Cadastro = () => {

    const [dadosAlunos, setDadosAlunos] = useState({})

    useEffect(() => {
        fireDb.child('cadastros').on('value', dbPhoto => {
            if (dbPhoto.val() != null) {
                setDadosAlunos({
                    ...dbPhoto.val()
                })
            } else {
                setDadosAlunos({})
            }
        })
    }, [])

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">NOTAS 2021</h1>
                    <p className="lead"> TURMA DE MATEMÁTICA</p>
                </div>
            </div>

            <div className="row">

                

                <div className="col-12">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                        
                            <tr>
                                <td>Nome</td>
                                <td>NotaUm</td>
                                <td>NotaDois</td>
                                <td>NotaTres</td>
                                <td>NotaQuatro</td>
                                
                                
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Object.keys(dadosAlunos).map(id => {
                                    return <tr key={id}>

                                        

                                        <td> {dadosAlunos[id].Nome}</td>
                                        <td> {dadosAlunos[id].NotaUm}</td>
                                        <td> {dadosAlunos[id].NotaDois}</td>
                                        <td> {dadosAlunos[id].NotaTres}</td>
                                        <td> {dadosAlunos[id].NotaQuatro}</td>

                                        

                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Cadastro