import React from 'react'
import "./CreateTodo.css"
import { useFormik } from 'formik'
import Button from '@mui/material/Button';


const CreateTodo = () => {

    const formik = useFormik({
        initialValues: {
            name:'',
            description:''
        },
        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <div>
        <form onSubmit={formik.handleSubmit} className='form'>
            <label>Task Name:  </label>
            <input type='text' name='name'   onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.name}></input>

            <label>Task Description:  </label>
            <input type='text' name='description'  onChange={formik.handleChange} onBlur={formik.handleBlur} values={formik.values.description}></input>
            <Button type='submit'>Add Task</Button>
        </form>
    </div>
  )
}

export default CreateTodo