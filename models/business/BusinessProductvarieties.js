let Database = require("../Database");

class BusinessProductvarieties {
    id = 0;
    productid = 0;
    size = "";
    color= "";
    weight = "";
    mrp  = "";
    price   = "";
    instock  = "";
    status  = "";

    query = "";

    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.productid  =0;
        this.size = "";
        this.color = "";
        this.weight = "";
        this. mrp  = "";
        this. price   = "";
        this. instock  = "";
        this. status  = "";
    }
    save = () => {
        if (this.id == 0) {
       
            this.query = "INSERT INTO Business_Productvarieties (productid, size, color, weight, mrp ,price, instock,status) ";
            this.query += "VALUES (" + this.productid + ", '" + this.size + "', '" + this.color + "', '" + this.weight + "', '" + this.mrp + "', '" + this.price + "', '" + this.instock + "', 'open')";
        }
        else {
            this.query = "UPDATE Business_Productvarieties SET (productid = " + this.productid + ", size = '" + this.size + "', color = '" + this.color + "',weight = '" + this.weight + "',mrp = '" + this.mrp + "' ,price = '" + this.price + "' ,instock = '" + this.instock + "' ,'open' )";
            this.query+="WHERE id =" + this.id;
        }
        console.log(this.query);
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    delete = () => {
        this.query = "DELETE FROM Business_Productvarieties WHERE id =" + this.id;
        console.log(this.query);
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    change = () => {
        this.query = "UPDATE Business_Productvarieties SET status='"+this.status+"' WHERE id=" + this.id;

        console.log(this.query);
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    get = () => {
        this.query = "SELECT * FROM Business_Productvarieties WHERE id=" + this.id;

        console.log(this.query);
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    } 

    list = () => {
        this.query = "SELECT * FROM Business_Productvarieties";

        console.log(this.query);
        return new Promise((resolve, reject) => {
            this.db.query(this.query, (err, result) => {
                this.db.close();
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });


    }
}

module.exports = {
    BusinessProductvarieties: BusinessProductvarieties
}