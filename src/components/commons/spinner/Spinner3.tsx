import styled from "@emotion/styled";
/**
 * Author : Sukyung Lee
 * FileName: Spinner3.tsx
 * Date: 2022-07-31 10:49:05
 * Description :
 */
const Spinner3 = () => {
  return <Conatiner />;
};
export default Spinner3;

const Conatiner = styled.div`
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #25b09b;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: s3 1s infinite linear;
  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;
