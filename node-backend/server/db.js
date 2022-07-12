const mysql = require('mysql2/promise');


async function query(sql, params = null) {
    const config = {
        host: 'localhost',
        user: 'root', /* MySQL User */
        password: 'dbuserdbuser', /* MySQL Password */
        database: 'bugtracker' /* MySQL Database */
      };
    
    console.log(sql);
    const connection = await mysql.createConnection(config);
    connection.config.namedPlaceholders = true;
    const [results,] = await connection.execute(sql, params);
    return results;
    // await conn.query(sql, params, (err, results) => {
    //     if(err) throw err;
    //     console.log("results from query")
    //     console.log(results)
    //     return results;
    //   });
}

module.exports = {
  query
}