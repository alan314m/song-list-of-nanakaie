import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";

import { ToastContainer } from "react-toastify";
// <div style={{ textAlign: 'center', padding: '10px'}}>测试环境, 请尽量使用二级域名<Link href="https://www.7he.live" passHref><a target="_blank">https://7he.live</a></Link>访问, 谢谢!</div>
function MyApp({ Component, pageProps }) {
  return (
    <>
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
