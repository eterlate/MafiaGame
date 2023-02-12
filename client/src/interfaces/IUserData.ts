export default interface IUserData {
    id: string,
    username: string,
    name: string,
    chatId: string,
    roles: IUserRole[]
}

export interface IUserRole {
    _id: string,
    value: string,
    description: string
}