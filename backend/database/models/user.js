
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
        blnIsActive:{
            type:DataTypes.BOOLEAN,
            defaultValue:0
        },
        dtmDOB: {
            type: DataTypes.DATE
        },
    })
    User.sync();
    return User
}