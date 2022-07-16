module.exports=(sequelize,DataTypes)=>{
    const ArticleComment=sequelize.define("article_comment",{
        intArticleCommentID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        intCommenterID:DataTypes.INTEGER,
        intArticleID:DataTypes.INTEGER,
        strBody:DataTypes.STRING,
    })
    ArticleComment.sync();
    return ArticleComment
}