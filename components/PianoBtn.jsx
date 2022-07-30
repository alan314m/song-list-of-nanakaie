import styles from "../styles/Home.module.css";

import { SplitButton, Dropdown } from "react-bootstrap";

export default function PianoBtn({ remarkFilter, setRemarkState }) {
  // const activeColor = "#d7c2f9";
  const activeColor = "#BEA5C1";
  return (
    <div className="d-grid">
      <SplitButton
        title="钢琴"
        className={
          remarkFilter.includes("钢琴")
            ? styles.splitBtnActive
            : styles.splitBtn
        }
        onClick={(e) => {
          remarkFilter.includes("钢琴")
            ? setRemarkState("")
            : setRemarkState("钢琴");
        }}
      >
        <Dropdown.Item
          onClick={(e) => {
            remarkFilter == "钢琴弹唱" ? setRemarkState("") : setRemarkState("钢琴弹唱");
          }}
          style={
            remarkFilter == "钢琴弹唱"
              ? {
                  backgroundColor: activeColor,
                  cursor: 'url("/cursor_pointer.png"), pointer',
                }
              : { cursor: 'url("/cursor_pointer.png"), pointer' }
          }
        >
          弹唱
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            remarkFilter == "钢琴弹奏" ? setRemarkState("") : setRemarkState("钢琴弹奏");
          }}
          style={
            remarkFilter == "钢琴弹奏"
              ? {
                  backgroundColor: activeColor,
                  cursor: 'url("/cursor_pointer.png"), pointer',
                }
              : { cursor: 'url("/cursor_pointer.png"), pointer' }
          }
        >
          弹奏
        </Dropdown.Item>
      </SplitButton>
    </div>
  );
}
