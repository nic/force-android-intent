"use client";
import styles from "./page.module.css";
import {useState} from "react";

export default function Home() {
  const [pkg, setPkg] = useState("br.com.gabba.Caixa"); //discovery: https://login.openbanking.caixa.gov.br/.well-known/assetlinks.json
  const [cefUrl, setcefUrl] = useState("");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Force Intent</h1>
        <input value={pkg} onChange={e => setPkg(e.target.value)}/>
        <input value={cefUrl} onChange={e => setcefUrl(e.target.value)} />
        <div className={styles.ctas}>
          <a
              href={`intent://${cefUrl.replaceAll('https://', '')}#Intent;scheme=https;package=${pkg};end`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
          >
            INTENT CALL
          </a>
          <a
              href={`${cefUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
          >
            DIRECT CALL
          </a>
        </div>
      </main>
    </div>
  );
}
