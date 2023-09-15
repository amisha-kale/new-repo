
import Axios from 'axios';
import { ListMovies } from 'containers/List/ListMovies';
import React,{useEffect, useState} from 'react'




const List = () => {

    const [movieList, setMovieList] = useState([])
    

    useEffect(() => {
       
        fetchMovieList();
    },[]);

    const fetchMovieList = async () => {
        Axios({
          method: "post",
          url: "https://ba01-2405-201-d01a-3101-9d42-b897-b3cb-77a2.ngrok-free.app/api/MovieList",
          data: {
            userId: `${localStorage.getItem("userId")}`,
          },
        }).then((res) => {
            console.log(res.data.moviesId);
            setMovieList(res.data.moviesId)
        })
    }

    return (
        <div>
            {
                movieList.map((item) => (
                    <div>
                        <h1>{item}</h1>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default List