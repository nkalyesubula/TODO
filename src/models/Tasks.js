"use strict";
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Task",
    {
      name: DataTypes.STRING,
    },
    
  );
  Task.associate = function(models) {

  };
  return Task;
};
