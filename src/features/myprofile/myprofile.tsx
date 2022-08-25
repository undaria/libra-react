import { ContentLayout } from "@/components/Layout/ContentLayout"
import axios from 'axios';
import { useEffect, useState } from "react";
import { ListItem } from "@/components/Listitem";
import { useAuth } from '@/lib/auth';

export const MyProfile = () => {
  const { user } = useAuth();
  //alert(hoge)
  // const [studyRecords, setStudyRecords] = useState([]);
  // useEffect(() => {
  //     axios.get('http://127.0.0.1:8000/auth/users/me/')
  //     .then((res) => {
  //     setStudyRecords(res.data);
  //     alert(res.data)
  //   })
  //   .catch(function(error) {
  //     console.log(error);
  //   })
  // }, []);

  return (
    <ContentLayout title="プロフィール">
    <div className="mt-4">
      <p>now creating...</p>
      {user ? `success login ${user.username}` 
       :'not login'
       }  
    </div>
  </ContentLayout>
  );
};