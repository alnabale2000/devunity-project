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
        intLikesCount:DataTypes.INTEGER,
        strLikesIDs:DataTypes.STRING,
    })
    Article.sync();
    return Article
}