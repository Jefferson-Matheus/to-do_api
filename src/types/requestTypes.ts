export interface TaskInterface{
    title:string
    description:string
    userId:string
    done?:boolean
}

export interface UserInterface{
    fullName:string
    email:string
    username:string
    password:string
    image?:string  
}