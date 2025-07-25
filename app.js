const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');

// Database
const questions = require('./database/question');
const answers = require('./database/answer');

connection.authenticate();

app.set(`view engine`, `ejs`);
app.use(express.static(`public`));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* 
    O método render() é responsável por renderizar uma página HTML. Nesse caso está renderizando a página com extensão .ejs. Outra coisa, a pasta views é a pasta padrão do Express, então não é necessário especificar o caminho da pasta views.
*/

// app.get(`/`, (req, res) => {
//     questions.findAll({raw: true, order:[
//         ['id', 'DESC'] // ID seria a propriedade de destaque; 
//         // ASC = Crescente || DESC = Decrescente
//     ]}).then(questions => { // O raw é para retornar apenas os dados e não os metadados
//         res.render(`index`, {
//             questions
//         });
//     });
// })

// app.get(`/createQuestion`, (req, res) => {
//     res.render(`createQuestion`); 
// })

// app.post('/createQuestion', (req, res) => {
//     let {title, description} = req.body;

//     questions.create({
//         title,
//         description
//     });
    
//     res.redirect('/');
// });

app.get('/question/:id', (req, res) => {
    let id = req.params.id;

    let question = questions.findOne({
        where: {id}
    })

    let publishedAnswers = answers.findAll({
        where: {questionId: id},
        order: [['id', 'DESC']]
    })

    Promise.all([question, publishedAnswers]).then(values => {
        if (values[0] != undefined) {
            res.render('questionPage', {
                questions: values[0],
                answers: values[1]
            });
        } else {
            res.redirect('/');
        }
    });

});

// app.post('/answer', (req, res) => {
//     let {text, questionId} = req.body;

//     answers.create({
//         text,
//         questionId
//     })

//     res.redirect(`/question/${questionId}`);
// });

app.listen(3000, () => {
    console.log('Running at http://localhost:3000');
});

module.exports = app;
