module.exports=(sequelize,DataTypes)=>{
    const Question=sequelize.define("question",{
        intQuestionID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        strTitle:DataTypes.STRING,
        strBody:DataTypes.STRING,
        intAuthorId:DataTypes.INTEGER,
        strLanguagesIDs:DataTypes.STRING,
    })
    Question.sync();
    return Question
}