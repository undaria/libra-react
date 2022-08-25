import axios from 'axios';
import { useEffect, useState } from "react";
// import { ListItem } from "@/components/Listitem";
import { ContentLayout } from "@/components/Layout/ContentLayout"
import type { FC } from "react";
import { API_URL } from '@/config';
type StudyRecord = {
    title: string;
    progress: number;
    media_type: string;
    created_at: Date;
    updated_at: Date;
    category?: string[]; 
    blog_url?: string;
  };

  
  type StudyRecordShow = {
    title: string;
    progress: number;
    media_type: string;
    blog_url?: string;
  };
  
 const ListItem: FC<StudyRecordShow> = (props) => {
    const { title, progress, media_type, blog_url } = props;
    return (
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" className="py-4 px-6 font-medium text-fuchsia-500 whitespace-nowrap dark:text-white">
          <a href={blog_url}>{title}</a>
        </th>
        <td className="py-4 px-6">{progress}</td>
        <td className="py-4 px-6">{media_type}</td>
      </tr>
    );
  };


export const MystudyHistory = () => {
    const [studyRecords, setStudyRecords] = useState<StudyRecord[]>([]);
    useEffect(() => {
      const axios_instance = axios.create({
          baseURL: API_URL,
          headers: {
            'Content-Type': 'application/json',
          }
      })
      axios_instance.get<StudyRecord[]>('/mystudy/api/study_history/')
        .then((res) => {
        setStudyRecords(res.data);
      })
      .catch(function(error) {
        alert(error);
      })
    }, []);

    return (
      <ContentLayout title="勉強の記録">
    <div className="overflow-x-auto relative mt-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="py-3 px-6">タイトル</th>
            <th scope="col" className="py-3 px-6">進捗率</th>
            <th scope="col" className="py-3 px-6">形式</th>
            </tr>
            </thead>
            <tbody>
            {studyRecords.map((data, index) => (
              <ListItem
                title={data.title}
                progress={data.progress}
                media_type={data.media_type}
                blog_url={data.blog_url}
                key={index}
              />
            ))}
              </tbody>
          </table>
        </div>
      </ContentLayout>
    );
};