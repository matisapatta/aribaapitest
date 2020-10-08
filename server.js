
/* Dependencias */
const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');


/* Constantes del programa */

/**Sourcing */
const userSourcing = "64e7fde8-a04c-4bb4-9297-5aba1ff3e9a1";
const pwdSourcing = "1FdK9A1gqJq7C2lmz08bieIp2h2BwYe2";
const apikeySourcing = "3CuhCEof6Over1G5oPjKCcv4RBVtMg1d";
const authSourcing= Buffer.from(`${userSourcing}:${pwdSourcing}`, 'utf8').toString('base64')
const body = {};
/** Analytics */
const userAn = "8739b36d-eb9d-4407-9349-ce52207cdb61";
const pwdAn = "LcTDzRQ01sahFV9O2eftCYDn5jOogIQL";
const apikeyAn = "jsA2RAwxtVy8QfvYsfcAbK5L1qbWmL65";
const authAn= Buffer.from(`${userAn}:${pwdAn}`, 'utf8').toString('base64')

var token = '';
var resData = '';

const app = express();
app.use(express.json());
app.use(express.static("express"));

// default URL for website
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/api/sourcing/', function (req, res) {
    console.log("funciona");
    //console.log(req.query.api)
    axios.post('https://api.ariba.com/v2/oauth/token?grant_type=openapi_2lo', body, {
        headers: {
            'Authorization': `Basic ${authSourcing}`
        }
    })
        .then(response => {
            token = response.data.access_token;
            //console.log(token);
            axios.get(`https://openapi.ariba.com/api/sourcing-reporting-details/v1/prod/views/${req.query.api}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    'realm': 'sanmiguelglobal-t',
                    'apikey': apikeySourcing,
                    //'filters': '%7B%22createdDateFrom%22%3A%222020-09-09T23%3A55%3A31Z%22%2C%22createdDateTo%22%3A%222020-09-28T10%3A00%3A00Z%22%7D'
                    'filters': {
                        createdDateFrom:'2020-08-04T00:00:00Z',
                        createdDateTo:'2020-10-04T00:00:00Z'
                    }
                }


            }).then(response => {
                //console.log(response.data);
                resData = response.data;
                res.send(resData)
            })
                .catch((error) => {
                    console.error(error)
                })
        })
        .catch((error) => {
            console.error("falla segundo")
        })
        //res.status(200).send(resData);
})

app.get('/api/sourcing/views', function (req, res) {
    console.log("funciona");
    //console.log(req.query.api)
    axios.post('https://api.ariba.com/v2/oauth/token?grant_type=openapi_2lo', body, {
        headers: {
            'Authorization': `Basic ${authSourcing}`
        }
    })
        .then(response => {
            token = response.data.access_token;
            //console.log(token);
            axios.get(`https://openapi.ariba.com/api/sourcing-reporting-view/v1/prod/viewTemplates`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    'realm': 'sanmiguelglobal-t',
                    'apikey': apikeySourcing,
                    //'filters': '%7B%22createdDateFrom%22%3A%222020-09-09T23%3A55%3A31Z%22%2C%22createdDateTo%22%3A%222020-09-28T10%3A00%3A00Z%22%7D'
                    // 'filters': {
                    //     createdDateFrom:'2020-08-04T00:00:00Z',
                    //     createdDateTo:'2020-10-04T00:00:00Z'
                    // }
                }


            }).then(response => {
                //console.log(response.data);
                resData = response.data;
                res.send(resData)
            })
                .catch((error) => {
                    console.error(error)
                })
        })
        .catch((error) => {
            console.error("falla segundo")
        })
        //res.status(200).send(resData);
})

app.get('/api/sourcing/metadata', function (req, res) {
    console.log("funciona");
    //console.log(req.query.api)
    axios.post('https://api.ariba.com/v2/oauth/token?grant_type=openapi_2lo', body, {
        headers: {
            'Authorization': `Basic ${authSourcing}`
        }
    })
        .then(response => {
            token = response.data.access_token;
            //console.log(token);
            axios.get(`https://openapi.ariba.com/api/sourcing-reporting-view/v1/prod/metadata`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    'realm': 'sanmiguelglobal-t',
                    'apikey': apikeySourcing,
                    //'filters': '%7B%22createdDateFrom%22%3A%222020-09-09T23%3A55%3A31Z%22%2C%22createdDateTo%22%3A%222020-09-28T10%3A00%3A00Z%22%7D'
                    // 'filters': {
                    //     createdDateFrom:'2020-08-04T00:00:00Z',
                    //     createdDateTo:'2020-10-04T00:00:00Z'
                    // }
                }


            }).then(response => {
                //console.log(response.data);
                resData = response.data;
                res.send(resData)
            })
                .catch((error) => {
                    console.error(error)
                })
        })
        .catch((error) => {
            console.error("falla segundo")
        })
        //res.status(200).send(resData);
})

app.get('/api/analytics/', function (req, res) {
    console.log("funciona");
    //console.log(req.query.api)
    axios.post('https://api.ariba.com/v2/oauth/token?grant_type=openapi_2lo', body, {
        headers: {
            'Authorization': `Basic ${authAn}`
        }
    })
        .then(response => {
            token = response.data.access_token;
            //console.log(token);
            axios.get(`https://openapi.ariba.com/api/analytics-reporting-details/v1/prod/views/${req.query.api}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    'realm': 'sanmiguelglobal-t',
                    'apikey': apikeyAn,
                    //'filters': '%7B%22createdDateFrom%22%3A%222020-09-09T23%3A55%3A31Z%22%2C%22createdDateTo%22%3A%222020-09-28T10%3A00%3A00Z%22%7D'
                    'filters': {
                        createdDateFrom:'2020-08-04T00:00:00Z',
                        createdDateTo:'2020-10-04T00:00:00Z'
                    }
                }


            }).then(response => {
                //console.log(response.data);
                resData = response.data;
                res.send(resData)
            })
                .catch((error) => {
                    console.error(error)
                })
        })
        .catch((error) => {
            console.error("falla segundo")
        })
        //res.status(200).send(resData);
})

app.get('/api/analytics/views', function (req, res) {
    console.log("funciona");
    //console.log(req.query.api)
    axios.post('https://api.ariba.com/v2/oauth/token?grant_type=openapi_2lo', body, {
        headers: {
            'Authorization': `Basic ${authAn}`
        }
    })
        .then(response => {
            token = response.data.access_token;
            //console.log(token);
            axios.get(`https://openapi.ariba.com/api/analytics-reporting-view/v1/prod/viewTemplates`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    'realm': 'sanmiguelglobal-t',
                    'apikey': apikeyAn,
                    //'filters': '%7B%22createdDateFrom%22%3A%222020-09-09T23%3A55%3A31Z%22%2C%22createdDateTo%22%3A%222020-09-28T10%3A00%3A00Z%22%7D'
                    // 'filters': {
                    //     createdDateFrom:'2020-08-04T00:00:00Z',
                    //     createdDateTo:'2020-10-04T00:00:00Z'
                    // }
                }


            }).then(response => {
                //console.log(response.data);
                resData = response.data;
                res.send(resData)
            })
                .catch((error) => {
                    console.error(error)
                })
        })
        .catch((error) => {
            console.error("falla segundo")
        })
        //res.status(200).send(resData);
})

app.get('/api/analytics/metadata', function (req, res) {
    console.log("funciona");
    //console.log(req.query.api)
    axios.post('https://api.ariba.com/v2/oauth/token?grant_type=openapi_2lo', body, {
        headers: {
            'Authorization': `Basic ${authSourcing}`
        }
    })
        .then(response => {
            token = response.data.access_token;
            //console.log(token);
            axios.get(`https://openapi.ariba.com/api/analytics-reporting-view/v1/prod/metadata`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    'realm': 'sanmiguelglobal-t',
                    'apikey': apikeySourcing,
                    //'filters': '%7B%22createdDateFrom%22%3A%222020-09-09T23%3A55%3A31Z%22%2C%22createdDateTo%22%3A%222020-09-28T10%3A00%3A00Z%22%7D'
                    // 'filters': {
                    //     createdDateFrom:'2020-08-04T00:00:00Z',
                    //     createdDateTo:'2020-10-04T00:00:00Z'
                    // }
                }


            }).then(response => {
                //console.log(response.data);
                resData = response.data;
                res.send(resData)
            })
                .catch((error) => {
                    console.error(error)
                })
        })
        .catch((error) => {
            console.error("falla segundo")
        })
        //res.status(200).send(resData);
})


const server = http.createServer(app);
const port = process.env.PORT || 3008;
server.listen(port);
console.debug('Server listening on port ' + port);