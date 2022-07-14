
exports.User =`
type User {
    intUserID:Int,
    strName:String,
    strEmail:String,
    strPassword:String,
    strProfileImage:String,
    intPoints:Int,
    strLanguagesIDs:String,
    articles:[Article] 
    posts:[Post]
    questions:[Question]
}
`

exports.UserInput=`
input UserInput {
    intUserID:Int,
    strName:String,
    strEmail:String,
    strPassword:String,
    strProfileImage:String,
    intPoints:Int,
    strLanguagesIDs:String,
}
`

exports.UserQueries=`
    countUsers:Int!
    getUserByID(intUserID:Int!):User!
    loginUser(strEmail:String!,strPassword:String!):String!
`

exports.UserMutation=`
addUser(userInput:UserInput):User
sendContactMail(strName:String,strEmail:String,strMsg:String):String
updateUser(strProfileImage:String,strName:String):User
updateUserPoints(intUserID:Int,intPoints:Int):String
`

//loginUser(strEmail:String!,strPassword:String!):String!
