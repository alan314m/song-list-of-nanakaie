import styles from "../styles/Home.module.css";

export default function SongDetail({ filteredSongList, handleClickToCopy }) {
  return filteredSongList.length !== 0 ? (
    filteredSongList.map((song) => (
      <tr
        className={song.paid ? styles.songRowPaid : song.sticky_top ? styles.songRowTop : styles.songRow}
        key={song.index}
        onClick={(e) =>
          handleClickToCopy(e.target.parentNode.firstChild)
        }
      >
        <td className={styles.noWrapForce} id={song.paid ? `paid ${song.index}` : song.index}>{song.song_name}</td>
        <td>
          {song.sticky_top == 1 ? (
            <img src="up_arrow.png" alt="置顶" className={styles.tableIcons} ></img>
          ) : (
            <div></div>
          )}
          {song.paid == 1 ? (
            <img src="rmb.png" alt="付费" className={styles.tableIcons} ></img>
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
      <td className="display-6 text-center" colSpan="4" id="noSongInList">
        歌单里没有诶~隐藏歌单碰碰运气!
      </td>
    </tr>
  );
}
