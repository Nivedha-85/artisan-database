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
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});*/




/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE RAW_MATERIALS (material_id int AUTO_INCREMENT PRIMARY KEY, material_name VARCHAR(100), manufacturer VARCHAR(100),phone_no varchar(100),mat_price int,mat_quantity int)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
}); */



/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE EMPLOYEE (emp_id INT AUTO_INCREMENT PRIMARY KEY, emp_name VARCHAR(100),phone_no VARCHAR(10),street_no INT, street_name VARCHAR(100), house_no INT,salary INT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/


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
  console.log("Connected!"); 
  var sql = "DROP TABLE DISTRIBUTOR";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table DELETED");
  });
});*/



/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!"); 
  var sql = "CREATE TABLE DISTRIBUTOR (distributor_id varchar(6),distributor_name varchar(100),contact_no varchar(10),present_order varchar(6),order_status varchar(20),total_amt int) ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE DISTRIBUTOR ADD PRIMARY KEY (distributor_id ) ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});*/



/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!"); 
  var sql = "CREATE TABLE TO_MAKE(mat_id int ,prod_id int,mat_count int,PRIMARY KEY(mat_id,prod_id), FOREIGN KEY(mat_id) REFERENCES RAW_MATERIALS(material_id),FOREIGN KEY(prod_id) REFERENCES PRODUCT(product_id)) ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
})*/


/*con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE RAW_MATERIALS ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});*/



/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!"); 
  var sql = "CREATE TABLE MAKES(emply_id int ,prod_id int,prod_count int,PRIMARY KEY(emply_id,prod_id), FOREIGN KEY(emply_id) REFERENCES EMPLOYEE(emp_id),FOREIGN KEY(prod_id) REFERENCES PRODUCT(product_id)) ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
})*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!"); 
  var sql = "CREATE TABLE PLACED_FOR(order_id int ,prod_id int,prod_quantity int,status varchar(20),amt int,PRIMARY KEY(order_id,prod_id), FOREIGN KEY(order_id) REFERENCES ORDERS(order_id),FOREIGN KEY(prod_id) REFERENCES PRODUCT(product_id)) ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
})*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE RAW_MATERIALS ADD CHECK (REGEXP_LIKE(material_id,'RM[0-9][0-9][0-9]'))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});


con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO RAW_MATERIALS VALUES ('RM001','Thread','xyz','2562389267',100,100)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});




/*con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM RAW_MATERIALS", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});*/



/*con.connect(function(err) {
  if (err) throw err;
  con.query("SHOW CREATE TABLE RAW_MATERIALS", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});*/

/*con.connect(function(err) {
  if (err) throw err;
  con.query("SET @raw_num = 1 ", function (err, result, fields) {
    if (err) throw err;
    console.log("Set");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  con.query("CREATE TRIGGER raw_mat_check1 BEFORE INSERT ON RAW_MATERIALS FOR EACH ROW SET NEW.material_id = CONCAT('RM', LPAD(@raw_num, 3, '0')); ",function (err, result, fields) {
  if (err) throw err;
  console.log("TRIGGER");
});

con.query("SET @raw_num=@raw_num+1",function (err, result, fields) {
  if (err) throw err;
  console.log("Set");
});
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "DROP DATABASE mydb ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("DATABASE DROPPED");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE DISTRIBUTOR (distributor_id INT PRIMARY KEY AUTO_INCREMENT, distributor_name VARCHAR(100),contact_no VARCHAR(10),present_order VARCHAR(6))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/



/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE ORDERS (order_id INT PRIMARY KEY AUTO_INCREMENT,order_status VARCHAR(20),total_amt INT, dist_id INT, FOREIGN KEY (dist_id) REFERENCES DISTRIBUTOR(distributor_id))";
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
  con.query("SELECT * FROM RAW_MATERIALS", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});*/

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO EMPLOYEE(emp_name,phone_no ,street_no, street_name, house_no,salary) VALUES ('XYZ','7562542267', 3,'AbC',110,500) ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("INSERTED");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO EMPLOYEE(emp_name,phone_no ,street_no, street_name, house_no,salary) VALUES ('UVW','7562782267', 1,'ABC',120,550) ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("INSERTED");
  });
});



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO DISTRIBUTOR(distributor_name,contact_no ,present_order) VALUES ('gre','9022578963',1) ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("INSERTED");
  });
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO DISTRIBUTOR(distributor_name,contact_no ,present_order) VALUES ('aash','9902299573',1) ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("INSERTED");
  });
}); */


/*con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM DISTRIBUTOR", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO ORDERS (order_status ,total_amt , dist_id) VALUES ('completed',1282,1)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("inserted");
  });
});*/



/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO ORDERS (order_status ,total_amt , dist_id) VALUES ('ongoing',1240,2)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("inserted");
  });
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO ORDERS (order_status ,total_amt , dist_id) VALUES ('ongoing',1240,2)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("inserted");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO MAKES(emply_id,prod_id,prod_count) VALUES (1,1,100)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("inserted");
  });
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO MAKES(emply_id,prod_id,prod_count) VALUES (2,2,200)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("inserted");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO TO_MAKE (mat_id , prod_id, mat_count) VALUES (1,2,34)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("INSERTED");
  });
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO TO_MAKE (mat_id , prod_id, mat_count) VALUES (1,1,54)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("INSERTED");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO PLACED_FOR(order_id ,prod_id,prod_quantity,status,amt) VALUES (1,1,20,'completed',1000)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("INSERTED");
  });
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO PLACED_FOR(order_id ,prod_id,prod_quantity,status,amt) VALUES (1,2,20,'ongoing',2000)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("INSERTED");
  });
});*/



/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE ORDERS (order_id INT PRIMARY KEY AUTO_INCREMENT,order_status VARCHAR(20),total_amt INT, dist_id INT, FOREIGN KEY (dist_id) REFERENCES DISTRIBUTOR(distributor_id))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});*/



/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE ORDERS ADD FOREIGN KEY (dist_id)REFERENCES DISTRIBUTOR (distributor_id)ON DELETE CASCADE ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE TO_MAKE ADD FOREIGN KEY (mat_id)REFERENCES RAW_MATERIALS(material_id)ON DELETE CASCADE ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE TO_MAKE ADD FOREIGN KEY (prod_id)REFERENCES PRODUCT(product_id)ON DELETE CASCADE ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE MAKES ADD FOREIGN KEY (emply_id)REFERENCES EMPLOYEE(emp_id)ON DELETE CASCADE ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE MAKES ADD FOREIGN KEY (prod_id)REFERENCES PRODUCT(product_id)ON DELETE CASCADE ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE PLACED_FOR ADD FOREIGN KEY (prod_id)REFERENCES PRODUCT(product_id)ON DELETE CASCADE ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});*/


/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE PLACED_FOR ADD FOREIGN KEY (order_id)REFERENCES ORDERS(order_id)ON DELETE CASCADE ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});*/



/*con.connect(function(err) {
  if (err) throw err;
  con.query("SHOW CREATE TABLE ORDERS", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});*/