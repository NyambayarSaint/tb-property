import Head from 'next/head';
import React from 'react';
import {MenuContext} from '@/miscs/ContextMenuProvider'
import { useContext } from "react";
import { useRouter } from 'next/router';

const PreSeo = ({seo}) => {

    const Router = useRouter();
    const ctx = useContext(MenuContext);

    if(seo) {
        const {title, description, thumb, article} = seo
        return (
            <Head>
                <title>{title ? title + " - " + ctx.name : ctx.name}</title>
                <meta property="og:title" content={title ? title + " - " + ctx.name : ctx.name} />
                <meta name="description" content={description ? description : ctx.description}/>
                <meta property="og:description" content={description ? description : ctx.description} />
                <meta property="og:image" content={thumb ? thumb : ctx.serverUrl+'/uploads/1_min_0a6f9c8f3f.jpg'} />
                <meta property="og:url" content={ctx.frontUrl + Router.asPath} />
                {article && <meta property="og:type" content="article" />}
            </Head>
        );
    }
    return(
        <Head>
            <title>{ctx.name}</title>
            <meta property="og:title" content={ctx.name} />
            <meta name="description" content={ctx.description}/>
            <meta property="og:description" content={ctx.description} />
            <meta property="og:image" content={ctx.serverUrl+'/uploads/1_min_0a6f9c8f3f.jpg'} />
            <meta property="og:url" content={ctx.frontUrl + Router.asPath} />
        </Head>
    )
    
};

export default PreSeo;