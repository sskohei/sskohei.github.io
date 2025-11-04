'use client'
import { useState } from "react"
import { useEffect } from "react";
import { supabase } from "../../lib/supabase";

export default function Main(){

    type Ema = {
        id: number;
        title: string;
        contents: string;
        start_date: string;
        end_date: string;
    };

    const [shadow,setShadow] = useState<boolean>(false);
    const [text,setText] = useState<string>("");
    const [display,setDisplay] = useState<Ema[]>([]);

    const handlechange = (e:any) => {
        setText(e.target.value);
    };

    const add = async () =>{
        const {error} = await supabase.from("ema").insert([{title: text,contents:text}]);
        if (error) {
            console.error("データ追加エラー:", error);
            return;
        }
        await fetchDate();
        setText("");
    };

    const fetchDate = async () =>{
        const {data,error} = await supabase.from("ema").select("*");
        if (error) {
            console.error("データ取得エラー:", error);
            return;
        }
        setDisplay(data);
        console.log(data);
    };

    useEffect(() => {
        fetchDate();
    }, []);


    return(
        <div className="bg-white w-screen ">
            <div className="flex text-black gap-3">
                {display.map((element, index) => (
                    <div key={index} className="relative w-64 h-48 border-4 border-amber-800 bg-amber-100 [clip-path:polygon(50%_0%,_100%_20%,_100%_100%,_0%_100%,_0%_20%)] flex items-center justify-center text-center p-4">{element.title}</div>
                ))}
            </div>
            <button className="fixed z-50 bottom-10 right-10 py-4 px-5 border-2 bg-green-400 rounded-full cursor-pointer"
                onClick={()=>setShadow(true)}
            >
                +
            </button>
            {shadow &&(
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-96 relative">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-bold mb-4 text-black">絵馬を作成</h2>
                            <button onClick={()=>setShadow(false)} className="py-2 px-4 border-2 bg-red-400 rounded-full cursor-pointer">
                                ×
                            </button>
                        </div>
                        <div className="flex">
                            <input type="text" placeholder="ここに入力" value={text} onChange={handlechange} className="text-black"/>
                            <button className="py-4 px-5 border-2 bg-blue-400 rounded-full cursor-pointer" onClick={()=>add()}>絵馬を掛ける</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}