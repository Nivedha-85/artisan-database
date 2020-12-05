var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Money_heist1",
  database:"mydb"
  
});


/*con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE PRODUCT (product_id INT AUTO_INCREMENT PRIMARY KEY,product_name varchar(100),product_price int,quantity_made int)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });*/

  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO PRODUCT (product_name ,product_price ,quantity_made) VALUES ('chain',100,10)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });*/
  
  
  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "INSERT INTO PRODUCT (product_name ,product_price ,quantity_made) VALUES ('earrings',20,100)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM PRODUCT", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM PRODUCT WHERE product_name = 'earrings' ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE PRODUCT SET product_name = 'ring' WHERE product_id = 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE PRODUCT SET product_price = 120 WHERE product_id = 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });*/

  /*con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE PRODUCT SET quantity_made = 150 WHERE product_id = 1";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });*/



  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM PRODUCT ORDER BY product_price DESC ", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/


  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM PRODUCT ORDER BY product_price ", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/





  /*con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM PRODUCT WHERE product_name = 'ring' ", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });*/
  