import Express from "express";
import pool from "./db.js";

const router = Express.Router();


//get routes
router.get('/getall', async (req, res) => {
    try {
      const client = await pool.connect(); 
  
      try {
        const result = await client.query('SELECT * FROM Employee;');
        res.json(result.rows);
      } finally {
        client.release();
      }
    } catch (error) {
      console.error(error.stack);
      res.status(500).send('Error retrieving employees data');
    }
  });

  router.get("/getemp",async(req,res)=>{
    let emp_id = req.query.emp_id;
    try {
        const client = await pool.connect(); 
        try {
          const result = await client.query(`SELECT * FROM Employee WHERE emp_id = ${emp_id};`);
          res.json(result.rows);
        } finally {
          client.release();
        }
      } catch (error) {
        console.error(error.stack);
        res.status(500).send('Error retrieving employee data');
      }
});

router.get("/getinventory",async(req,res)=>{
    try {
        const client = await pool.connect(); 
    
        try {
          const result = await client.query('SELECT * FROM Inventory;');
          res.json(result.rows);
        } finally {
          client.release();
        }
      } catch (error) {
        console.error(error.stack);
        res.status(500).send('Error retrieving inventory data');
      }
});

router.get("/getproduct",async(req,res)=>{
    let prod_id = req.query.prod_id;
    try {
        const client = await pool.connect(); 
        try {
          const result = await client.query(`SELECT * FROM Inventory WHERE product_id = ${prod_id};`);
          res.json(result.rows);
        } finally {
          client.release();
        }
      } catch (error) {
        console.error(error.stack);
        res.status(500).send('Error retrieving product data');
      }
});


//post routes
router.post("/addemp", async(req,res)=>{
  const  { id,age,name,email,phone,dateOfJoin,salary,address } = req.body;
  try{
    const  client = await pool.connect();
    try{
      const query = `INSERT INTO Employee (emp_id,emp_age, emp_name, emp_email, phone_no, date_of_join, emp_salary, emp_address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
      const values = [req.body.id,req.body.age, req.body.name, req.body.email, req.body.phone, req.body.dateOfJoin, req.body.salary, req.body.address];
      const result = await client.query(query, values);
      res.status(201).json({message : 'added successfully'})
    } finally {
      client.release();
    }
  } catch(error) {
    console.error(error.stack);
    res.status(400).json({error : error.message});
  }
});

router.post("/addprod",async(req,res)=>{
  const { prod_id, prod_name, total_quantity } = req.body;
  try{
    const client = await pool.connect();
    try{
      const result = await client.query(`INSERT INTO Inventory(product_id, product_name, total_quantity)
      VALUES ('${prod_id}','${prod_name}',${total_quantity})`);
      res.send('product added successfully');
    } finally {
      client.release();
    }
  } catch(error) {
    console.error(error.stack);
    res.status(400).send('Failed to add Product');
  }
});

//update routes
router.patch("/updateemp",async(req,res)=>{
  const id = req.query.id;
  const fields = Object.keys(req.body);
  const values = Object.values(req.body);
  try{
     const client = await  pool.connect();
   try{
      const result = client.query(`UPDATE Employee SET (${fields.join(',')}) = (${values.join(',')}) WHERE emp_id = ${id}`);
      res.json(result);
    } finally{
       client.release()
    }
  } catch(error) {
    console.error(error.stack);
    res.status(503).send("Bad update request");
  }
});

router.patch("/updateinv",async(req,res)=>{
  const prod_id = req.query.id;
  const fields = Object.keys(req.body);
  const values = Object.values(req.body);
  try{
    const client = await pool.connect();
    try{
      const result = client.query(`UPDATE Inventory SET (${fields.join(',')}) = (${values.join(',')}) WHERE product_id = ${prod_id}`);
      res.json(result);
    } finally{
      client.release();
    }
    }catch(error){
      console.error(error.stack);
      res.status(503).send('Error updating inventory');
    }
  });

//delete routes
router.delete("/delemp",async(req,res)=>{
  const id = req.body.id;
  try{
    const client = await pool.connect();
    try{
      const result = await client.query(`DELETE FROM Employee WHERE emp_id = '${id}'`);
      res.status(200).send('Employee deleted Successfully!');
    } finally {
      client.release();
    }
  } catch(error){
    console.error(error.stack);
    res.status(400).send("Error deleting employee");
  }
});

router.delete( "/delprod" , async(req, res) => {
  const prod_id = req.body.id;
  try{
    const client = await pool.connect();
    try{
      const result = await client.query(`DELETE FROM Inventory WHERE product_id = '${prod_id}'`);
      res.status(200).send('Product deleted Successfully!');
    } finally {
      client.release();
    }
  } catch(error){
    console.error(error.stack);
    res.status(400).send("Error deleting product");
  }
});


export default router;