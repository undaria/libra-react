import { useEffect, useState,Fragment  } from "react";
import { Button } from '@/components/Elements/Button';
import { PlusIcon } from '@heroicons/react/outline';
import TwitterDrawer from '@/components/Elements/CreateDrawer';
import { isDrawerOpenState } from '@/components/Elements/isDrawerOpenState';
import { useRecoilState } from 'recoil';
import { ContentLayout } from "@/components/Layout/ContentLayout"


 

export const Cbt = () => {
    const [isOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenState)
    const handleClick =() => {     
      //console.log(isOpen)  
      setIsDrawerOpen(true)
    }
    
    useEffect(() => {
      //console.log(`her${isOpen}`);
    }, [isOpen]);


    return (      
      <ContentLayout title="認知再構成法">
  
    <div className="flex justify-end">
    <Button size="md" startIcon={<PlusIcon className="h-4 w-4"/>} onClick={handleClick}>
      新規作成
    </Button>
    </div>

    <h2 className="font-bold">コラム表一覧</h2>
    <p>now creating ...</p>


    <TwitterDrawer />


    </ContentLayout>
    );
};