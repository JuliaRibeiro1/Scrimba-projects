//IMAGES
import avatarVanG from "./images/avatar-vangogh.jpg"
import postVanG from "./images/post-vangogh.jpg"
import avatarCourbet from "./images/avatar-courbet.jpg"
import postCourbet from "./images/post-courbet.jpg"
import avatarDucreux from "./images/avatar-ducreux.jpg"
import postDucreux from "./images/post-ducreux.jpg"
import post2VanG from "./images/vangogh-post2.webp"
import post3VanG from "./images/vangogh-post3.jpg"
import post2Courbet from "./images/courbet-post2.jpg"
import post3Courbet from "./images/courbet-post3.jpg"
import post2Ducreux from "./images/ducreux-post2.jpg"

import { v4 as uuid} from 'uuid';


const data = [
   
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar:avatarVanG,
        post: postVanG,
        posts:[postVanG,post2VanG,post3VanG],
        quote: "just took a few mushrooms lol",
        profileDescription: "I would rather die of passion than of boredom.",
        likes: 21,
        isLiked:false,
        comments: [],
        id:uuid()
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: avatarCourbet,
        post: postCourbet,
        posts: [postCourbet,post2Courbet,post3Courbet],
        quote: "i'm feelin a bit stressed tbh",
        profileDescription: "When I am no longer controversial, I will no longer be important",
        likes: 4,
        isLiked:false,
        comments: [],
        id:uuid(),

    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: avatarDucreux,
        post: postDucreux,
        posts: [postDucreux,post2Ducreux],
        quote: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked:false,
        comments: [],
        id:uuid()
    }
]

export default data