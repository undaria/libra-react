import axios from 'axios';
import "@/style/styles.css";
import { useEffect, useState } from "react";
import { ListItem } from "@/components/Listitem";
import { ContentLayout } from "@/components/Layout/ContentLayout"

type StudyRecord = {
    title: string;
    progress: number;
    media_type: string;
  };

export const MystudyHistory = () => {

    const [studyRecords, setStudyRecords] = useState<StudyRecord[]>([]);
    useEffect(() => {
        axios.get<StudyRecord[]>('http://localhost:8000/mystudy/api/study_history/').then((res) => {
        console.log('hoge2');
        setStudyRecords(res.data);
      })
    }, []);

    return (
      <ContentLayout title="勉強の記録">
        <div className="mt-4">
          <p>now creating...</p>
        </div>
        {/* <div className="study-history content__study-history">
          <table>
            <tr>
              <th>タイトル</th>
              <th>進捗率</th>
              <th>形式</th>
            </tr>
            {studyRecords.map((data) => (
              <ListItem
                title={data.title}
                progress={data.progress}
                media_type={data.media_type}
              />
            ))}
          </table>
        </div> */}
      </ContentLayout>
    );
};