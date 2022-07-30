import TwitterDrawerTransition from "./TwitterDrawer";
import {useRecoilState} from "recoil";
import { isDrawerOpenState } from "./isDrawerOpenState";
import { useEffect, useState, Fragment  } from "react";
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon, ChevronDoubleDownIcon } from '@heroicons/react/solid'
import { useForm, useController, UseControllerProps} from "react-hook-form";
import { Button } from '@/components/Elements/Button';

const emotions = [
    {
        id: 1, name: '悲しみ', infer:'暗い未来がある', evoke:'良いことがないから何もしたくない',
        question:'どんな暗い未来？', unavailable: false 
    },
    {
        id: 2, name: '不安', infer:'危機状況にいる', evoke:'回避しなければならない',
        question:'どんな危機状況？', unavailable: false
    },
    {
        id: 3, name: '怒り', infer:'損をしている', evoke:'原因を排除しなければならない',
        question:'どんな損？', unavailable: false
    }
  ]


const TwitterDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenState)
    const [selectedEmotion, setSelectedPerson] = useState(emotions[0])
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => {
        alert('submit')
        console.log(data)
        
    };

    useEffect(() => {
        console.log(`Register ${register}`);
      }, [register]);

    console.log(`createdrawer : ${isDrawerOpen}`);

    return (
    
        <TwitterDrawerTransition
            isOpen={isDrawerOpen}
            setIsOpen={setIsDrawerOpen}
            renderFooter={() => (
                <>
                    <Button variant="inverse"  size="sm" onClick={() => setIsDrawerOpen(false)}>
                        キャンセル
                    </Button>
                    <Button form="create-discussion" type='submit'   size="sm" onClick={() => setIsDrawerOpen(false)}>
                        作成
                    </Button>
                </>
            )}
        >
         <form  id="create-discussion" onSubmit={handleSubmit(onSubmit)}>
            <h2>Q1 感情を選択してください</h2>      
            <div className="mt-2">
            <Listbox value={selectedEmotion} onChange={setSelectedPerson}>
                <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{selectedEmotion.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                    />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {emotions.map((emotion, emotionIdx) => (
                        <Listbox.Option
                        key={emotionIdx}
                        className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                            }`
                        }
                        value={emotion}
                        >
                        {({ selected }) => (
                            <>
                            <span
                                className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                                }`}
                            >
                                {emotion.name}
                            </span>
                            {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                            ) : null}
                            </>
                        )}
                        </Listbox.Option>
                    ))}
                    </Listbox.Options>
                </Transition>
                </div>
            </Listbox>
            </div>          
            <h2 className="mt-8">Q2 下のコラム表を作成してみましょう</h2>
           
            <div className="w-96 grid place-items-center mt-2 p-2 border-4 border-slate-900">
                <div className="mt-2">
                    <p className="">どんな状況でしたか？</p>
                    <textarea
                        {...register("column_event")}
                        className="'appearance-none block w-72 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',"
                    />
                </div>
                <ChevronDoubleDownIcon className="h-5 w-5 my-2" />

                <div className="mt-0">
                    <p>なぜその状況が発生したと思う？</p>
                    <textarea
                        {...register("column_reason")}
                        className="'appearance-none block w-72 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',"
                    />
                </div>
                <ChevronDoubleDownIcon className="h-5 w-5 my-2" />

                <div className="mt-0">
                    <p>{selectedEmotion.question}</p>
                    <textarea
                        {...register("column_how")}
                        className="'appearance-none block w-72 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm',"
                    />
                </div>
                <ChevronDoubleDownIcon className="h-5 w-5 my-2" />

                <div className="mt-0">
                    <div className="float-left w-auto inline-block p-1 rounded border-2 border-slate-900">
                        推論
                    </div>
                    <div className=" w-auto inline-block p-1 rounded border-2 border-slate-900">        
                        {selectedEmotion.infer}
                    </div>
                </div>
                <ChevronDoubleDownIcon className="h-5 w-5 my-2" />

                <div className="mt-0">
                    <div className="float-left w-auto inline-block p-1 rounded border-2 border-slate-900">
                        誘発
                    </div>
                    <div className="w-auto inline-block p-1 rounded border-2 border-slate-900">
                            {selectedEmotion.evoke}
                    </div>
                </div>
                <ChevronDoubleDownIcon className="h-5 w-5 my-2" />
                <div className="w-auto inline-block p-1 rounded border-2 border-slate-900">
                    {selectedEmotion.name}の誘発
                </div>
                
            </div>

            </form> 
        
        </TwitterDrawerTransition>
         
    )
}

export default TwitterDrawer