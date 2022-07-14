exports.Question =`
type Question {
    intQuestionID:Int,
    strTitle:String,
    strBody:String,
    strLanguagesIDs:String,
    author:User
}
`

exports.Answer=`
type Answer{
    intAnswerID:Int,    
    strAnswerBody:String,
    intUpVotesCount:Int,
    intDownVotesCount:Int,
    strUpVotesIDs:String,
    strDownVotesIDs:String,
    commenter:User,
}
`

exports.QuestionQueries=`
    countQuestions:Int!
`

exports.QuestionMutation=`
    
`
