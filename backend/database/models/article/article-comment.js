module.exports=(sequelize,DataTypes)=>{
    const ArticleComment=sequelize.define("article_comment",{
        intArticleCommentID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        strBody:DataTypes.STRING,
        intAuthorId:DataTypes.INTEGER,
    })
    ArticleComment.sync();
    return ArticleComment
}