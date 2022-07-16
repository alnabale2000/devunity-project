module.exports=(sequelize,DataTypes)=>{
    const Article=sequelize.define("article",{
        intArticleID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        strTitle:DataTypes.STRING,
        strBody:DataTypes.STRING,
        intAuthorId:DataTypes.INTEGER,
        intLikesCount:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        strLikesIDs:{
            type:DataTypes.STRING,
            defaultValue:" "
        },
        strLanguagesIDs:DataTypes.STRING,

    })
    Article.sync();
    return Article
}