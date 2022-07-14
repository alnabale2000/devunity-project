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
    postId:Int,
}
`

exports.PostQueries=`
    countPosts:Int!
    getPostsForMultipleLanguage(strUserLanguages:String):[Post!]!
    getPostsByLanguageID(intLanguageID:Int):[Post!]!
    getPostComments(intPostID:Int):[PostComment!]!
`

exports.PostMutation=`
    addPost(strBody:String,intAuthorId:Int,intLanguageID:Int):String
    addPostComment(strBody:String,postId:Int,intCommenterID:Int):String
`
