import React from "react";
import { useLocation, useParams } from "react-router-dom";
import {IMG_BASE_URL} from '../conponents/Movie';

export default function MovieDetail(){

    const {title} = useParams();
    const {state} = useLocation();

    return (
        <div className="page-container">
            <div style={{display:'flex'}}>
                <img src={IMG_BASE_URL + state.poster_path}
                alt="영화 포스터 이미지"
                style={{width:"300px",height:"450px"}}
                />
            </div>
            <div style={{fontSize:"32px"}}>{state.title}</div>
            <div style={{fontSize:"32px"}}>{state.vote_average}</div>
            
        </div>
    );
}