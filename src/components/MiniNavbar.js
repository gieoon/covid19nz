import React, {useCallback, useState, } from 'react';
import {Link} from 'react-router-dom';
import {useSpring, useTransition, animated} from 'react-spring';
import {useTranslation} from 'react-i18next';
import locales from '../i18n/locales.json';

export default function MiniNavbar({
    showLanguageSwitcher,
    setShowLanguageSwitcher,
}){
    const {i18n, t} = useTranslation();

    const currentLanguage = Object.keys(locales).includes(i18n?.language)
        ? i18n?.language
        : i18n?.options?.fallbackLng[0];
        
    const [expand, setExpand] = useState(false);

    const handleLanguageSwitcher = useCallback(() => {
        if (expand) setExpand(false);
        setShowLanguageSwitcher(!showLanguageSwitcher);
    }, [expand, showLanguageSwitcher, setExpand, setShowLanguageSwitcher]);

    const [spring, set, stop] = useSpring(() => ({opacity: 0}));
    set({opacity: 1});
    stop();

    return(
        <div>
            <animated.div className="Navbar" style={spring}>
                <div className="navbar-left" onClick={handleLanguageSwitcher.bind(this)}>
                    {locales[currentLanguage]}
                </div>

                <div className="navbar-middle">
                    <Link to="/" onClick={setExpand.bind(this, false)}>
                    Covid19 in <span>NZ</span>
                    </Link>
                </div>
            </animated.div>
        </div>
    )
}