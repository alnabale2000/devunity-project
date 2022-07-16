const {buildSchema}=require('graphql')
const userSchema=require('./schemas/user')
const articleSchema=require('./schemas/article')
const postSchema=require('./schemas/post')
const questionSchema=require('./schemas/QS')
const languageSchema=require('./schemas/languages')


module.exports= buildSchema(
    `
        ${userSchema.User}
        ${userSchema.UserInput}

        ${articleSchema.Article}
        ${articleSchema.ArticleComment}
        ${articleSchema.ArticleInput}

        ${postSchema.Post}
        ${postSchema.PostComment}

        ${questionSchema.Question}
        ${questionSchema.Answer}
        ${questionSchema.QuestionInput}
        ${questionSchema.VoteInput}

        ${languageSchema.Language}


        type RootQuery{
            ${userSchema.UserQueries}
            ${articleSchema.ArticleQueries}
            ${postSchema.PostQueries}
            ${questionSchema.QuestionQueries}
            ${languageSchema.LanguageQueries}
        }

        type RootMutation{
            ${userSchema.UserMutation}
            ${articleSchema.ArticleMutation}
            ${postSchema.PostMutation}
            ${questionSchema.QuestionMutation}
            ${languageSchema.LanguageMutation}
        }

        schema{
            query:RootQuery
            mutation:RootMutation
        }
    `
)