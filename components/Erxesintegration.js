import React, { useEffect } from 'react';
import { Parser } from 'html-to-react';
import styled from 'styled-components';

const Erxesknowledgebase = ({ data }) => {
    const ContentParser = new Parser();

    useEffect(() => {
        window.erxesSettings = {
            booking: {
                integration_id: data.integration_id,
            },
        };
        var script = document.createElement('script');
        script.src = "https://demo.erxes.io/widgets/build/bookingWidget.bundle.js";
        script.async = true;
        var entry = document.getElementsByTagName('script')[0];
        entry.parentNode.insertBefore(script, entry);
    }, [])

    return (
        <Container>
            <div className={`${data.container && 'container'}`}>
                {ContentParser.parse(data.ErxesDiv)}
            </div>
        </Container>
    );
};

export default Erxesknowledgebase;

const Container = styled.div`
    padding-top:5vh;
    padding-bottom:5vh;
`
