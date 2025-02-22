import { CF } from "@/styles/commonComponentStyle";
import SocialButton from "../../commons/button/SocialButton";
import * as S from "./UserSignUpHome.styles";
import { IUserSignUpHomeContainerPageUIProps } from "./UserSignUpHome.types";

export default function UserSignUpHomeContainerPageUI(
  props: IUserSignUpHomeContainerPageUIProps
) {
  return (
    <S.Wrapper>
      <CF.ColumnCenterDiv gap={20}>
        <S.Title>간편 회원가입</S.Title>
        <CF.ColumnCenterDiv gap={10}>
          <SocialButton
            href="https://dabae.shop/login/naver"
            imgsrc="/images/login/naver.svg"
            title="네이버로 시작하기"
            backColor="#03c75a"
            fontColor="#fff"
          />
          <SocialButton
            href="https://dabae.shop/login/kakao"
            imgsrc="/images/login/kakao.svg"
            title="카카오로 시작하기"
            backColor="#fee500"
          />
          <SocialButton
            href="https://dabae.shop/login/google"
            imgsrc="/images/login/google.svg"
            title="구글로 시작하기"
          />
          <S.Button onClick={props.onClickSignUp}>이메일로 가입하기</S.Button>
        </CF.ColumnCenterDiv>
        <CF.RowCenterDiv gap={5}>
          <S.Question>이미 가입하셨다면</S.Question>
          <S.Login onClick={props.onClickLogin}>바로 로그인하기</S.Login>
        </CF.RowCenterDiv>
      </CF.ColumnCenterDiv>
    </S.Wrapper>
  );
}
