const typeorm = require("typeorm");
//For the entities
const Wilder = require("./entity/Wilder");
const Skill = require("./entity/Skill");
const Grade = require("./entity/Grade");

module.exports = {
   dataSource: new typeorm.DataSource({
      type: "sqlite",
      database: "./wildersdb.sqlite",
      synchronize: true,
      entities: [Wilder, Skill, Grade],
      logging: ["query", "error"]
   })
} 