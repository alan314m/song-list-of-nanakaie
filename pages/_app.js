import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";
import Head from "next/head";
import { Router } from 'next/router';

import { ToastContainer } from "react-toastify";
// <div style={{ textAlign: 'center', padding: '10px'}}>测试环境, 请尽量使用二级域名<Link href="https://www.7he.live" passHref><a target="_blank">https://7he.live</a></Link>访问, 谢谢!</div>
function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeComplete', (url) => {
    try{
      window._hmt.push(['_trackPageview', url]);
    }catch (e){}
  })

  const getAnalyticsTag = () => {
    return {
      __html: `
      var _hmt = _hmt || [];
      // (function() {
      //   var hm = document.createElement("script");
      //   hm.src = "https://hm.baidu.com/hm.js?5ed1ab746e3a8444d6e1f92b1905cfcb";
      //   var s = document.getElementsByTagName("script")[0]; 
      //   s.parentNode.insertBefore(hm, s);
      // })();
      `,
    };
  };

  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={getAnalyticsTag()} />
      </Head>
      <Component {...pageProps} />
      <ToastContainer
        theme="light"
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </>
  );
}

export default MyApp;
