exports.Language =`
type Language {
    intLanguageID:Int,
    strName:String,
    strLogo:String,
}
`

exports.LanguageQueries=`
    getLanguagesByUserID(intUserID:Int!):[Language]!
`

exports.LanguageMutation=`
    updateLanguagesByUserId(intUserID:Int,strLanguagesIDs:String):String
`
