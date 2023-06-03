import styled from "@emotion/styled";
import ImageLoader from "../components/ImageLoader";

const StyledSelector = styled.select`
  border: "1px solid #d9d9d9";
`;
const CreateEvent = () => {
  return (
    <div>
      <label for="type">이벤트 카테고리</label>
      <StyledSelector name="type">
        <option disabled>선택</option>
        <option>생일카페</option>
      </StyledSelector>
      <ImageLoader />
    </div>
  );
};

export default CreateEvent;
