import { dummy } from "./movieDummy";
import React from "react";
import Movie from "../conponents/Movie";

export default function Movies(){
    return (
        <div>
            <div className="app-container">

                {dummy.results.map((item)=>{
                    
                    return (
                        <Movie
                        title = {item.title}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}

                        />
                    );
                })}
            </div>
        </div>
    );
}