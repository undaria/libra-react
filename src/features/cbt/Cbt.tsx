import { useEffect, useState,Fragment  } from "react";
import { Button } from '@/components/Elements/Button';
import { PlusIcon } from '@heroicons/react/outline';
import TwitterDrawer from '@/components/Elements/CreateDrawer';
import { isDrawerOpenState } from '@/components/Elements/isDrawerOpenState';
import { useRecoilState } from 'recoil';


 

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
<>
    <h1 className="text-green-200">認知再構成法</h1>
    <Button size="sm" startIcon={<PlusIcon className="h-4 w-4"/>} onClick={handleClick}>
      新規作成
    </Button>


    <h2>コラム表一覧</h2>
    <p className='w-auto inline-block p-1 rounded border-2 border-slate-900'>一覧だよ</p>


    <TwitterDrawer />


  </>
    );
};