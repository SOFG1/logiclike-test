import { useEffect, useMemo, useState } from "react";
import { handle } from "../api";
import { coursesApi } from "../api/courses";
import { ICourse } from "../types";
import styled from "styled-components";
import { TagsView } from "../views/MainViews/TagsView";
import { CourseCardComponent } from "../components/MainComponents/CourseCardComponent";

const StyledPage = styled.div`
  padding: 24px;
  display: flex;
  align-items: start;
  gap: 24px;
`;

const StyledCoursesList = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
`;

export function MainPage() {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null); //If null selected "all items"

  const tags: string[] = useMemo(() => {
    const list: string[] = [];
    courses.forEach((c) => {
      list.push(...c.tags);
    });
    return [...new Set(list)];
  }, [courses]);

  const selectedCourses = useMemo(() => {
    if (selectedTag) return courses.filter((c) => c.tags.includes(selectedTag));
    return courses;
  }, [selectedTag, courses]);

  const handleFetchCourses = async () => {
    const [res, err] = await handle(coursesApi.getCourses());
    if (res) setCourses(res);
    if (err) console.log(err);
  };

  useEffect(() => {
    handleFetchCourses();
  }, []);

  return (
    <StyledPage> 
      <TagsView 
        tags={tags}  
        selectedTag={selectedTag}
        onSelectTag={setSelectedTag}
      /> 
      <StyledCoursesList>
        {selectedCourses.map((c) => (
          <CourseCardComponent course={c} key={c.id} />
        ))}
      </StyledCoursesList>
    </StyledPage>
  );
}
