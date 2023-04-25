const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");
const Skill = require("../entity/Skill");

module.exports = {
   create: async (req, res) => {
      try {
         await dataSource
            .getRepository(Wilder)
            .save(req.body)
         res.send("Wilder Created")

      } catch (error) {
         res.send("error")
      }
   },
   read: async (req, res) => {
      try {
         await dataSource
            .getRepository(Wilder)
            .find()
         res.send("Wilders recuperes successfully");
      } catch (error) {
         res.send("error")
      }
   },
   delete: async (req, res) => {
      try {
         await dataSource
            .getRepository(Wilder)
            .delete(req.body.id)
         res.send("Wilders supprimes");
      } catch (error) {
         res.send("error")
      }
   },
   update: async (req, res) => {
      try {
         await dataSource
            .getRepository(Wilder)
            .update(req.body.id, { name: req.body.name })
         res.send("Wilders modifies");
      } catch (error) {
         res.send("error")
      }
   },
   addSkill: async (req, res) => {
      try {
         const wilderToUpdate = await dataSource
            .getRepository(Wilder)
            .findOneBy({ name: req.body.wilderName })
         console.log(wilderToUpdate);
         const skillToAdd = await dataSource
            .getRepository(Skill)
            .findOneBy({ name: req.body.skillName });
         wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];
         await dataSource.getRepository(Wilder).save(wilderToUpdate);
         res.send("skill added to wilder")

      } catch (err) {
         console.log(err);
         res.send("error while adding skill to wilder")

      }
   }
}
