import styles from "../styles/Home.module.css";

import { SplitButton, Dropdown } from "react-bootstrap";

export default function MandarinBtn({
  languageFilter,
  initialFilter,
  setLanguageState,
  setInitialState,
}) {
  // const activeColor = "#d7c2f9";
  const activeColor = "#BEA5C1";
  return (
    <div className="d-grid">
      <SplitButton
        title="国语"
        className={
          languageFilter == "国语"
            ? styles.splitBtnActive
            : styles.splitBtn
        }
        onClick={(e) => {
          languageFilter == "国语"
            ? setLanguageState("")
            : setLanguageState("国语");
        }}
      >
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "A" ? setInitialState("") : setInitialState("A");
          }}
          style={initialFilter == "A" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-A
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "B" ? setInitialState("") : setInitialState("B");
          }}
          style={initialFilter == "B" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-B
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "C" ? setInitialState("") : setInitialState("C");
          }}
          style={initialFilter == "C" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-C
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "D" ? setInitialState("") : setInitialState("D");
          }}
          style={initialFilter == "D" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-D
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "E" ? setInitialState("") : setInitialState("E");
          }}
          style={initialFilter == "E" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-E
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "F" ? setInitialState("") : setInitialState("F");
          }}
          style={initialFilter == "F" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-F
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "G" ? setInitialState("") : setInitialState("G");
          }}
          style={initialFilter == "G" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-G
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "H" ? setInitialState("") : setInitialState("H");
          }}
          style={initialFilter == "H" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-H
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "I" ? setInitialState("") : setInitialState("I");
          }}
          style={initialFilter == "I" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-I
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "J" ? setInitialState("") : setInitialState("J");
          }}
          style={initialFilter == "J" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-J
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "K" ? setInitialState("") : setInitialState("K");
          }}
          style={initialFilter == "K" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-K
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "L" ? setInitialState("") : setInitialState("L");
          }}
          style={initialFilter == "L" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-L
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "M" ? setInitialState("") : setInitialState("M");
          }}
          style={initialFilter == "M" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-M
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "N" ? setInitialState("") : setInitialState("N");
          }}
          style={initialFilter == "N" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-N
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "O" ? setInitialState("") : setInitialState("O");
          }}
          style={initialFilter == "O" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-O
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "P" ? setInitialState("") : setInitialState("P");
          }}
          style={initialFilter == "P" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-P
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "Q" ? setInitialState("") : setInitialState("Q");
          }}
          style={initialFilter == "Q" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-Q
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "R" ? setInitialState("") : setInitialState("R");
          }}
          style={initialFilter == "R" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-R
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "S" ? setInitialState("") : setInitialState("S");
          }}
          style={initialFilter == "S" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-S
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "T" ? setInitialState("") : setInitialState("T");
          }}
          style={initialFilter == "T" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-T
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "U" ? setInitialState("") : setInitialState("U");
          }}
          style={initialFilter == "U" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-U
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "W" ? setInitialState("") : setInitialState("W");
          }}
          style={initialFilter == "W" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-W
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "X" ? setInitialState("") : setInitialState("X");
          }}
          style={initialFilter == "X" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-X
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "Y" ? setInitialState("") : setInitialState("Y");
          }}
          style={initialFilter == "Y" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-Y
        </Dropdown.Item>
        <Dropdown.Item
          onClick={(e) => {
            initialFilter == "Z" ? setInitialState("") : setInitialState("Z");
          }}
          style={initialFilter == "Z" ? { backgroundColor: activeColor, cursor: 'url("/cursor_pointer.png"), pointer' } : {cursor: 'url("/cursor_pointer.png"), pointer'}}
        >
          首字母-Z
        </Dropdown.Item>
      </SplitButton>
    </div>
  );
}
