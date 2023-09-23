import React, { useState, useEffect } from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Row,
  Col,
  Form,
  Table,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

import MusicList from "../public/music_list_7.json";

import SongDetail from "../components/SongDetail.component";
import MandarinBtn from "../components/MandarinBtn.component";
import PianoBtn from "../components/PianoBtn";
import ChevronSVG from "../components/ChevronSVG.component";
import BiliPlayerModal from "../components/BiliPlayerModal.component";

import imageLoader from "../utils/ImageLoader";

export default function Home() {
  //状态保存: 类别选择, 搜索框, 回到顶部按钮, 移动端自我介绍, 试听窗口
  const [categorySelection, setCategotySelection] = useState({
    lang: "",
    initial: "",
    paid: false,
    remark: "",
  });
  const [searchBox, setSearchBox] = useState("");
  const [showToTopButton, setToTopShowButton] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [modalPlayerShow, setPlayerModalShow] = useState(false);
  const [modalPlayerSongName, setPlayerModalSongName] = useState("");
  const [BVID, setBVID] = useState("");

  useEffect(() => {
    //检测窗口滚动
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setToTopShowButton(true);
      } else {
        setToTopShowButton(false);
      }
    });
  }, []);

  //根据首字母和搜索框进行过滤
  const filteredSongList = MusicList.filter(
    (song) =>
      //搜索框搜歌名
      (song.song_name
        ?.toString()
        .toLowerCase()
        .includes(searchBox ? searchBox.toLowerCase() : "") ||
        //搜索框搜语言
        song.language
          ?.toString()
          .toLowerCase()
          .includes(searchBox ? searchBox.toLowerCase() : "") ||
        //搜索框搜备注
        song.remarks
          ?.toString()
          .toLowerCase()
          .includes(searchBox ? searchBox.toLowerCase() : "") ||
        song.artist
          ?.toString()
          .toLowerCase()
          .includes(searchBox ? searchBox.toLowerCase() : "")) &&
      //语言过滤按钮
      (categorySelection.lang != ""
        ? song.language?.includes(categorySelection.lang)
        : true) &&
      //首字母过滤按钮
      (categorySelection.initial != ""
        ? song.initial?.includes(categorySelection.initial)
        : true) &&
      //首字母过滤按钮
      (categorySelection.remark != ""
        ? song.remarks?.toLowerCase().includes(categorySelection.remark)
        : true) &&
      //付费过滤按钮
      (categorySelection.paid ? song.paid == 1 : true)
  );

  //处理用户复制行为
  const handleClickToCopy = (song) => {
    //复制到剪贴板并发送Toast
    if (song.id.includes("paid")) {
      //付费曲目
      copy("点歌￥" + song.innerText);
      // navigator.clipboard.writeText("点歌 " + songName); //如支持iOS则可替换
      //复制成功反馈
      toast.success(
        `付费曲目"` +
          song.innerText +
          `"成功复制到剪贴板!记得发100的SC或者水晶球哦~`
      );
    } else {
      //免费曲目
      copy("点歌" + song.innerText);
      // navigator.clipboard.writeText("点歌 " + songName); //如支持iOS则可替换
      toast.success(`"` + song.innerText + `"成功复制到剪贴板!`);
    }
  };

  //改变语言过滤状态
  const setLanguageState = (lang) => {
    setCategotySelection({ lang: lang, initial: "", paid: false, remark: "" });
  };

  //改变首字母过滤状态
  const setInitialState = (initial) => {
    setCategotySelection({
      lang: "国语",
      initial: initial,
      paid: false,
      remark: "",
    });
  };

  //改变备注过滤状态
  const setRemarkState = (remark) => {
    setCategotySelection({
      lang: "",
      initial: "",
      paid: false,
      remark: remark,
    });
  };

  //改变收费过滤状态
  const setPaidState = (paid) => {
    setCategotySelection({ lang: "", initial: "", paid: paid, remark: "" });
  };

  //随便听听
  const handleRandomSong = () => {
    //定位歌单
    let parentSelector = document.querySelector(".songList");
    //随机生成序号
    let random = Math.floor(
      1 + Math.random() * parentSelector.childElementCount
    );
    let songName_ = document.querySelector(
      ".songList>tr:nth-child(" + random + ")"
    ).childNodes[1];
    if (!songName_) {
      toast.info("歌单已经没歌了!");
    } else if (songName_.id.includes("paid")) {
      //如付费曲目
      copy("点歌￥" + songName_.innerText);
      toast.success(
        `付费曲目"` +
          songName_.innerText +
          `"成功复制到剪贴板!记得发100的SC或者水晶球哦~`
      );
    } else {
      //如免费曲目
      copy("点歌" + songName_.innerText);
      toast.success(`"` + songName_.innerText + `"成功复制到剪贴板!`);
    }
  };

  //移动端自我介绍off canvas开关
  const handleCloseIntro = () => setShowIntro(false);
  const handleShowIntro = () => setShowIntro(true);

  //滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.outerContainer}>
      <Link href="https://live.bilibili.com/23777594" passHref>
        <a target="_blank" style={{ textDecoration: "none", color: "#1D0C26" }}>
          <div className={styles.goToLiveDiv}>
            <div className={styles.cornerToggle}>
              <Image
                loader={imageLoader}
                src="bilibili_logo_padded.png"
                alt="打开自我介绍"
                width={50}
                height={50}
              />
              <b>
                <i>去直播间</i>
              </b>
            </div>
          </div>
        </a>
      </Link>
      <div className={styles.offCanvasToggleDiv} onClick={handleShowIntro}>
        <div className={styles.cornerToggle}>
          <div style={{ borderRadius: "100% !important" }}>
            <Image
            loader={imageLoader}
            src="tiny_nanakaie.webp"
            alt="打开自我介绍"
            width={50}
            height={50}
            />
          </div>
          <b>
            <i>自我介绍</i>
          </b>
        </div>
      </div>
      <Container>

        <Head>
          <title>七禾いえ的歌单</title>
          <meta
            name="keywords"
            content="七禾いえ,B站,bilibili,哔哩哔哩,电台唱见,歌单"
          />
          <meta name="description" content="七禾いえ的歌单" />

          <meta name="theme-color" content="#151516" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="七禾いえ的歌单" />
          <meta name='format-detection' content='telephone=no' />
          <meta name='msapplication-config' content='/a2hs/browserconfig.xml' />
          <meta name='msapplication-tap-highlight' content='no' />
          <link rel='shortcut icon' type="image/x-icon" sizes="48x48" href='/favicon.ico' />

          <link rel="apple-touch-icon" sizes="57x57" href="/a2hs/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/a2hs/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/a2hs/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/a2hs/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/a2hs/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/a2hs/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/a2hs/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/a2hs/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/a2hs/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192"  href="/a2hs/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/a2hs/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/a2hs/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/a2hs/favicon-16x16.png" />
          <link rel="manifest" href="/a2hs/manifest.json" />
          <meta name="msapplication-TileColor" content="#bfc99a" />
          <meta name="msapplication-TileImage" content="/a2hs/ms-icon-144x144.png" />

          <link rel="apple-touch-startup-image" media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="splash_screens/iPhone_14_Pro_Max_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="splash_screens/iPhone_14_Pro_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="splash_screens/iPhone_11__iPhone_XR_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="splash_screens/12.9__iPad_Pro_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="splash_screens/10.9__iPad_Air_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="splash_screens/10.5__iPad_Air_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="splash_screens/10.2__iPad_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="splash_screens/8.3__iPad_Mini_landscape.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="splash_screens/iPhone_14_Pro_Max_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="splash_screens/iPhone_14_Pro_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="splash_screens/iPhone_11__iPhone_XR_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="splash_screens/12.9__iPad_Pro_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="splash_screens/10.9__iPad_Air_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="splash_screens/10.5__iPad_Air_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="splash_screens/10.2__iPad_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png" />
          <link rel="apple-touch-startup-image" media="screen and (device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="splash_screens/8.3__iPad_Mini_portrait.png" />
        </Head>

        <section className={styles.main}>
          {/** 头像和标题 */}
          <Row>
            <Col className={styles.titleCol}>
              <div className={"pt-3 " + styles.titleBox}>
                <Image
                  loader={imageLoader}
                  className={styles.avatar}
                  src="nanakaie.webp"
                  alt="七宝的头像"
                  width={250}
                  height={250}
                />
                <h1
                  className={"display-6 text-center pt-3 " + styles.grandTitle}
                >
                  七禾いえ
                </h1>
                <h1 className={"display-6 text-center " + styles.grandTitle}>
                  和她拿手的<b>{filteredSongList.length}</b>首歌
                </h1>
                <p className="text-center py-3 mb-xl-5 text-muted">
                  轻点歌名可以复制哦
                </p>
              </div>
              <div className={styles.introBox}>
                <div className={styles.introBoxInnerDiv}>
                  <div className={styles.introTitle}>
                    <h5>七禾的自我介绍</h5>
                    <div className="d-flex">
                      <Link
                        href="https://music.163.com/#/user?id=383239879"
                        passHref
                      >
                        <a
                          target="_blank"
                          style={{
                            marginRight: "1rem",
                            cursor: 'url("/cursor_pointer.png"), pointer',
                          }}
                          title="七禾的网易云音乐主页"
                        >
                          <Image
                            loader={imageLoader}
                            src="163music.ico"
                            alt="七禾的网易云音乐主页链接"
                            width={24}
                            height={24}
                          />
                        </a>
                      </Link>
                      <Link
                        href="https://y.qq.com/n/ryqq/singer/003XSaZ01pyD8x"
                        passHref
                      >
                        <a
                          target="_blank"
                          style={{
                            cursor: 'url("/cursor_pointer.png"), pointer',
                          }}
                          title="七禾的QQ音乐主页"
                        >
                          <Image
                            loader={imageLoader}
                            src="qqmusic.ico"
                            alt="七禾的QQ音乐主页链接"
                            width={24}
                            height={24}
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <p className={styles.introParagraph}>
                    🐏咩，这里是小羊人七禾，是一只来自咩星的绵羊（羊毛虽好但不要薅七禾的羊毛⊙∀⊙！）
                    性别女 没有角但有耳朵 身高160cm 生日6月26日
                  </p>
                  <p className={styles.introParagraph}>
                    🐏直播内容主打吹拉弹唱（吹水·拉胯·弹钢琴·唱歌），歌曲语言包括中日英粤韩。偶尔偶尔打打游戏
                    {/** （血压飙升的那种。目前直播时间是工作日早上9.40晚上20.40和周末早上10.40晚上21.00。 */}
                    
                  </p>
                  <p className={styles.introParagraph}>
                    🐏本直播间郑重承诺点歌不用戴牌子，只需打米，一个喵娘点唱，sc置顶，上船无限点歌还可以指定学歌噢。个别高能歌曲需要水晶球。
                  </p>
                  <p className={styles.introParagraph}>
                    🐏欢迎大家投递自己生活中有趣的小故事或者苦恼的问题到七羊羊的匿名提问箱，
                    累积到一定数量会开启提问箱专场ε(*･ω･)_/ﾟ:･☆
                  </p>
                  <p className={styles.introParagraph}>
                    🐏本羊正经的时候超正经，不正经的时候也超不正经，希望新来的朋友可以多来直播间和我一起玩，我们互相了解！我会做你最可爱的小羊，你也会是我最嫩绿可口的那颗草（bushi！
                  </p>
                  <div className="d-flex flex-nowrap justify-content-evenly">
                    <Link
                      href="https://www.tapechat.net/uu/I5WYEZ/AP42LSVE"
                      passHref
                    >
                      <a target="_blank">
                        <Button
                          className={styles.customRandomButton}
                          style={{ marginTop: 0, border: "2px solid #B4A96D" }}
                        >
                          <img
                            className={styles.biliIcon}
                            src="/tapechat.png"
                            alt="提问箱贴图"
                          />{" "}
                          匿名提问箱 <ChevronSVG />
                        </Button>
                      </a>
                    </Link>
                    <Link
                    href="https://space.bilibili.com/7011134/dynamic"
                    passHref
                  >
                    <a target="_blank">
                      <Button
                        className={styles.customRandomButton}
                        style={{ marginTop: 0, border: "2px solid #B4A96D" }}
                      >
                        <img
                          className={styles.biliIcon}
                          src="/gui_shang.webp"
                          alt="鬼上いえ头像贴图"
                        />{" "}
                        歌切（@鬼上いえ） <ChevronSVG />
                      </Button>
                    </a>
                  </Link>
                    <Link
                      href="https://space.bilibili.com/545589798/dynamic"
                      passHref
                    >
                      <a target="_blank">
                        <Button
                          className={styles.customRandomButton}
                          style={{ marginTop: 0, border: "2px solid #B4A96D" }}
                        >
                          <img
                            className={styles.biliIcon}
                            src="/qie_ge.webp"
                            alt="屑羊羊切片组贴图"
                            style={{ borderRadius: "100%" }}
                          />{" "}
                          切片组 <ChevronSVG />
                        </Button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/** 过滤器控件 */}
          <Row>
            <Col>
              <div className={styles.categorySelectionContainer}>
                <h5 className={styles.categorySelectionTitle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                    style={{ verticalAlign: "baseline" }}
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>{" "}
                  挑个想听的类别呗~
                </h5>
                <Container fluid>
                  <Row>
                    <Col xs={6} md={3}>
                      <MandarinBtn
                        languageFilter={categorySelection.lang}
                        initialFilter={categorySelection.initial}
                        setLanguageState={setLanguageState}
                        setInitialState={setInitialState}
                      />
                    </Col>
                    <Col xs={6} md={3}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.lang == "日语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            categorySelection.lang == "日语"
                              ? setLanguageState("")
                              : setLanguageState("日语");
                          }}
                        >
                          日语
                        </Button>
                      </div>
                    </Col>
                    <Col xs={6} md={3}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.lang == "英语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            categorySelection.lang == "英语"
                              ? setLanguageState("")
                              : setLanguageState("英语");
                          }}
                        >
                          英语
                        </Button>
                      </div>
                    </Col>
                    <Col xs={6} md={3}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.lang == "粤语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            categorySelection.lang == "粤语"
                              ? setLanguageState("")
                              : setLanguageState("粤语");
                          }}
                        >
                          粤语
                        </Button>
                      </div>
                    </Col>
                    <Col xs={6} md={3}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.lang == "韩语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            categorySelection.lang == "韩语"
                              ? setLanguageState("")
                              : setLanguageState("韩语");
                          }}
                        >
                          韩语
                        </Button>
                      </div>
                    </Col>
                    <Col xs={6} md={3}>
                      <div className="d-grid">

                      {/** 
                                            <Button
                          className={
                            categorySelection.remark == "钢琴"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            categorySelection.remark == "钢琴"
                              ? setRemarkState("")
                              : setRemarkState("钢琴");
                          }}
                        >
                          钢琴
                        </Button>
                    */}
                        <PianoBtn
                        remarkFilter={categorySelection.remark}
                        setRemarkState={setRemarkState}
                      />
                      </div>
                    </Col>
                    <Col xs={6} md={3}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.remark == "rap"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            categorySelection.remark == "rap"
                              ? setRemarkState("")
                              : setRemarkState("rap");
                          }}
                        >
                          Rap
                        </Button>
                      </div>
                    </Col>
                    <Col xs={6} md={3}>
                      <div className="d-grid">
                        <Button
                          className={
                            categorySelection.paid
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            categorySelection.paid
                              ? setPaidState(false)
                              : setPaidState(true);
                          }}
                        >
                          付费
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={9}>
              <Form.Control
                className={styles.filters}
                type="search"
                aria-label="搜索"
                placeholder="搜索"
                onChange={(e) => setSearchBox(e.target.value)}
              />
            </Col>
            <Col xs={12} md={3}>
              <div className="d-grid">
                <Button
                  title="从下面的歌单里随机挑一首"
                  className={styles.customRandomButton}
                  onClick={handleRandomSong}
                >
                  随便听听
                </Button>
              </div>
            </Col>
          </Row>
          {/** 歌单表格 */}
          <Row>
            <Col>
              <div className={styles.songListMarco}>
                <Container fluid style={{padding: 0}}>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th></th>
                        <th>歌名</th>
                        <th></th>
                        <th>歌手</th>
                        <th>语言</th>
                        <th>备注</th>
                      </tr>
                    </thead>
                    <tbody className="songList">
                      <SongDetail
                        filteredSongList={filteredSongList}
                        handleClickToCopy={handleClickToCopy}
                        setBVID={setBVID}
                        setPlayerModalShow={setPlayerModalShow}
                        setPlayerModalSongName={setPlayerModalSongName}
                      />
                    </tbody>
                  </Table>
                </Container>
              </div>
            </Col>
          </Row>
        </section>
        {showToTopButton ? (
          <button
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            title="返回顶部"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          </button>
        ) : (
          <div></div>
        )}
        <footer className={styles.footer}>
          Copyright © 2022-2023 七宝和她的家人们
        </footer>
      </Container>
      <Offcanvas show={showIntro} onHide={handleCloseIntro}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>七禾的自我介绍</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className={styles.introParagraph}>
            🐏咩，这里是小羊人七禾，是一只来自咩星的绵羊（羊毛虽好但不要薅七禾的羊毛⊙∀⊙！）
            性别女 没有角但有耳朵 身高160cm 生日6月26日
          </p>
          <p className={styles.introParagraph}>
            🐏直播内容主打吹拉弹唱（吹水·拉胯·弹钢琴·唱歌），歌曲语言包括中日英粤韩。偶尔偶尔打打游戏
            {/** （血压飙升的那种。目前直播时间是工作日早上9.40晚上20.40和周末早上10.40晚上21.00。 */}
          </p>
          <p className={styles.introParagraph}>
            🐏本直播间郑重承诺点歌不用戴牌子，只需打米，一个喵娘点唱，sc置顶，上船无限点歌还可以指定学歌噢。个别高能歌曲需要水晶球。
          </p>
          <p className={styles.introParagraph}>
            🐏欢迎大家投递自己生活中有趣的小故事或者苦恼的问题到七羊羊的匿名提问箱，
            累积到一定数量会开启提问箱专场ε(*･ω･)_/ﾟ:･☆
          </p>
          <p className={styles.introParagraph}>
            🐏本羊正经的时候超正经，不正经的时候也超不正经，希望新来的朋友可以多来直播间和我一起玩，我们互相了解！我会做你最可爱的小羊，你也会是我最嫩绿可口的那颗草（bushi！
          </p>
          <Link href="https://www.tapechat.net/uu/I5WYEZ/AP42LSVE" passHref>
            <a target="_blank">
              <Button
                className={styles.customRandomButton}
                style={{ border: "2px solid #1D0C26", width: "100%" }}
              >
                <img
                  className={styles.biliIcon}
                  src="/tapechat.png"
                  alt="提问箱贴图"
                />{" "}
                匿名提问箱 <ChevronSVG />
              </Button>
            </a>
          </Link>
          <Link href="https://space.bilibili.com/7011134/dynamic" passHref>
            <a target="_blank">
              <Button
                className={styles.customRandomButton}
                style={{ border: "2px solid #1D0C26", width: "100%" }}
              >
                <img
                  className={styles.biliIcon}
                  src="/gui_shang.webp"
                  alt="鬼上いえ头像贴图"
                />{" "}
                录播组（@鬼上いえ） <ChevronSVG />
              </Button>
            </a>
          </Link>
          <Link href="https://space.bilibili.com/545589798/dynamic" passHref>
            <a target="_blank">
              <Button
                className={styles.customRandomButton}
                style={{ border: "2px solid #1D0C26", width: "100%" }}
              >
                <img
                  className={styles.biliIcon}
                  src="/qie_ge.webp"
                  alt="屑羊羊切片组贴图"
                  style={{ borderRadius: "100%" }}
                />{" "}
                切片组 <ChevronSVG />
              </Button>
            </a>
          </Link>

          <Link href="https://music.163.com/m/user?id=383239879" passHref>
            <a target="_blank">
              <Button
                className={styles.customRandomButton}
                style={{ border: "2px solid #1D0C26", width: "100%" }}
              >
                <img
                  className={styles.biliIcon}
                  src="/163music.ico"
                  alt="网易云组贴图"
                />{" "}
                七禾的网易云主页 <ChevronSVG />
              </Button>
            </a>
          </Link>
          <Link
            href="https://i.y.qq.com/n2/m/share/profile_v2/index.html?ADTAG=ryqq.singer&source=ydetail&singermid=003XSaZ01pyD8x"
            passHref
          >
            <a target="_blank">
              <Button
                className={styles.customRandomButton}
                style={{ border: "2px solid #1D0C26", width: "100%" }}
              >
                <img
                  className={styles.biliIcon}
                  src="/qqmusic.ico"
                  alt="QQ音乐贴图"
                />{" "}
                七禾的QQ音乐主页 <ChevronSVG />
              </Button>
            </a>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
      <BiliPlayerModal
        show={modalPlayerShow}
        onHide={() => setPlayerModalShow(false)}
        BVID={BVID}
        modalPlayerSongName={modalPlayerSongName}
      />
    </div>
  );
}
