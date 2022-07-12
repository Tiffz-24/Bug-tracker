const db = require('./db');

async function projectQuery(id = null, projName = null, updateParams = null, type = "project", requestType){

  if (requestType == "get" && id == null){
    const result = await db.query(
      `SELECT * from project`
    );

    return result;
  }

  if (requestType == "get" && type == "project" && id != null){
    const result = await db.query(
      `SELECT * from project WHERE project_id =` + id
    );

    return result;
  }

  if (requestType == "get" && type == "users" && id != null){
    const result = await db.query(
      `SELECT * from user_to_project WHERE user_id =` + id
    );
  
    return result;
  }

  if (requestType == "post" && type == "project"){
    console.log("hello");
    const result = await db.query(
      'INSERT INTO project(project_name, status) VALUES(' + '"' + projName + '"' + ', "in progress")'
    );
  
  }

  if (requestType == "delete" && type == "project"){
    const result = await db.query(
      `DELETE from project WHERE project_id =` + id
    );

  }

  if (requestType == "delete" && type == "users"){
    const result = await db.query(
      `DELETE from user_to_project WHERE project_id = ` + updateParams.projectId + ' AND user_id = ' + updateParams.user_id
    );
  }

  if (requestType == "put"){
    const columns = await formatColumns(updateParams);
    console.log(columns);
    const result = await db.query(
      'UPDATE project SET ' + columns + ' WHERE project_id = '+ id
    );

  }
}

async function formatColumns(updateParams){
  return Object.keys(updateParams).map(key => key + '=' + "'" + updateParams[key] + "'").join(', ');

}


module.exports = {
  projectQuery
}

