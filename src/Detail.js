import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components'
import './Detail.scss'


let 박스 = styled.div`
    padding : 20px;

`;
    
let 제목 = styled.div`
    font-size : 25px;
    color : ${props => props.색상}
`;

    

function Detail(props){


    
    useEffect(()=>{
        // 2초 후에 저거 alert 창을 안보이게 해주셈
        let 타이머 = setTimeout(()=>{ alert변경(false)}, 2000);
        return ()=>{ clearTimeout(타이머)}
        },[]);
            // return function 어쩌구(){ 실행한코드~~} 사라질 때 실행됨
    

    let [alert, alert변경] = useState(true);

    let {id} = useParams();
    let findshoes = props.shoes.find(function(shoes){
        return shoes.id == id
    })

    let [inputData, inputData변경] = useState('');

    let history = useHistory();
    return(     
        
        <div className="container">
            <박스>
                <제목 className="red">Detail</제목>
            </박스>

            { inputData }
            <input onChange={(e)=>{inputData변경(e.target.value)} }/>

            {
                alert === true
                ?(<div className='my-alert2'>
                    <p>재고가 얼마 남지 않았습니다.</p>
                </div>)
                :null
            }
            

            <div className="row">
                <div className="col-md-6">

                    
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{findshoes.title}</h4>
                    <p>{findshoes.content}</p>
                    <p>{findshoes.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                    <button className="btn btn-danger" onClick={()=>{
                        history.push('/');
                    }}>뒤로가기</button> 
                </div>
            </div>
        </div> 
    )
  }

  export default Detail;