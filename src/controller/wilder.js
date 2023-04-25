const dataSource = require("../utils").dataSource;
const Wilder = require("../entity/Wilder");

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

}
