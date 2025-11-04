'use client'

import Link from "next/link";
import { useState,useEffect } from "react";

export default function Head(){
    return(<div className="flex justify-between bg-white text-black gap-4">
        <Link href="/" className="font-bold cursor-pointer">オンライン絵馬</Link>
        <div className="flex">
            <Link href = "/" className="cursor-pointer">
                <p>ホーム　</p>
            </Link>
            <Link href="/how" className="cursor-pointer">
                <p>使い方</p>
            </Link>
        </div>
    </div>)
}