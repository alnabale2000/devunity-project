const userResolver=require('./resolvers/user')
const articleResolver=require('./resolvers/article')
const postResolver=require('./resolvers/post')
const questionResolver=require('./resolvers/question')
const languageResolver=require('./resolvers/language')


const rootResolver={
    ...userResolver,
    ...articleResolver,
    ...postResolver,
    ...questionResolver,
    ...languageResolver
}

module.exports=rootResolver