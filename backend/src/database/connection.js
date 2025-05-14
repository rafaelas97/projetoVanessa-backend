const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'area_verde'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MYSQL: ', err.message);
        return;
    }
    console.log('Conexão com o MySQL estabelecida com sucesso!');
});

module.exports = connection;