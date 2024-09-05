export type User = {
    id: number
    username: string
    firstName: string
    lastName: string
    avatar: string
    followers: number
}

export type Media = {
    id: number
    type: "image" | "video"
    url: string
    width: number
    height: number
  }
  


export type Post = {
    id: number
    user: User
    date: Date
    content: string
    likes: number
    replies: number
    replyId?: number
    media?: Media
}


const users: User[] = [
    {
        id: 1, 
        username: 'ahmedcalif', 
        firstName: 'ahmed',
        lastName: 'calif',
        avatar: 'https://onlinepngtools.com/images/examples-onlinepngtools/semi-transparent.png',
        followers: 3000
    },
]

const posts: Post[] = [
    {
        id: 1,
        user: users[1],
        date: new Date(),
        content: 'new post',    
        likes: 40,
        replies: 0,


    }
]

export function getPost(id: number): Post | undefined {
    return posts.find((post) => post.id === id)
}

export function getPosts (): Post[] | undefined {
    return posts.filter((post) => !post.replyId)
}

export function reponsePosts (id: number): Post[] | undefined {
    return posts.filter((post) => post.replyId === id)
}

export function getUser (username: string): User | undefined {
    return users.find((user) => user.username === username)
}

export function getPostsFromUser (username: string): Post[] | undefined {
    return posts.filter((post) => post.user.username === username)
}