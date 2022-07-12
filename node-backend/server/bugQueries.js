const db = require('./db');

async function bugQuery(id = null, values = null, updateParams = null,  requestType){

  //select all bugs
  if (requestType == "get" && id == null){
    const result = await db.query(
      `SELECT * from bug`
    );
    return result;
  }

  if (requestType == "get" && id != null){
    const result = await db.query(
      `SELECT * from bug WHERE project_id =` + id
    );
    return result;
  }

  if (requestType == "post"){
    const result = await db.query(
      'INSERT INTO bug(bug_name, project_id, status, priority, notes) VALUES(' + '"' + Object.values(values).join('", "') + '"' + ')'
    );

  }


  if (requestType == "delete"){
    const result = await db.query(
      `DELETE from bug WHERE bug_id =` + id
    );

  }

  if (requestType == "put"){
    const columns = await formatColumns(updateParams);
    const result = await db.query(
      'UPDATE bug SET ' + columns + ' WHERE bug_id = '+ id
    );
  }
}

async function formatColumns(updateParams){
  return Object.keys(updateParams).map(key => key + '=' + "'" + updateParams[key] + "'").join(', ');

}


module.exports = {
  bugQuery
}

