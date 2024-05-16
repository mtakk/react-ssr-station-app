import React, { FC } from "react"

export const Header: FC = () => {
    return (
        <header className=" bg-gray-800 text-white">
            <nav className="flex justify-between container mx-auto items-center p-4">
                <div className="text-xl">自己紹介</div>
                <ul>
                    <li className="cursor-pointer"><a href="https://github.com/mtakk">Github</a></li>
                    <li>Qiita(comming soon)</li>
                    <li>履歴書(comming soon)</li>
                </ul>
            </nav>
        </header>
    )
}