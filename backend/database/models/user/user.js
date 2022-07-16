
module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define("tblUser",{
        intUserID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        strName: {
            type: DataTypes.STRING
        },
        strEmail:{
            type:DataTypes.STRING
        },
        strPassword:{
            type:DataTypes.STRING
        },
        strProfileImage:{
            type:DataTypes.STRING
        },
        intPoints:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        strLanguagesIDs:DataTypes.STRING,
        verified:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        }
    })
    User.sync();
    return User
}