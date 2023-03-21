import React from "react";
import { Link } from "react-router-dom";

// router dom에서 링크를 import시켜야한다.

// 외부에서 호출해 결과값을 리턴주기 위해서는 export default를 주어야 한다.
export default function Header(){
    return (
        <div className='header-container'>
            <div className='header-wrap'>
                <div className="header-left-wrap">
                    <a href="/">
                    <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                        style={{ width:154, height:"20px" }}
                        alt="로고"
                    /> 
                    </a>
                    {/*위, 아래에서 링크처리는 <Link to="/"></Link>이지만 오류가 생겨서 a처리함*/}


                    <ul>
                        <li>
                            <a href="/movies">
                            영화
                            </a>
                        </li>

                        <li>
                            <a href="/Tv">
                            TV프로그램
                            </a>
                        </li>

                        <li>인물</li>

                    </ul>
                
                </div>



            </div>
            
        </div>
    );
    // JSX 태그 엘리멘트(XML) 안에 style 적용은 HTML과 약간 다르다.
    // 외부에서 css를 만들어 불러올 수 있고 바로 적용도 가능하다.
}
