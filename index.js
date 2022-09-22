const express = require('express');
const fs = require('fs');
const res = require('express/lib/response');
const app = express();

app.use(express.json());

const sliCode = [
    {id:638262, sli:'0', name:'Test0'},
    {id:460798, sli:'1', name:'AMERICAN EXPRESS GLOBAL BUSINESS TRAVEL'},
    {id:597247, sli:'2', name:'Test2'},
    {id:638204, sli:'3', name:'Test3'},
    {id:597255, sli:'4', name:'Test4'},
];

const sWelcomeLetter = '{     "GlobalCustomerResponse": {         "transactionId": "0abfeddc-e3c9-42d1-a727-5c36446be159",         "GlobalCustomer": {             "@type": "GlobalCustomer",             "Identifier": {                 "value": "';

const oTestResponse = '{    "GlobalCustomerResponse":{       "transactionId":"a6b400e7-843f-427a-8fca-76e1326ef02d",       "GlobalCustomer":{          "@type":"GlobalCustomer",          "Identifier":{             "value":"84C62115-8F40-4E92-A80B-AA05938CC257"          },          "MasterCustomerNumber":"0000626025",          "ProductEntitlement":[             {                "@type":"ProductEntitlement",                "enableInd":true,                "Category":"API",                "id":"689C7B74-8E9F-44E0-BF99-3C72B0A120B8",                "Code":"MC01",                "Name":"Mock Service API",                "Description":"Mock Services is turned on for this Enviroment",                "Version":"1.0",                "ProductAttributes":[                   {                      "name":"IS_COMMERCIAL",                      "value":"0"                   },                   {                      "name":"PRODUCT_PHASE",                      "value":"Alpha"                   },                   {                      "name":"DATA_BLLNG_CD",                      "value":"TR01      "                   }                ]             },             {                "@type":"ProductEntitlement",                "enableInd":true,                "Category":"POS",                "id":"958E8269-17A4-4EE2-B2BC-872DB7340216",                "Code":"MC01",                "Name":"Mock Service POS",                "Description":"Mock Services is turned on for this Enviroment",                "Version":"1.0",                "ProductAttributes":[                   {                      "name":"IS_COMMERCIAL",                      "value":"1"                   },                   {                      "name":"PRODUCT_PHASE",                      "value":"Alpha"                   },                   {                      "name":"DATA_BLLNG_CD",                      "value":"BI01      "                   }                ]             }          ]       }    } }';
const myObj = JSON.parse(oTestResponse);


const sResp626025TxtPROD = '{    "GlobalCustomerResponse":{       "transactionId":"a6b400e7-843f-427a-8fca-76e1326ef02d",       "GlobalCustomer":{          "@type":"GlobalCustomer",          "Identifier":{             "value":"84C62115-8F40-4E92-A80B-AA05938CC257"          },          "MasterCustomerNumber":"0000626025",          "ProductEntitlement":[             {                "@type":"ProductEntitlement",                "enableInd":true,                "Category":"API",                "id":"689C7B74-8E9F-44E0-BF99-3C72B0A120B8",                "Code":"MC01",                "Name":"Mock Service API",                "Description":"Mock Services is turned on for this Enviroment",                "Version":"1.0",                "ProductAttributes":[                   {                      "name":"IS_COMMERCIAL",                      "value":"0"                   },                   {                      "name":"PRODUCT_PHASE",                      "value":"Alpha"                   },                   {                      "name":"DATA_BLLNG_CD",                      "value":"TR01      "                   }                ]             },             {                "@type":"ProductEntitlement",                "enableInd":true,                "Category":"POS",                "id":"958E8269-17A4-4EE2-B2BC-872DB7340216",                "Code":"MC01",                "Name":"Mock Service POS",                "Description":"Mock Services is turned on for this Enviroment",                "Version":"1.0",                "ProductAttributes":[                   {                      "name":"IS_COMMERCIAL",                      "value":"1"                   },                   {                      "name":"PRODUCT_PHASE",                      "value":"Alpha"                   },                   {                      "name":"DATA_BLLNG_CD",                      "value":"BI01      "                   }                ]             }          ]       }    } }';
const oResp626025PROD = JSON.parse(sResp626025TxtPROD);

const sResp626025TxtPP = '{    "GlobalCustomerResponse":{       "transactionId":"a6b400e7-843f-427a-8fca-76e1326ef02d",       "GlobalCustomer":{          "@type":"GlobalCustomer",          "Identifier":{             "value":"84C62115-8F40-4E92-A80B-AA05938CC257"          },          "MasterCustomerNumber":"0000626025",          "ProductEntitlement":[             {                "@type":"ProductEntitlement",                "enableInd":true,                "Category":"API",                "id":"689C7B74-8E9F-44E0-BF99-3C72B0A120B8",                "Code":"MC01",                "Name":"Mock Service API",                "Description":"Mock Services is turned on for this Enviroment",                "Version":"1.0",                "ProductAttributes":[                   {                      "name":"IS_COMMERCIAL",                      "value":"0"                   },                   {                      "name":"PRODUCT_PHASE",                      "value":"Alpha"                   },                   {                      "name":"DATA_BLLNG_CD",                      "value":"TR01      "                   }                ]             },             {                "@type":"ProductEntitlement",                "enableInd":true,                "Category":"POS",                "id":"958E8269-17A4-4EE2-B2BC-872DB7340216",                "Code":"MC01",                "Name":"Mock Service POS",                "Description":"Mock Services is turned on for this Enviroment",                "Version":"1.0",                "ProductAttributes":[                   {                      "name":"IS_COMMERCIAL",                      "value":"1"                   },                   {                      "name":"PRODUCT_PHASE",                      "value":"Alpha"                   },                   {                      "name":"DATA_BLLNG_CD",                      "value":"BI01      "                   }                ]             }          ]       }    } }';
const oResp626025PP = JSON.parse(sResp626025TxtPP);


app.get('/', (req, res) => {
    res.send('Node JS api');
});

app.get('/api/slicode', (req, res) => {
    res.send(sliCode);
});


app.get('/api/oTestResponse', (req, res) => {
    res.send(myObj);
});

app.get('/api/globalcustomersPROD/:code', (req, res) => {
   const code = parseInt(req.params.code);
   if(code === 626025 
    || code === 634840
    || code === 634841
    || code === 634842
    || code === 634843
    || code === 635289
    || code === 634844
    || code === 634882
    || code === 634883
    || code === 634884
    || code === 634885
    || code === 635290
    || code === 634886
    || code === 634887
    || code === 634888
    || code === 634889
    || code === 634890
    || code === 635291
    || code === 634891) {    
      let rawdata = fs.readFileSync('ResponsePROD1.json');
      let oRespose1 = JSON.parse(rawdata);
       res.contentType('application/json');
       res.status(200).send(oRespose1);
   }
   else{
       res.status(404).send('PROD Products was not found.');
   }
});

app.get('/api/globalcustomersPP/:code', (req, res) => {
   const code = parseInt(req.params.code);
   if(code === 626025 
    || code === 634840
    || code === 634841
    || code === 634842
    || code === 634843
    || code === 635289
    || code === 634844
    || code === 634882
    || code === 634883
    || code === 634884
    || code === 634885
    || code === 635290
    || code === 634886
    || code === 634887
    || code === 634888
    || code === 634889
    || code === 634890
    || code === 635291
    || code === 634891) {       
      let rawdata = fs.readFileSync('ResponsePROD1.json');
      let oRespose1 = JSON.parse(rawdata);
       res.contentType('application/json');
       res.status(200).send(oRespose1);
   }
   else{
       res.status(404).send('PRE PROD Products was not found.');
   }
});

app.get('/api/welcomeletterPROD/:code', (req, res) => {
    const code = req.params.code;
    let archivo = fs.readFileSync('ResponseWelcomeLetter1.txt', 'utf-8')
    const sResponse = sWelcomeLetter + code + archivo;
    let oRespose1 = JSON.parse(sResponse);
    res.contentType('application/json');
    res.status(200).send(oRespose1);
 });

 app.get('/api/welcomeletterPP/:code', (req, res) => {
    const code = req.params.code;
    let archivo = fs.readFileSync('ResponseWelcomeLetter1.txt', 'utf-8')
    const sResponse = sWelcomeLetter + code + archivo;
    let oRespose1 = JSON.parse(sResponse);
    res.contentType('application/json');
    res.status(200).send(oRespose1);
 });

 app.get('/api/runtimeUserPROD/:code', (req, res) => {
    const code = parseInt(req.params.code);
    if(code === 626025 
        || code === 634840
        || code === 634841
        || code === 634842
        || code === 634843
        || code === 635289
        || code === 634844
        || code === 634882
        || code === 634883
        || code === 634884
        || code === 634885
        || code === 635290
        || code === 634886
        || code === 634887
        || code === 634888
        || code === 634889
        || code === 634890
        || code === 635291
        || code === 634891) {    
       let rawdata = fs.readFileSync('ResponseUserProd1.json');
       let oRespose1 = JSON.parse(rawdata);
        res.contentType('application/json');
        res.status(200).send(oRespose1);
    }
    else{
        res.status(404).send('PROD User was not found.');
    }
 });

 app.get('/api/runtimeUserPP/:code', (req, res) => {
    const code = parseInt(req.params.code);
    if(code === 626025 
        || code === 634840
        || code === 634841
        || code === 634842
        || code === 634843
        || code === 635289
        || code === 634844
        || code === 634882
        || code === 634883
        || code === 634884
        || code === 634885
        || code === 635290
        || code === 634886
        || code === 634887
        || code === 634888
        || code === 634889
        || code === 634890
        || code === 635291
        || code === 634891) {    
       let rawdata = fs.readFileSync('ResponseUserProd1.json');
       let oRespose1 = JSON.parse(rawdata);
        res.contentType('application/json');
        res.status(200).send(oRespose1);
    }
    else{
        res.status(404).send('PROD User was not found.');
    }
 });


app.get('/api/slicode/:code', (req, res) => {
    const code = sliCode.find(c => c.id === parseInt(req.params.code));
    if(!code) res.status(404).send('The slicode with the given ID was not found.');
    const sliRespose = {
            sli: code.sli,
            name: code.name
    };
    res.send(sliRespose);
});

app.post('/api/slicode', (req,res)=> {
    const sliCod = {
        id: sliCode.length +1,
        name: req.body.name
    };

sliCode.push(sliCod);
res.send(sliCod);
});

app.delete('/api/slicode/:code', (req, res) => {
    const slicod = sliCode.find(c => c.id == parseInt(req.params.code));
    if(!slicod) return res.status(404).send('code not found');

    const index = sliCode.indexOf(slicod);
    sliCode.splice(index,1);
    res.send(sliCode);
});


const port = process.env.port || 3000;
app.listen(port, () => console.log('Port 3000'));