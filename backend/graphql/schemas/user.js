
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
    createNewAccount(userInput:UserInput):User
    sendMail(strEmail:String,strMsg:String):String
    updateUser(intUserID:Int,strProfileImage:String,strName:String):String
    updateUserPoints(intUserID:Int,newPoints:Int):String
`

