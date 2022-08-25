//import type { StudyRecord } from './types/studyRecord';
import type { FC } from "react";

type StudyRecord = {
  title: string;
  progress: number;
  media_type: string;
};

export const ListItem: FC<StudyRecord> = (props) => {
  const { title, progress, media_type } = props;
  return (
    <tr>
      <td>{title}</td>
      <td>{progress}</td>
      <td>{media_type}</td>
    </tr>
  );
};