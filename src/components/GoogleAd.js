import React, { useEffect } from 'react';

//https://www.npmjs.com/package/react-adsense

export default function GoogleAd({
    client,
    slot,
}){
    // const {title} = title;
    // console.log(client, slot, title)
    useEffect(()=>{
        // console.log('loading Ad code');
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    },[]);

    // console.log('rendering ad');
    // return <div></div>;
    
    return(
        <div key={slot} style={{
            // height: "90px",
            // width: "728"
            textAlign: "center",
            marginTop: "64px",
            marginBottom: "64px",
        }} className="google_adsense">
            <ins className="adsbygoogle google_adsense"
                style={{display:"inline-block"}}
                data-ad-client={client}
                data-ad-slot={slot}
                data-ad-format="auto">
            </ins>
        </div>
    );
    
}