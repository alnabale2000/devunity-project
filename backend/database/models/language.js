module.exports=(sequelize,DataTypes)=>{
    const Language=sequelize.define("language",{
        intLanguageID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        strName: {
            type: DataTypes.STRING
        },
        strLogo:{
            type:DataTypes.STRING
        },
    })
    Language.sync();
    return Language
}