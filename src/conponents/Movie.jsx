import React from "react";
import { useNavigate } from "react-router-dom";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280";

// Movie안에 {titele,poster_path,vote_average}를 넣을 수 있고 매개변수 하나로 처리가능(pros)
// pros안에 titele,poster_path,vote_average가 전부 들어간다.
export default function Movie(props){

    const navigate = useNavigate();
    const onClickMovieItem = () =>{
        navigate('/movie/${props.title}' , {state:props,});
    }
    // navigate : 요청페이지


    return (
        <div className="movie-container" onClick={onClickMovieItem}>
           <img src={IMG_BASE_URL+props.poster_path} alt="영화 포스터"></img>
        
            <div className="movie-info">
                <h4>{props.title}</h4>
                <span>{props.vote_average}</span>
            </div>
        </div>

    )
}
