module.exports=(sequelize,DataTypes)=>{
    const PostComment=sequelize.define("post_comment",{
        intPostCommentID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        intCommenterID:DataTypes.INTEGER,
        strBody:DataTypes.STRING,
        intAuthorId:DataTypes.INTEGER,
    })
    PostComment.sync();
    return PostComment
}