const mysql = require('mysql')

const database = {
    host     : 'iu51mf0q32fkhfpl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user     : 'gx09dow97kh2f5yb',
    password : 'scnpkjjairs3wkaq',
    database : 'ylwwsln7lqj7l71x'
}

// const database = {
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'uwc'
// }

class Model {
    constructor() {
        this.conn = mysql.createConnection(database)
        this.conn.connect()
    }

    query(query, arr) {
        let databaseQuery;
        databaseQuery = new Promise((resolve, reject) => {
            this.conn.query(
                query,
                arr,
                (error, results) => {
                    if (error)
                       reject(error.sqlMessage)
                    else
                        resolve(results)
                }
            )
        });

        return databaseQuery
    }
}

module.exports = Model