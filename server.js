
/* Dependencias */
const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');


/* Constantes del programa */


const user = "64e7fde8-a04c-4bb4-9297-5aba1ff3e9a1";
const pwd = "1FdK9A1gqJq7C2lmz08bieIp2h2BwYe2";
const body = {};
const auth = Buffer.from(`${user}:${pwd}`, 'utf8').toString('base64')

var token = '';

const app = express();
app.use(express.json());
app.use(express.static("express"));

// default URL for website
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/api/', function (req, res) {
    console.log("funciona");
    console.log(req.query.api)
    axios.post('https://api.ariba.com/v2/oauth/token?grant_type=openapi_2lo', body, {
        headers: {
            'Authorization': `Basic ${auth}`
        }
    })
        .then(response => {
            token = response.data.access_token;
            console.log(token);
            axios.get(`https://openapi.ariba.com/api/sourcing-reporting-details/v1/prod/views/${req.query.api}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                params: {
                    'realm': 'sanmiguelglobal-t',
                    'apikey': '3CuhCEof6Over1G5oPjKCcv4RBVtMg1d',
                    //'filters': '%7B%22createdDateFrom%22%3A%222020-09-09T23%3A55%3A31Z%22%2C%22createdDateTo%22%3A%222020-09-28T10%3A00%3A00Z%22%7D'
                    'filters': {
                        createdDateFrom:'2020-08-04T00:00:00Z',
                        createdDateTo:'2020-10-04T00:00:00Z'
                    }
                }


            }).then(response => {
                console.log(response.data);
            })
                .catch((error) => {
                    console.error(error.response.data)
                })
        })
        .catch((error) => {
            console.error("falla segundo")
        })

    //res.send(200);
})

const server = http.createServer(app);
const port = 3008;
server.listen(port);
console.debug('Server listening on port ' + port);