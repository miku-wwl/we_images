"use client";

import {Button} from "@/components/Button";
import {Input} from "@/components/Input";
import {Textarea} from "@/components/Textarea";
import axios from "axios";
import {User} from "@/types/User";
import { useEffect } from "react";
import { trpcClient } from "@/utils/api";

export default async function Home() {

    // const response = await axios.get<User[]>('http://localhost:8080/api/users/Hello')
    // const users = response.data

    useEffect(() => {
        // trpcClient.hello.query()
        trpcClient.hello.query().then(
            result => {
                console.log(result); // 在这里打印出 '操作成功'
            },
            error => {
                console.error(error); // 如果前面使用了 reject，这里会打印错误信息
            }
        )
    }, []);

    return (
        <div className="h-screen flex justify-center items-center">
            <form className="w-full max-w-md flex flex-col gap-4">
                <h1 className="text-center text-2xl font-bold">Create App</h1>
                <Input name="name" placeholder="App Name"></Input>
                <Textarea
                    name="description"
                    placeholder="Description"
                ></Textarea>
                <Button type="submit">Submit</Button>
            </form>

            {/*{users.map((user) => (*/}
            {/*    <div key={user.id}>{user.id} {user.name}</div>*/}
            {/*))}*/}
        </div>
    );
}