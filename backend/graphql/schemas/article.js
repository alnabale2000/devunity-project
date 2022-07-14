exports.Article =`
type Article {
    intArticleID:Int,
    strTitle:String,
    strBody:String,
    intLikesCount:Int,
    strLikesIDs:String,
    strLanguagesIDs:String,
    author:User
}
`

exports.ArticleComment=`
type ArticleComment{
    intArticleCommentID:Int,    
    strBody:String,
    commenter:User,
} 
`

exports.ArticleQueries=`
    countArticles:Int!
`

exports.ArticleMutation=`

`
