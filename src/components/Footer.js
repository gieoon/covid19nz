import React from 'react';
import {Twitter, GitHub, Database, Mail, Send} from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer() {
  const {t} = useTranslation();

  return (
    <footer>
      <div className="link">
        <a
          href="https://nz.covid19live.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          nz.covid19live
        </a>
      </div>

      <h5>{t("Keeping Kiwi's updated in challenging times")} 
        <br/><br/>
        <span>{t('This website was built based on ')}</span>
        {/* <a target='_blank' href='https://github.com/covid19india/covid19india-react' rel="noopener noreferrer">covid19india.org</a> */}
      <a target='_blank' href='https://covid19india.org' rel="noopener noreferrer">covid19india.org</a>
      </h5>


      <div className="links">
        {/* <a
          href="https://github.com/covid19india/covid19india-react"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>

        <a
          className="api"
          href="https://api.covid19india.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Database />
        </a>

        <a
          href="https://t.me/covid19indiaorg"
          className="telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Send />
        </a> */}

        <a
          href="https://twitter.com/nzcovid19live"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter"
        >
          <Twitter />
        </a>

        <a
          href="mailto:jun.a.kagaya@gmail.com"
          className="mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
        </a>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
