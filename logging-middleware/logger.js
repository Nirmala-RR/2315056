import axious from "axious";
const TOken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzE1MDU2QG5lYy5lZHUuaW4iLCJleHAiOjE3ODI5Njk2MTMsImlhdCI6MTc4Mjk2ODcxMywiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImE2NjY3NDY1LTBhMTUtNGI2Ny05ZWEzLTk1OGFlODc0ZWEzZiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6Im5pcm1hbGEgciIsInN1YiI6ImQ3ZDkwMzA2LWMwNmItNDZkYy04M2YzLTBhNjE5ZTI3ZDYwNyJ9LCJlbWFpbCI6IjIzMTUwNTZAbmVjLmVkdS5pbiIsIm5hbWUiOiJuaXJtYWxhIHIiLCJyb2xsTm8iOiIyMzE1MDU2IiwiYWNjZXNzQ29kZSI6IkVSelV5eCIsImNsaWVudElEIjoiZDdkOTAzMDYtYzA2Yi00NmRjLTgzZjMtMGE2MTllMjdkNjA3IiwiY2xpZW50U2VjcmV0IjoiR3h2bkRIVWZ0TUtjTnRnWSJ9.1EF-vK3mz2sHioLNE-5urtajL4eKE2AFcdWsm8j0rDU";
export async function Log(stack,level,packageName,message){
    try{
        await axious.post("http;//4.224.186.213/evaluation-service/logs",{
            stack,
            level,
            package:packageName,
            meessage,
        },{
            headers:{
                Authorization:'Bearer ${TOKEN}',
            },
        }
    );
    } catch(err){
        console.log("Log Failed");
    }
}