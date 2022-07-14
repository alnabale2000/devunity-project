module.exports=(sequelize,DataTypes)=>{
    const PostComment=sequelize.define("post_comment",{
        intPostCommentID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        intCommenterID:DataTypes.INTEGER,
        postId:DataTypes.INTEGER,
        strBody:DataTypes.STRING,
    })
    PostComment.sync();
    return PostComment
}