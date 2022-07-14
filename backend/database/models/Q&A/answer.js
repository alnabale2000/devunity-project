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
            type:DataTypes.INTEGER
        },
        intDownVotesCount:{
            type:DataTypes.INTEGER
        },
        strUpVotesIDs:{
            type:DataTypes.STRING
        },
        strDownVotesIDs:{
            type:DataTypes.STRING
        },
    })
    Answer.sync();
    return Answer
}