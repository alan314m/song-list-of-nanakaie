import styles from "../styles/Home.module.css";

export default function SongDetail({ filteredSongList, handleClickToCopy }) {
  return filteredSongList.length !== 0 ? (
    filteredSongList.map((song) => (
      <tr
        className={song.sticky_top == 1 ? styles.songRowTop : styles.songRow}
        key={song.index}
        onClick={(e) =>
          handleClickToCopy(e.target.parentNode.firstChild.innerText)
        }
      >
        <td className={styles.noWrapForce}>{song.song_name}</td>
        <td>
          {song.sticky_top == 1 ? (
            <img src="up_arrow.png" alt="置顶" className={styles.upArrow} ></img>
          ) : (
            <div></div>
          )}
        </td>
        {/** 等歌手补充 */}
        {/** <td className={styles.noWrapForce}>{song.artist}</td> */}
        <td className={styles.noWrapForce}>{song.language}</td>
        <td className={styles.noWrapForce}>{song.remarks}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td className="display-6 text-center" colSpan="4">
        没有找到您想要的歌哟~
      </td>
    </tr>
  );
}
