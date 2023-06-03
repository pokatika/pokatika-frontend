import { useRef } from "react";
import styled from "@emotion/styled";

const StyledImage = styled.div``;
const ImageLoader = () => {
  const fileInput = useRef(null);
  return (
    <div>
      {/* <div onClick={}>hello</div> */}
      <input ref={fileInput} type="file" />
    </div>
  );
};

export default ImageLoader;
