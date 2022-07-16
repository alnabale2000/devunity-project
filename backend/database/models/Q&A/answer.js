module.exports=(sequelize,DataTypes)=>{
    const Answer=sequelize.define("answer",{
        intAnswerID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        intCommenterID:DataTypes.INTEGER,
        QSId:DataTypes.INTEGER,
        strAnswerBody:{
            type:DataTypes.STRING
        },
        intUpVotesCount:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        intDownVotesCount:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        strUpVotesIDs:{
            type:DataTypes.STRING,
            defaultValue:" "
        },
        strDownVotesIDs:{
            type:DataTypes.STRING,
            defaultValue:" "
        },
    })
    Answer.sync();
    return Answer
}