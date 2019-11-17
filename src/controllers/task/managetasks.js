
import models from '../../models';


const db = models.Task;
/**
 *
 *
 * @class Articles
 */
class Task {
  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @returns {object} data
   * @memberof Articles
   */
  static async addTask(req, res) {
    try {
      await db.create({name: req.body.name});
      return res.send({status:201, task:req.body.name});
    } catch (error) {
      return res.send({'error': error.message})
    }
  }
  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @returns {object} articles
   * @memberof Articles
   */
  static async getAllTasks(req, res) {
    try {
        const tasks = await db.findAll();
        if(tasks){
          return res.send(tasks);
        }
        return res.send({'message': 'no tasks yet'});
        
    } catch (error) {
      return res.send({'error': error.message})
    }
  }

  /**
   *
   *
   * @static
   * @param {*} req
   * @param {*} res
   * @returns {object} message
   * @memberof Articles
   */
  static async deleteTask(req, res) {
    try {
      const findTask = await db.findOne({
        where: { id: req.params.id }
      });
      if (!findTask) {
        return res.send({ status:404, message: 'That task does not exist!'});
      }
      await db.destroy({
        where: { id: req.params.id }
      });
      return res.send({ status:200, message: 'That task deleted successful!'});
    }
    catch(e){
      return res.send({'error': e.message})
    }
}
}

export default Task;
