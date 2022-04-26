var express = require("express");
var BusinessProductvarieties = require("../../models/business/BusinessProductvarieties");
const router = express.Router();

router.post("/save", async (req, res) => {
  let body = req.body;
  console.log(body);
  let business_productvarieties = new BusinessProductvarieties.BusinessProductvarieties();
  business_productvarieties.id = body.data.id;
  business_productvarieties.productid  = body.data.productid ;
  console.log(   body.data.productid);
  business_productvarieties.size = body.data.size;
  business_productvarieties.color = body.data.color;
  business_productvarieties.weight = body.data.weight;
  business_productvarieties.mrp  = body.data.mrp ;
  business_productvarieties.price  = body.data.price ;
  business_productvarieties.instock = body.data.instock;
  business_productvarieties.status = body.data.status;
  business_productvarieties.save().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/list", async (req, res) => {
  let body = req.body;
  let business_productvarieties = new BusinessProductvarieties.BusinessProductvarieties();
  // business_productvarieties.businessid = body.data.businessid;
  business_productvarieties.list().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/delete", async (req, res) => {
  let body = req.body;
  let business_productvarieties = new BusinessProductvarieties.BusinessProductvarieties();
  business_productvarieties.id = body.data.id;
  business_productvarieties.delete().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/get", async (req, res) => {
  let body = req.body;
  let business_productvarieties = new BusinessProductvarieties.BusinessProductvarieties();
  business_productvarieties.id = body.data.id;
  business_productvarieties.get().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});

router.post("/change", async (req, res) => {
  let body = req.body;
  let business_productvarieties = new BusinessProductvarieties.BusinessProductvarieties();
  business_productvarieties.id = body.data.id;
  business_productvarieties.status = body.data.status;
  business_productvarieties.get().then(
    (result) => {
      let data = {
        data: {
          status: "success",
          data: result,
        },
      };
      res.end(JSON.stringify(data));
    },
    (err) => {
      let data = {
        data: {
          status: "fail",
        },
      };
      res.end(JSON.stringify(data));
    }
  );
});


module.exports = router;
