exports.Post =`
type Post {
    intPostID:Int,
    strTitle:String,
    strBody:String,
    intLikesCount:Int,
    strLikesIDs:String,
    strLanguagesIDs:String,
    author:User
}
`

exports.PostComment=`
type PostComment{
    intPostCommentID:Int,    
    strBody:String,
    commenter:User,
}
`

exports.PostQueries=`
    countPosts:Int!
`

exports.PostMutation=`

`
