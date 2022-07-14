module.exports=(sequelize,DataTypes)=>{
    const Post=sequelize.define("post",{
        intPostID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        strBody:DataTypes.STRING,
        intAuthorId:DataTypes.INTEGER,
        intLikesCount:DataTypes.INTEGER,
        strLikesIDs:DataTypes.STRING,
        intLanguageID:DataTypes.INTEGER,
    })
    Post.sync();
    return Post
}