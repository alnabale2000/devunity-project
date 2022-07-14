exports.Language =`
type Language {
    intLanguageID:Int,
    strName:String,
    strLogo:String,
}
`

exports.LanguageQueries=`
    getLanguagesByUserID(intUserID:Int!):[Language!]!
    getAllLanguages:[Language!]!
`

exports.LanguageMutation=`
    updateLanguagesByUserId(intUserID:Int,strLanguagesIDs:String):String
`
