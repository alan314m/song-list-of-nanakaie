import styles from "../styles/Home.module.css";

export default function SongDetail({ filteredSongList, handleClickToCopy }) {
  return filteredSongList.length !== 0 ? (
    filteredSongList.map((song) => (
      <tr
        className={
          song.paid
            ? styles.songRowPaid
            : song.sticky_top
            ? styles.songRowTop
            : styles.songRow
        }
        key={song.index}
        onClick={(e) => {
          handleClickToCopy(
            e.target.parentNode.firstChild.nodeName === "TD"
              ? e.target.parentNode.childNodes[1]
              : e.target.parentNode.parentNode.childNodes[1]
          );
        }}
      >
        <td className={styles.tableIconTd}>
          {song.sticky_top == 1 ? (
            <img
              src="up_arrow.png"
              alt="置顶"
              className={styles.tableIcons}
              title="置顶曲目"
            ></img>
          ) : (
            <div></div>
          )}
          {song.paid == 1 ? (
            <img
              src="orb.png"
              alt="付费"
              className={styles.tableIcons}
              title="付费曲目(水晶球点唱)"
            ></img>
          ) : (
            <div></div>
          )}
        </td>
        <td
          className={styles.noWrapForce}
          id={song.paid ? `paid ${song.index}` : song.index}
        >
          {song.song_name}
        </td>
        <td className={styles.noWrapForce}>{song.artist}</td>
        <td className={styles.noWrapForce}>{song.language}</td>
        <td className={styles.noWrapForce}>{song.remarks}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td className="display-6 text-center" colSpan="5" id="noSongInList">
        歌单里没有诶~隐藏歌单碰碰运气!
      </td>
    </tr>
  );
}
