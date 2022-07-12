const db = require('./db');

async function userQuery(id = null, values = null, updateParams = null, type = "user",  requestType){

  //select all projects
  if (requestType == "get" && id == null){
    const result = await db.query(
      `SELECT * from user`
    );
    return result;
  }

  if (requestType == "get" && type == "users" && id != null){
    const result = await db.query(
      `SELECT * from user WHERE user_id =` + id
    );
    return result;
  }

  if (requestType == "get" && type == "projects" && id != null){
    const result = await db.query(
      `SELECT * from user_to_project WHERE project_id =` + id
    );
    return result;
  }

  if (requestType == "post" && type == "user"){
    const result = await db.query(
      'INSERT INTO user(first_name, last_name, email, password) VALUES(' + '"' + Object.values(values).join('", "') + '"' + ')'
    );

  }

  if (requestType == "post" && type == "projects"){
    const result = await db.query(
      'INSERT INTO user_to_project VALUES(' + Object.values(values).join(',') + ')'
    );

  }

  if (requestType == "delete"){
    const result = await db.query(
      `DELETE from user WHERE user_id =` + id
    );

  }

  if (requestType == "put"){
    const columns = await formatColumns(updateParams);
    console.log(columns);
    const result = await db.query(
      'UPDATE user SET ' + columns + ' WHERE user_id = '+ id
    );

  }
}

async function formatColumns(updateParams){
  return Object.keys(updateParams).map(key => key + '=' + "'" + updateParams[key] + "'").join(', ');

}


module.exports = {
  userQuery
}

