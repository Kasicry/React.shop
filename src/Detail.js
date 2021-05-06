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
        let 타이머 = setTimeout(()=>{
            <p>재고가 얼마 남지 않았습니다.</p>}, 2000)

            // return function 어쩌구(){ 실행한코드~~} 사라질 때 실행됨
    })

    let {id} = useParams();
    let findshoes = props.shoes.find(function(shoes){
        return shoes.id == id
    })


    let history = useHistory();
    return(     
        
        <div className="container">
            <박스>
                <제목 className="red">Detail</제목>
            </박스>
            <div className='my-alert2'>
                {/* {{타이머}} */}
            </div>

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