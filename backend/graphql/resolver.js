const userResolver=require('./resolvers/user')
const ArticleResolver=require('./resolvers/article')
const PostResolver=require('./resolvers/post')
const questionResolver=require('./resolvers/question')
const LanguageResolver=require('./resolvers/language')


const rootResolver={
    ...userResolver,
}

module.exports=rootResolver