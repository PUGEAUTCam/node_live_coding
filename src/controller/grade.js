const dataSource = require("../utils").dataSource;
const Grade = require("../entity/Grade");

module.exports = {
   create: async (req, res) => {
      try {
         await dataSource
            .getRepository(Grade)
            .save(req.body)
         res.send("Grade Created")

      } catch (error) {
         res.send("error")
      }
   },
   read: async (req, res) => {
      try {
         const data = await dataSource
            .getRepository(Grade)
            .find()
         res.send(data);
      } catch (error) {
         res.send("error")
      }
   },
   delete: async (req, res) => {
      try {
         await dataSource
            .getRepository(Grade)
            .delete(req.body.id)
         res.send("Grade supprimes");
      } catch (error) {
         res.send("error")
      }
   },
   update: async (req, res) => {
      try {
         await dataSource
            .getRepository(Grade)
            .update(req.body.id, req.body.newData)
         res.send("Grade modifies");
      } catch (error) {
         res.send("error")
      }
   }
}
