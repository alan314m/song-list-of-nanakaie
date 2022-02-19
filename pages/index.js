import React, { useState } from "react";

import Head from "next/head";

import styles from "../styles/Home.module.css";
import "react-toastify/dist/ReactToastify.css";

import { Container, Row, Col, Form, Table } from "react-bootstrap";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

import MusicList from "../public/music_list_7.json";

import SongDetail from "../components/SongDetail.component";

export default function Home() {
  //状态保存: 下拉选单和搜索框
  const [filterSongInitialSelect, setFilterSongInitialSelect] = useState("");
  const [searchBox, setSearchBox] = useState("");

  //复制成功用户反馈Toast
  const notify = (song_name) =>
    toast.success(`"` + song_name + `"成功复制到剪贴板!`);

  //根据首字母和搜索框进行过滤
  const filteredSongList = MusicList.filter(
    (song) =>
      //首字母下拉选单
      (filterSongInitialSelect != ""
        ? filterSongInitialSelect == song.initial
        : true) &&
      //搜索框搜歌名
      (song.song_name
        .toString()
        .toLowerCase()
        .includes(searchBox ? searchBox.toLowerCase() : "") ||
        //搜索框搜语言
        song.language
          .toString()
          .toLowerCase()
          .includes(searchBox ? searchBox.toLowerCase() : ""))
  );

  //处理用户复制行为
  const handleClickToCopy = (songName) => {
    //复制到剪贴板并发送Toast
    copy("点歌 " + songName);
    // navigator.clipboard.writeText("点歌 " + songName); //如支持iOS则可替换
    notify(songName);
  };

  const avatarLoader = () => {
    return `/nanakaie.webp`
  }
  
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
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className={styles.main}>
          {/** 头像和标题 */}
          <Row>
            <Col>
              <div className={styles.avatarDiv}>
                <img
                  className={"pt-3 " + styles.avatar}
                  src="./nanakaie.webp"
                  alt="七宝的头像"
                />
              </div>
              <h1 className={"display-6 text-center pt-3 " + styles.grandTitle}>
                七禾いえ的歌单
              </h1>
              <p className={"text-center py-3 text-muted"}>
                可以点击歌名复制哦
              </p>
            </Col>
          </Row>
          {/** 过滤器控件 */}
          <Row>
            <Col sm={12} md={6}>
              <Form.Select
                className={styles.filters}
                aria-label="按拼音首字母或语言过滤"
                onChange={(e) => setFilterSongInitialSelect(e.target.value)}
              >
                <option value="">按拼音首字母或语言过滤</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="J">J</option>
                <option value="K">K</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="N">N</option>
                <option value="O">O</option>
                <option value="P">P</option>
                <option value="Q">Q</option>
                <option value="R">R</option>
                <option value="S">S</option>
                <option value="T">T</option>
                <option value="U">U</option>
                <option value="W">W</option>
                <option value="X">X</option>
                <option value="Y">Y</option>
                <option value="Z">Z</option>
                <option value="粤语">粤语</option>
                <option value="日语">日语</option>
                <option value="韩语">韩语</option>
                <option value="英语">英语</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={6}>
              <Form.Control
                className={styles.filters}
                type="search"
                aria-label="搜索"
                placeholder="搜索"
                onChange={(e) => setSearchBox(e.target.value)}
              />
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
                        <th>歌名</th>
                        <th>歌手</th>
                        <th>语言</th>
                        <th>备注</th>
                      </tr>
                    </thead>
                    <tbody>
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

        <footer className={styles.footer}>
          Copyright © 2022 版权啥的没所谓啦
        </footer>
      </Container>
    </div>
  );
}
