import axios from 'axios';

import { useEffect, useState } from "react";
import { ListItem } from "@/components/Listitem";
import { ContentLayout } from "@/components/Layout/ContentLayout"


export const UpdateList = () => {



    return (
      <ContentLayout title="アップデート一覧">
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