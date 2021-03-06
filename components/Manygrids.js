import React from 'react';
import styled from 'styled-components';
import {BsHouseDoor} from 'react-icons/bs';
import minimize from './miscs/minimize';

const Manygrids = ({data}) => {
    return (
        <Container>
            {data.SingleGrids.map((el,i)=>{
                return(
                    <div className="box" key={'singlegrids'+i}>
                        <img src={minimize(el.Image, 'small')}/>
                        {el.Title && el.Title.includes("|") ? <SemiBreak data={el.Title}/> : <p>{el.Title}</p>}
                        <h3>{el.Caption}</h3>
                    </div>
                )
            })}
        </Container>
    );
};

export default Manygrids;

const Container = styled.div `
    padding-top:8vh;
    padding-bottom:8vh;
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .box{
        text-align:center;
        width:250px;
        margin-top:15px;
        margin-bottom:15px;
        img{
            height:50px;
            width:50px;
            margin-bottom:15px;
            opacity:0.9;
        }
        p{
            margin-bottom:0px;
            strong{
                font-weight:400;
                color:${props=>props.theme.mainRed};
            }
        }
        h3{
            font-weight:400;
            letter-spacing:-2px;
            opacity:0.9;
        }
    }
    @media only screen and (max-width: 768px){
        h3{
            font-size: ${({theme})=>theme.fontSizeBigM};
        }
        .box{
            height:auto !important;
        }
    }
`
const SemiBreak = ({data}) => {
    let prepare = data.split("|");
    return <p>{prepare[0]} <strong>{prepare[1]}</strong></p>
}