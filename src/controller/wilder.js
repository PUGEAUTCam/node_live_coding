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
         console.log(error)
         res.send("error")
      }
   },
   read: async (req, res) => {
      try {
         const data = await dataSource
            .getRepository(Wilder)
            .find()
         res.send(data);
      } catch (error) {
         console.log(error)
         res.send("error")
      }
   },
   delete: async (req, res) => {
      try {
         await dataSource
            .getRepository(Wilder)
            .delete(req.body)
         res.send("Wilders supprimes");
      } catch (error) {
         console.log(error)
         res.send("error")
      }
   },
   update: async (req, res) => {
      try {
         await dataSource
            .getRepository(Wilder)
            .update(req.body.id, req.body.newData)
         res.send("Wilders modifies");
      } catch (error) {
         console.log(error)
         res.send("error")
      }
   },
   addSkill: async (req, res) => {
      try {
         //cherche le wilder a modifier par ex en provenance d'un formulaire
         const wilderToUpdate = await dataSource
            .getRepository(Wilder)
            .findOneBy({ name: req.body.wilderName })
         console.log(wilderToUpdate);

         //On recupere le skill a ajouter au wilder
         const skillToAdd = await dataSource
            .getRepository(Skill)
            .findOneBy({ name: req.body.skillName });

         //On spread le nouveau skill
         wilderToUpdate.skills = [...wilderToUpdate.skills, skillToAdd];

         //On sauvearde le nouveau wilder
         await dataSource
            .getRepository(Wilder)
            .save(wilderToUpdate);
         res.send("skill added to wilder")

      } catch (err) {
         console.log(err);
         res.send("error while adding skill to wilder")

      }
   }
}
