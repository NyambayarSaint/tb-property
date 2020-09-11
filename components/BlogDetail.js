import React from 'react';
import styled from 'styled-components';
import minimize from '@/miscs/minimize';
import LinedText from '@/shared/LinedText';
import formatDate from '@/miscs/formatDate';
import {Parser} from 'html-to-react';
import months from "@/miscs/months";
import decrease from './miscs/decrease';
import Link from 'next/link';

const test = `
<section class="fdb-block">
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h1>Features</h1>
      </div>
    </div>

    <div class="row text-left justify-content-center pt-5">
      <div class="col-12 col-md-6 col-lg-5 m-auto">
        <h3><strong>Feature One</strong></h3>

        <p class="lead">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-md-0">
        <h3><strong>Feature Two</strong></h3>

        <p class="lead">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line.</p>
      </div>
    </div>

    <div class="row text-left justify-content-center pt-lg-4">
      <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0">
        <h3><strong>Feature Three</strong></h3>

        <p class="lead">On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times.</p>
      </div>
      <div class="col-12 col-md-6 col-lg-5 m-auto pt-3 pt-lg-0">
        <h3><strong>Feature Four</strong></h3>

        <p class="lead">A small river named Duden flows by their place far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
      </div>
    </div>
  </div>
</section>
`

const BlogDetail = ({data, other}) => {
    const ContentParser = new Parser();
    const ParsedContent = ContentParser.parse(data.Content);
    console.log(other);
    return (
        <Container className="container">
            <div className="row">
                <div className="col-md-9 left">
                    <img className="mainimg" src={minimize(data.Thumb[0], true, true)} />
                    <LinedText className="linedtext" red>REAL ESTATE</LinedText>
                    <h1 className="maintitle">{data.Title}</h1>
                    <div className="datecon">
                        <span>{formatDate(data.createdAt)} / By {data.created_by.firstname+' '+data.created_by.lastname}</span>
                    </div>
                    <div className="content sun-editor-editable sun-editor">
                        {ParsedContent}
                    </div>
                    <div className="additionally row">
                        {ContentParser.parse(test)}
                    </div>
                </div>
                <div className="col-md-3 right">
                    {other.map((el,i)=>{
                        let date = new Date(el.createdAt)
                        return(
                            <div className="box" key={'box'+i}>
                                <Link href={'/news/'+el.Slug}>
                                    <a>
                                        <div className="img" style={{backgroundImage: `url(${minimize(el.Thumb[0], true)})`}}>
                                            <div className="date">
                                                <p>{date.getDate()}</p>
                                                <small>{months[date.getMonth()]}</small>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                                <Link href={'/news/'+el.Slug}><a><h5>{decrease(el.Title, 45)}...</h5></a></Link>
                                <Link href={'/news/'+el.Slug}><a><p>{decrease(el.Content, 160)}...</p></a></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Container>
    );
};

export default BlogDetail;

const Container = styled.div `
    padding-top:10vh;
    padding-bottom:10vh;
    .left{
        .mainimg{
            width:100%;
            margin-bottom:30px;
        }
        .linedtext{
            margin-bottom:15px;
        }
        .maintitle{
            margin-bottom:15px;
        }
        .datecon{
            font-weight:400;
        }
        .content{
            margin-top:50px;
        }
    }
    .right{
        .box{
            overflow:hidden;
            margin-bottom:30px;
            .img{
                height:160px;
                background-size: auto 100%;
                background-position:center center;
                transition:0.5s ease;
                &:hover{
                    background-size: auto 105%;
                    cursor:pointer;
                }
                .date{
                    margin-left:15px;
                    background:white;
                    width:fit-content;
                    width:-moz-fit-content;
                    padding:5px 15px;
                    text-align:center;
                    p {
                    margin-bottom: 0px;
                    font-weight: 600;
                    font-size: ${(props) => props.theme.fontSize2};
                    opacity: 0.9;
                    }
                    small {
                        margin-top: -5px;
                        display: block;
                    }
                }
            }
            h5{
                margin-top:10px;
            }
        }           
    }
`