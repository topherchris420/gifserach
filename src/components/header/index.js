import React from "react";
import * as S from "./style";

export default function Header({ onDataUser }) {
  const [search, setSearch] = React.useState("");

  function sendData() {
    onDataUser(search);
  }

  return (
    <S.DivHead>
      <S.Tittle>👫👫👫👫.eth</S.Tittle>
      <S.Logo>MIT Press Gif Search</S.Logo>
      <form onSubmit={sendData}>
        <S.Input
          autoFocus
          type="text"
          placeholder="👩🍑"
          onChange={(e) => setSearch(e.target.value)}
        ></S.Input>
        <S.Button>Slap It</S.Button>
      </form>
    </S.DivHead>
  );
}
