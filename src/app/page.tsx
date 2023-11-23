'use client'
import Image from 'next/image'
import { useEffect } from "react";
import { open } from '@tauri-apps/api/shell'
import { isTauriApp } from "@/utils";
import { sendNotification } from "@tauri-apps/api/notification";

export default function Home() {
  const handleNotice = () => {
    sendNotification({ title: 'TAURI', body: 'Tauri is awesome!' })
  }
  useEffect(() => {
    document.addEventListener("click", function(event) {
      // @ts-ignore
      if (event.target.tagName === "A") {
        // 执行你的代码
        if (isTauriApp()) {
          event.preventDefault()
          // @ts-ignore
          const href = event.target?.href
          open(href,'chrome')
        }
      }
    });
  }, [])

  return (
    <main data-tauri-drag-region className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-10">
        <button className="btn btn-primary" onClick={handleNotice}>发送通知</button>
      </div>
    </main>
  )
}
