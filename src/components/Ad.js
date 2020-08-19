import React from 'react';
import AdSense from 'react-adsense';

//https://www.npmjs.com/package/react-adsense

export default function AdSense({
    client,
    slot,
}){
    return(
        <div>
            <AdSense.Google
                client={client}
                slot={slot}
                style={{ display: 'block' }}
                format='auto'
                responsive='true'
                layoutKey='-gw-1+2a-9x+5c'
                />
            {/*
            // ads with no set-up
            <AdSense.Google
            client='ca-pub-7292810486004926'
            slot='7806394673'
            />
            
            // ads with custom format
            <AdSense.Google
            client='ca-pub-7292810486004926'
            slot='7806394673'
            style={{ width: 500, height: 300, float: 'left' }}
            format=''
            />
            
            // responsive and native ads
            <AdSense.Google
            client='ca-pub-7292810486004926'
            slot='7806394673'
            style={{ display: 'block' }}
            layout='in-article'
            format='fluid'
            />
            
            // auto full width responsive ads
            <AdSense.Google
            client='ca-pub-7292810486004926'
            slot='7806394673'
            style={{ display: 'block' }}
            format='auto'
            responsive='true'
            layoutKey='-gw-1+2a-9x+5c'
            /> */}
        </div>
    );
}