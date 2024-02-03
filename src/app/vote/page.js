"use client"

import { useState } from 'react'
import Head from "next/head";
import { doLogin } from "@/services/Web3Service";

export default function Vote() {
  const [message, setMessage] = useState();

  function btnLoginClick() {
    doLogin()
      .then(account => setMessage(account))
      .catch(err => {
        console.error(err);
        setMessage(err.message);
      })
  }

  return (
    <>
      <Head>
        <title>Webbb3 | Vote</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row align-items-center">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Webbb3</h1>
          <p className="lead">Votação on-chain do BBB.</p>
        </div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-body-secondary">&copy; 2024 Webbb3, Inc</p>
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <a href="/" className="nav-link px-2 text-body-secondary">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link px-2 text-body-secondary">About</a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}