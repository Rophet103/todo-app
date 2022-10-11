import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Masonry from '@mui/lab/Masonry';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
// import Link from '@mui/material/Link';
import moment from 'moment';
import Grid from '@mui/material/Grid';


const TodoList = () => {
  const [list, setList] = useState([])
  const getList = async()=>{
  const res =  await axios.get('http://localhost:5000/find')
    setList(res.data)
  }
  useEffect(()=>{
    getList()
  }, [])
  
  
  
  return (

    < div style={{marginTop:'20px'}} >
     
        {list.map(( todo)=>{
      return(
    <Masonry columns={3} spacing={4} >
        
             <Link to={`/taskDetails/${todo._id}`} style={{textDecoration:'none'}} >
          <Card sx={{minWidth:375, minHeight:200, }}>
          <CardContent sx={{flexGrow:1}}>
           <Typography variant='h6' sx={{marginTop:'10px'}}>{todo.taskName}</Typography> 
           <Typography variant='subtitle2' sx={{marginTop:'50px'}}>Description {todo.taskDescription} </Typography>
           <Typography variant='caption text' sx={{marginTop:'15px'}}>Published {moment(todo.createdAt).format("DD MMM hh:mm a")} </Typography>
          </CardContent>
           </Card>
        </Link>
   </Masonry>
         
      )  
    })}
    </div>
  )
}

export default TodoList