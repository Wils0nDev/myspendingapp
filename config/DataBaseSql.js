var sql = require("mssql");
const  parameters  = require('./parameters')
class DataBaseSql {
  constructor() {
    this.connect()
  }

  async connect() {
    try{
      await new sql.connect(parameters).then(pool => {
        if (pool.connecting) {
          console.log('Connecting to the database...')
        }
        if (pool.connected) {
          
      
        }
      });
    }catch(error){
      console.log('no se pudo conectar')
    }
   

    //await connection.connect();
  }
}

module.exports = DataBaseSql;
