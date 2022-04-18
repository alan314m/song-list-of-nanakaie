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
  SplitButton,
  Dropdown,
} from "react-bootstrap";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

import MusicList from "../public/music_list_7.json";

import SongDetail from "../components/SongDetail.component";

import imageLoader from "../utils/ImageLoader";

export default function Home() {
  //状态保存: 下拉选单, 搜索框和回到顶部按钮
  const [languageFilter, setLanguageFilter] = useState("");
  const [initialFilter, setInitialFilter] = useState("");
  const [paidFilter, setPaidFilter] = useState("");
  const [remarkFilter, setRemarkFilter] = useState("");
  const [searchBox, setSearchBox] = useState("");
  const [showToTopButton, setToTopShowButton] = useState(false);

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
      (languageFilter != "" ? song.language?.includes(languageFilter) : true) &&
      //首字母过滤按钮
      (initialFilter != "" ? song.initial?.includes(initialFilter) : true) &&
      //首字母过滤按钮
      (remarkFilter != ""
        ? song.remarks?.toLowerCase().includes(remarkFilter)
        : true) &&
      //付费过滤按钮
      (paidFilter ? song.paid == 1 : true)
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
    setLanguageFilter(lang);
    setInitialFilter("");
    setRemarkFilter("");
    setPaidFilter(false);
  };

  //改变首字母过滤状态
  const setInitialState = (initial) => {
    setLanguageFilter("国语");
    setInitialFilter(initial);
    setRemarkFilter("");
    setPaidFilter(false);
  };

  //改变备注过滤状态
  const setRemarkState = (remark) => {
    setLanguageFilter("");
    setInitialFilter("");
    setRemarkFilter(remark);
    setPaidFilter(false);
  };

  //改变收费过滤状态
  const setPaidState = (paid) => {
    setLanguageFilter("");
    setInitialFilter("");
    setRemarkFilter("");
    setPaidFilter(paid);
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

  //滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

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
                七禾いえ
              </h1>
              <h1 className={"display-6 text-center " + styles.grandTitle}>
                和她拿手的<b>{filteredSongList.length}</b>首歌
              </h1>
              <div className={styles.centerFlexDiv}>
                <Link href="https://live.bilibili.com/23777594" passHref>
                  <a target="_blank">
                    <Button className={"mt-3 " + styles.customRandomButton}>
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
          <Row>
            <Col>
              <div
                style={{
                  border: "3px solid #575065",
                  borderRadius: "1rem",
                  padding: "1rem",
                }}
              >
                <h5
                  style={{
                    position: "relative",
                    top: "-2rem",
                    backgroundColor: "#F9DBE7",
                    margin: "auto",
                    textAlign: "center",
                    width: "215px",
                    height: "16px",
                  }}
                >
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
                      <div className="d-grid">
                        <SplitButton
                          title="国语"
                          className={
                            languageFilter == "国语"
                              ? styles.mandarinBtnActive
                              : styles.mandarinBtn
                          }
                          onClick={(e) => {
                            languageFilter == "国语"
                              ? setLanguageState("")
                              : setLanguageState("国语");
                          }}
                        >
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "A"
                                ? setInitialState("")
                                : setInitialState("A");
                            }}
                            style={
                              initialFilter == "A"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-A
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "B"
                                ? setInitialState("")
                                : setInitialState("B");
                            }}
                            style={
                              initialFilter == "B"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-B
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "C"
                                ? setInitialState("")
                                : setInitialState("C");
                            }}
                            style={
                              initialFilter == "C"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-C
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "D"
                                ? setInitialState("")
                                : setInitialState("D");
                            }}
                            style={
                              initialFilter == "D"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-D
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "E"
                                ? setInitialState("")
                                : setInitialState("E");
                            }}
                            style={
                              initialFilter == "E"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-E
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "F"
                                ? setInitialState("")
                                : setInitialState("F");
                            }}
                            style={
                              initialFilter == "F"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-F
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "G"
                                ? setInitialState("")
                                : setInitialState("G");
                            }}
                            style={
                              initialFilter == "G"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-G
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "H"
                                ? setInitialState("")
                                : setInitialState("H");
                            }}
                            style={
                              initialFilter == "H"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-H
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "I"
                                ? setInitialState("")
                                : setInitialState("I");
                            }}
                            style={
                              initialFilter == "I"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-I
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "J"
                                ? setInitialState("")
                                : setInitialState("J");
                            }}
                            style={
                              initialFilter == "J"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-J
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "K"
                                ? setInitialState("")
                                : setInitialState("K");
                            }}
                            style={
                              initialFilter == "K"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-K
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "L"
                                ? setInitialState("")
                                : setInitialState("L");
                            }}
                            style={
                              initialFilter == "L"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-L
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "M"
                                ? setInitialState("")
                                : setInitialState("M");
                            }}
                            style={
                              initialFilter == "M"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-M
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "N"
                                ? setInitialState("")
                                : setInitialState("N");
                            }}
                            style={
                              initialFilter == "N"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-N
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "O"
                                ? setInitialState("")
                                : setInitialState("O");
                            }}
                            style={
                              initialFilter == "O"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-O
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "P"
                                ? setInitialState("")
                                : setInitialState("P");
                            }}
                            style={
                              initialFilter == "P"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-P
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "Q"
                                ? setInitialState("")
                                : setInitialState("Q");
                            }}
                            style={
                              initialFilter == "Q"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-Q
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "R"
                                ? setInitialState("")
                                : setInitialState("R");
                            }}
                            style={
                              initialFilter == "R"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-R
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "S"
                                ? setInitialState("")
                                : setInitialState("S");
                            }}
                            style={
                              initialFilter == "S"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-S
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "T"
                                ? setInitialState("")
                                : setInitialState("T");
                            }}
                            style={
                              initialFilter == "T"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-T
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "U"
                                ? setInitialState("")
                                : setInitialState("U");
                            }}
                            style={
                              initialFilter == "U"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-U
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "W"
                                ? setInitialState("")
                                : setInitialState("W");
                            }}
                            style={
                              initialFilter == "W"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-W
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "X"
                                ? setInitialState("")
                                : setInitialState("X");
                            }}
                            style={
                              initialFilter == "X"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-X
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "Y"
                                ? setInitialState("")
                                : setInitialState("Y");
                            }}
                            style={
                              initialFilter == "Y"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-Y
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={(e) => {
                              initialFilter == "Z"
                                ? setInitialState("")
                                : setInitialState("Z");
                            }}
                            style={
                              initialFilter == "Z"
                                ? { backgroundColor: "#d7c2f9" }
                                : {}
                            }
                          >
                            首字母-Z
                          </Dropdown.Item>
                        </SplitButton>
                      </div>
                    </Col>
                    <Col xs={6} md={3}>
                      <div className="d-grid">
                        <Button
                          className={
                            languageFilter == "日语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            languageFilter == "日语"
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
                            languageFilter == "英语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            languageFilter == "英语"
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
                            languageFilter == "粤语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            languageFilter == "粤语"
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
                            languageFilter == "韩语"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            languageFilter == "韩语"
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
                        <Button
                          className={
                            remarkFilter == "弹唱"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            remarkFilter == "弹唱"
                              ? setRemarkState("")
                              : setRemarkState("弹唱");
                          }}
                        >
                          钢琴弹唱
                        </Button>
                      </div>
                    </Col>
                    <Col xs={6} md={3}>
                      <div className="d-grid">
                        <Button
                          className={
                            remarkFilter == "rap"
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            remarkFilter == "rap"
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
                            paidFilter
                              ? styles.customCategoryButtonActive
                              : styles.customCategoryButton
                          }
                          onClick={(e) => {
                            paidFilter
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
                <Container fluid>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th></th>
                        <th>歌名</th>
                        <th>歌手</th>
                        <th>语言</th>
                        <th>备注</th>
                      </tr>
                    </thead>
                    <tbody className="songList">
                      <SongDetail
                        filteredSongList={filteredSongList}
                        handleClickToCopy={handleClickToCopy}
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
          Copyright © 2022 七宝和她的家人们
        </footer>
      </Container>
    </div>
  );
}
