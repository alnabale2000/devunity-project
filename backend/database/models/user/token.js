
module.exports=(sequelize,DataTypes)=>{
    const Token=sequelize.define("tblToken",{
        intTokenID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        intUserID:DataTypes.INTEGER,
        strToken:DataTypes.STRING

    })
    Token.sync();
    return Token
}