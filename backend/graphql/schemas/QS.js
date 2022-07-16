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
    QSId:Int,
}
`

exports.QuestionInput=`
input QuestionInput {
    strLanguagesIDs:String,
    strTitle:String,
    strBody:String,
    intAuthorId:Int,
}
`

exports.VoteInput=`
input VoteInput {
    intAnswerID:Int,
    strUpVotesIDs:String,
    strDownVotesIDs:String,
    intUpVotesCount:Int,
    intDownVotesCount:Int,
    intUserID:Int,
    strUpOrDown:String
}
`
exports.QuestionQueries=`
    countQuestions:Int!
    getQuestionsByLanguageID(intLanguageID:Int):[Question!]!
    getQuestionById(intQuestionID:Int):Question!
    getAnswers(intQuestionID:Int):[Answer!]!
    getQuestionsByUserId(intUserID:Int):[Question!]!

`

exports.QuestionMutation=`
    addNewQuestion(questionInput:QuestionInput):String
    addAnswer(strBody:String,QSId:Int,intCommenterID:Int):String
    addVote(voteInput:VoteInput):String

`
