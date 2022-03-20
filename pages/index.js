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
  Spinner,
} from "react-bootstrap";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

// import MusicList from "../public/music_list_7.json";

import SongDetail from "../components/SongDetail.component";

import imageLoader from "../utils/ImageLoader";

export default function Home() {
  //状态保存: 下拉选单, 搜索框和回到顶部按钮
  const [filterSongInitialSelect, setFilterSongInitialSelect] = useState("");
  const [rapAndPlayNSingSelect, setRapAndPlayNSingSelect] = useState("");
  const [searchBox, setSearchBox] = useState("");
  const [showButton, setShowButton] = useState(false);
  //歌单抓取
  const [data, setData] = useState([
    {
      index: "null",
      song_name: "null",
      artist: "null",
      language: "null",
      remarks: null,
      initial: "null",
      sticky_top: null,
      paid: null,
    },
  ]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    //检测窗口滚动
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
    //
    setLoading(true);
    (async () => {
      let musicListResponse = await fetch("http://localhost:5000/all", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "api-key": "fjkasfasejflawdal;w"
        },
      });
      const musicListData = await musicListResponse.json();
      setData(musicListData.data);
      setLoading(false);
    })();
  }, []);

  //根据首字母和搜索框进行过滤
  const filteredSongList = data.filter(
    (song) =>
      //首字母下拉选单
      (filterSongInitialSelect != ""
        ? filterSongInitialSelect == song.initial
        : true) &&
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
      //Rap过滤按钮
      // (rapOnlyToggle ? song.remarks?.toLowerCase().includes("rap") : true)
      (rapAndPlayNSingSelect != ""
        ? song.remarks?.toLowerCase().includes(rapAndPlayNSingSelect)
        : true)
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
    ).firstChild;
    //如歌单无条目
    if (songName_.id == "noSongInList") {
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

  //滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  // if (isLoading) return <p>Loading...</p>;

  return (
    <div className={styles.outerContainer}>
      <Container>
        <Head>
          <title>七禾いえ的歌单</title>
          <meta
            name="keywords"
            content="七禾いえ,B站,bilibili,哔哩哔哩,电台唱见,歌单"
          />
          <meta name="description" content="七禾いえ的歌单" />
          <link rel="icon" href="/favicon.gif" type="image/gif" />
        </Head>

        <section className={styles.main}>
          {/** 头像和标题 */}
          <Row>
            <Col>
              <div className={styles.centerFlexDiv}>
                <Image
                  loader={imageLoader}
                  className={styles.avatar}
                  src="nanakaie.webp"
                  alt="七宝的头像"
                  width={250}
                  height={250}
                />
              </div>
              <h1 className={"display-6 text-center pt-3 " + styles.grandTitle}>
                七禾いえ的歌单
              </h1>
              <div className={styles.centerFlexDiv}>
                <Link href="https://live.bilibili.com/23777594" passHref>
                  <a target="_blank">
                    <Button className={"mt-3 " + styles.customRapButton}>
                      <img
                        className={styles.biliIcon}
                        src="/bilibili_logo.png"
                        alt="bilibili logo"
                      />{" "}
                      前往七宝的直播间{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </Button>
                  </a>
                </Link>
              </div>
              <p className={"text-center py-3 text-muted"}>
                可以点击歌名复制哦
              </p>
            </Col>
          </Row>
          {/** 过滤器控件 */}
          {!isLoading ? (
            <Row>
              <Col xs={6} md={3}>
                <Form.Select
                  className={styles.filters}
                  aria-label="按拼音首字母或语言过滤"
                  onChange={(e) => setFilterSongInitialSelect(e.target.value)}
                >
                  <option value="">语言和首字母</option>
                  <option value="A">国语-A</option>
                  <option value="B">国语-B</option>
                  <option value="C">国语-C</option>
                  <option value="D">国语-D</option>
                  <option value="E">国语-E</option>
                  <option value="F">国语-F</option>
                  <option value="G">国语-G</option>
                  <option value="H">国语-H</option>
                  <option value="I">国语-I</option>
                  <option value="J">国语-J</option>
                  <option value="K">国语-K</option>
                  <option value="L">国语-L</option>
                  <option value="M">国语-M</option>
                  <option value="N">国语-N</option>
                  <option value="O">国语-O</option>
                  <option value="P">国语-P</option>
                  <option value="Q">国语-Q</option>
                  <option value="R">国语-R</option>
                  <option value="S">国语-S</option>
                  <option value="T">国语-T</option>
                  <option value="U">国语-U</option>
                  <option value="W">国语-W</option>
                  <option value="X">国语-X</option>
                  <option value="Y">国语-Y</option>
                  <option value="Z">国语-Z</option>
                  <option value="粤语">粤语</option>
                  <option value="日语">日语</option>
                  <option value="韩语">韩语</option>
                  <option value="英语">英语</option>
                  <option value="闽南语">闽南语</option>
                </Form.Select>
              </Col>
              <Col xs={6} md={3}>
                <Form.Select
                  className={styles.filters}
                  aria-label="七宝的绝活"
                  onChange={(e) => setRapAndPlayNSingSelect(e.target.value)}
                >
                  <option value="">七宝的绝活</option>
                  <option value="rap">Rap</option>
                  <option value="弹唱">钢琴弹唱</option>
                </Form.Select>
              </Col>
              <Col xs={6} md={3}>
                <Form.Control
                  className={styles.filters}
                  type="search"
                  aria-label="搜索"
                  placeholder="搜索"
                  onChange={(e) => setSearchBox(e.target.value)}
                />
              </Col>
              <Col xs={6} md={3}>
                <div className="d-grid">
                  <Button
                    className={styles.customRapButton}
                    onClick={handleRandomSong}
                  >
                    随便听听
                  </Button>
                </div>
              </Col>
            </Row>
          ) : (
            <></>
          )}
          {/** 歌单表格 */}
          <Row>
            <Col>
              <div className={styles.songListMarco}>
                <Container fluid>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>歌名</th>
                        <th></th>
                        <th>歌手</th>
                        <th>语言</th>
                        <th>备注</th>
                      </tr>
                    </thead>
                    <tbody className="songList">
                      {isLoading ? (
                        <tr>
                          <td
                            className="display-6 text-center"
                            colSpan="5"
                            id="loadingMusicList"
                          >
                            <Spinner animation="grow" className={styles.loadingSpinner}/> 歌单加载中
                          </td>
                        </tr>
                      ) : (
                        <SongDetail
                          filteredSongList={filteredSongList}
                          handleClickToCopy={handleClickToCopy}
                        />
                      )}
                    </tbody>
                  </Table>
                </Container>
              </div>
            </Col>
          </Row>
        </section>
        {showButton ? (
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
          Copyright © 2022 七宝和她的家人们
        </footer>
      </Container>
    </div>
  );
}
