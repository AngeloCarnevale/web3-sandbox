"use client";

import ConnectButton from "@/components/connect-button";
import { useEthers } from "@usedapp/core";
import TaskForm from "@/components/task-form";
import TaskList from "@/components/task-list";
import { taksContract } from "@/lib/getContract";

export default function Home() {
  const { account, chainId, library } = useEthers();
  console.log(taksContract)

  return (
    <div className="flex items-center justify-center w-full h-full">
      
      {account !== undefined && (
        <div className="flex flex-col w-full gap-4 mt-[30vh] pb-20 items-center max-w-sm">
          <TaskForm />
          <TaskList />
        </div>
      )}
    </div>
  );
}
