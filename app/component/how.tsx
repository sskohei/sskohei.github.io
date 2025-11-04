'use client'
import { useState } from "react"

export default function How(){
    return (
        <div className="bg-white text-black">
            <h1 className="flex gap-3 text-xl font-bold">オンライン絵馬の使い方</h1>
            <div className="flex justify-center gap-3">
                <p>　このサイトは神社に行かずとも絵馬の疑似体験を目指したサイトです。ホーム画面の+ボタンを押すことで誰でも絵馬を掛けることができます。<br />
                    ほかの人が書いた絵馬を読むことも可能です。
                </p>
            </div>
        </div>
    )
}