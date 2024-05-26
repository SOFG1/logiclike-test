import React from "react";
import styled from "styled-components";
import { ICourse } from "../../types";

const StyledCard = styled.div`
  height: 210px;
  border-radius: 18px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const StyledImg = styled.img`
    height: 162px;
    flex-grow: 1;
    object-fit: contain;
`;

const StyledName = styled.div``;

interface IProps {
  course: ICourse;
}

const CourseCardComponent = React.memo(({ course }: IProps) => {
  return (
    <StyledCard>
      <StyledImg src={course.image} alt="Course image" />
      <StyledName>{course.name}</StyledName>
    </StyledCard>
  );
});

export default CourseCardComponent;
