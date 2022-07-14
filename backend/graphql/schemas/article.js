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
    articleId:Int,
} 
`

exports.ArticleInput=`
input ArticleInput {
    strLanguagesIDs:Int,
    strTitle:String,
    strBody:String,
    intAuthorId:Int,
}
`

exports.ArticleQueries=`
    countArticles:Int!
    getArticlesByLanguageID(intArticleID:Int):[Article!]!
    getArticleById(intArticleID:Int):Article!
    getRecommendedArticles(intLanguageID:Int):[Article!]!
    getArticleComments(intArticleID:Int):[ArticleComment!]!
    getArticlesByUserId(intUserID:Int):[Article!]!
`

exports.ArticleMutation=`
    addNewArticle(articleInput:ArticleInput):String
    addArticleComment(strBody:String,articleId:Int,intCommenterID:Int):String

`
