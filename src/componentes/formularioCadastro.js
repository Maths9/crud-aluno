import React, { useEffect, useState } from 'react';
import fire from '../database/firebase'
const FormularioCadastro = (props) =>{

    

    const CamposIniciaisDeValores = {
        Nome:'',
        NotaUm:'',
        NotaDois:'',
        NotaTres: '',
        NotaQuatro:''
      
    }

    const [ values, setValues] = useState(CamposIniciaisDeValores)
    
    useEffect( () =>{
        if(props.idAtual == ''){
            setValues({
                ...CamposIniciaisDeValores
            })
        }
        else {
            setValues({
                ...props.dadosAlunos[props.idAtual]
            })
        }
    }, [props.idAtual, props.dadosAlunos])

    const manipuladorOnChange = e =>{
        let {name, value} = e.target
        
        setValues({
            ...values,
            [name]:value
        },[])
    }

    const manipuladorFormEnvio = e =>{
        e.preventDefault() 
        console.log(values)
        props.addEedit(values) 
    }

    return (
        <form autoComplete="off" onSubmit={manipuladorFormEnvio}>
            
        </form>

    )
}

export default FormularioCadastro