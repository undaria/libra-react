import React, {Dispatch, SetStateAction} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import { useEffect, useState, Fragment  } from "react";
import clsx from 'clsx'
import { XIcon } from '@heroicons/react/outline';
//import * as React from 'react';

interface Props {
    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>
    renderFooter: () => React.ReactNode;
}

const TwitterDrawerTransition = ({isOpen, setIsOpen, children, renderFooter}: React.PropsWithChildren<Props>) => {
    return (

        <Transition.Root show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 overflow-hidden z-40"
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={React.Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300 sm:duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-hoge">
                  <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                    <div className="min-h-0 flex-1 flex flex-col py-6 overflow-y-scroll">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-semibold text-gray-900">
                            新規作成
                          </Dialog.Title>
                          <div className="ml-3 h-7 flex items-center">
                            <button
                              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              onClick={() => setIsOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 relative flex-1 px-4 sm:px-6">{children}</div>
                    </div>
                    <div className="flex-shrink-0 px-4 py-4 flex justify-end space-x-2">
                      {renderFooter()}
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
        </Transition.Root>
    );
};

export default TwitterDrawerTransition