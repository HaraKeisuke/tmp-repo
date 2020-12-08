import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const base = css`
  @media (min-width: 420px) {
    background-color: pink;
  }
`;

const hoge = "hoge";

const Home = () => (
  <>
    <div>master1</div>
    <div>master2</div>
    <style>
      {`
        .danger {
          color: red;
        }
        .base {
          background-color: lightgray;
          color: turquoise;
        }
      `}
    </style>
    <SomeComp
      as="a"
      href="dddd"
      className={"danger base"}
      css={css`
        ${base}
      `}
    >
      <div className="hoge">aaa</div>
    </SomeComp>
  </>
);

export default Home;

let SomeComp = styled.div({
  color: "hotpink",
});
