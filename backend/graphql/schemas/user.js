
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
    
`

exports.UserMutation=`
addUser(userInput:UserInput):User
updateUser(userInput:UserInput):User
`

//loginUser(strEmail:String!,strPassword:String!):String!
