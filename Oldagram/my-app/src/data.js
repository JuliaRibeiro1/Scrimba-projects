//IMAGES
import avatarVanG from "./images/avatar-vangogh.jpg"
import postVanG from "./images/post-vangogh.jpg"
import avatarCourbet from "./images/avatar-courbet.jpg"
import postCourbet from "./images/post-courbet.jpg"
import avatarDucreux from "./images/avatar-ducreux.jpg"
import postDucreux from "./images/post-ducreux.jpg"
import { v4 as uuid} from 'uuid';


const data = [
   
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar:avatarVanG,
        post: postVanG,
        quote: "just took a few mushrooms lol",
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
        quote: "i'm feelin a bit stressed tbh",
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
        quote: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        isLiked:false,
        comments: [],
        id:uuid()
    }
]

export default data