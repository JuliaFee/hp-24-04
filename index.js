const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 9340;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'hp_db',
  password: 'ds564',
  port: 5432,
});

app.use(express.json());

// ----------------------------------------------------------------------------
// rotas GET bruxos

app.get('/bruxos', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM bruxos');
        res.json({
            total: resultado.rowCount,
            usuarios: resultado.rows
        });
    } catch (error) {
        console.error('erro ao obter bruxos');
        res.status(500).send({ mensagem: 'erro interno ao obter bruxos' });
    }
});

app.get('/bruxos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query('SELECT * FROM bruxos WHERE id = $1', [id]);
        res.json({
            total: resultado.rowCount,
            bruxos: resultado.rows
        });
    } catch (error) {
        console.error('erro ao obter bruxo');
        res.status(500).send({ mensagem: 'erro interno ao obter bruxo' });
    }
});

// rota POST bruxos

app.post('/bruxos', async (req, res) => {
    try {
        const { nome, idade, genero, habilidade, casa, status_sangue, patrono } = req.body;

        if (status_sangue !== 'puro' && status_sangue !== 'mestiço' && status_sangue !== 'trouxa') {
            res.status(400).send({ mensagem: 'erro ao registrar bruxo. Utilize apenas puro, mestiço ou trouxa para o status_sangue.' });
            
        }
        if (idade < 11 && idade > 18){
            res.status(400).send({ mensagem: 'erro ao registrar bruxo. Você não pode ser aluno com menos de 11 anos ou mais de 18.' });
        }
        if (casa !== 'grifinória' && casa !== 'sonserina' && casa !== 'lufa-lufa' && casa !== 'corvinal') {
            res.status(400).send({ mensagem: 'erro ao registrar bruxo. Você pode escolher apenas entre as 4 casas de hogwarts (grifinória, sonserina, lufa-lufa ou corvinal).' });
        }
        if (genero !== 'masculino' && genero !== 'feminino' && genero !== 'outro') {
            res.status(400).send({ mensagem: 'erro ao registrar bruxo. Utilize apenas masculino, feminino ou outro para o genero.' });
        }

        await pool.query('INSERT INTO bruxos (nome, idade, genero, habilidade, casa, status_sangue, patrono) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
        [nome, idade, genero, habilidade, casa, status_sangue, patrono]);

        res.status(201).send({ mensagem: 'bruxo registrado com sucesso' });
        
    } catch (error) {
        console.error('erro ao registrar bruxo');
        res.status(500).send({ mensagem: 'erro interno ao registrar bruxo' });
    }
});

// rota PUT bruxos

app.put('/bruxos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, idade, genero, habilidade, casa, status_sangue, patrono } = req.body;
        await pool.query('UPDATE bruxos SET nome = $1, idade = $2, genero = $3, habilidade = $4, casa = $5, status_sangue = $6, patrono = $7 WHERE id = $8', 
        [nome, idade, genero, habilidade, casa, status_sangue, patrono, id]);
    } catch (error) {
        console.error('erro ao atualizar bruxo');
        res.status(500).send({ mensagem: 'erro interno ao atualizar bruxo' });
    }
});

// rota DELETE bruxos

app.delete('/bruxos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM bruxos WHERE id = $1', [id]);
        res.status(200).send({ mensagem: `bruxo de id ${id} excluido com sucesso` });
    } catch (error) {
        console.error('erro ao excluir bruxo');
        res.status(500).send({ mensagem: 'erro interno ao excluir bruxo' });
    }
});
// ----------------------------------------------------------------------------

// rota GET varinhas

app.get('/varinhas', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM varinhas');
        res.json({
            total: resultado.rowCount,
            varinhas: resultado.rows
        });
    } catch (error) {
        console.error('erro ao obter varinhas');
        res.status(500).send({ mensagem: 'erro interno ao obter varinhas' });
    }
});

app.get('/varinhas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query('SELECT * FROM varinhas WHERE id = $1', [id]);
        res.json({
            total: resultado.rowCount,
            varinhas: resultado.rows
        });
    } catch (error) {
        console.error('erro ao obter varinha');
        res.status(500).send({ mensagem: 'erro interno ao obter varinha' });
    }
});

// rota POST varinhas

app.post('/varinhas', async (req, res) => {
    try {
        const { material, comprimento, nucleos, data_fab } = req.body;
        await pool.query('INSERT INTO varinhas (material, comprimento, nucleos, data_fab) VALUES ($1, $2, $3, $4)',[material, comprimento, nucleos, data_fab]);
    } catch (error) {
        console.error('erro ao registrar varinha');
        res.status(500).send({ mensagem: 'erro interno ao registrar varinha' });
    }
});

// rota PUT varinhas

app.put('/varinhas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { material, comprimento, nucleos, data_fab } = req.body;
        await pool.query('UPDATE varinhas SET material = $1, comprimento = $2, nucleos = $3, data_fab = $4 WHERE id = $5', 
        [material, comprimento, nucleos, data_fab, id]);
    } catch (error) {
        console.error('erro ao atualizar varinha');
        res.status(500).send({ mensagem: 'erro interno ao atualizar varinha' });
    }
});

// rota DELETE varinhas

app.delete('/varinhas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM varinhas WHERE id = $1', [id]);
        res.status(200).send({ mensagem: `varinha de id ${id} excluida com sucesso` });
    } catch (error) {
        console.error('erro ao excluir varinha');
        res.status(500).send({ mensagem: 'erro interno ao excluir varinha' });
    }
});

// ----------------------------------------------------------------------------
// rota GET casas

app.get('/casas', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM casas');
        res.json({
            total: resultado.rowCount,
            casas: resultado.rows
        });
    } catch (error) {
        console.error('erro ao obter as casas de hogwarts');
        res.status(500).send({ mensagem: 'erro interno ao obter as casas de hogwarts' });
    }
});

app.get('/casas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await pool.query('SELECT * FROM casas WHERE id = $1', [id]);
        res.json({
            total: resultado.rowCount,
            casas: resultado.rows
        });
    } catch (error) {
        console.error('erro ao obter a casa de hogwarts');
        res.status(500).send({ mensagem: 'erro interno ao obter a casa de hogwarts' });
    }
});

// rota POST casas

app.post('/casas', async (req, res) => {
    try {
        
        const { nome, cor, animal } = req.body;

        if (nome !== 'grifinoria' && nome !== 'sonserina' && nome !== 'lufalufa' && nome !== 'corvinal') {
            res.status(500).send({ mensagem: 'erro ao registrar casa. Utilize apenas as 4 casas de hogwarts (grifinória, sonserina, lufa-lufa ou corvinal).' });
        }
        if (cor !== 'vermelho' && cor !== 'amarelo' && cor !== 'azul' && cor !== 'verde') {
            res.status(500).send({ mensagem: 'erro ao registrar casa. Utilize apenas as cores das casas de hogwarts (vermelho, verde, amarelo ou azul).' });
        }
        if (animal !== 'leao' && animal !== 'serpente' && animal !== 'texugo' && animal !== 'corvo') {
            res.status(500).send({ mensagem: 'erro ao registrar casa. Utilize apenas os animais das casas de hogwarts (leão, serpente, texugo ou corvo).' });
        }

        await pool.query('INSERT INTO casas (nome, cor, animal) VALUES ($1, $2, $3)', [nome, cor, animal]);

        res.status(201).send({ mensagem: 'casa de hogwarts registrada com sucesso' });
     
    } catch (error) {
        console.error('erro ao registrar a casa de hogwarts');
        res.status(500).send({ mensagem: 'erro interno ao registrar a casa de hogwarts' });
    }
});

// rota PUT casas

app.put('/casas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, cor, animal } = req.body;
        await pool.query('UPDATE casas SET nome = $1, cor = $2, animal = $3 WHERE id = $4', [nome, cor, animal, id]);
    } catch (error) {
        console.error('erro ao atualizar a casa de hogwarts');
        res.status(500).send({ mensagem: 'erro interno ao atualizar a casa de hogwarts' });
    }
});

// rota DELETE casas 

app.delete('/casas/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM casas WHERE id = $1', [id]);
        res.status(200).send({ mensagem: `casa de id ${id} excluida com sucesso` });
    } catch (error) {
        console.error('erro ao excluir a casa de hogwarts');
        res.status(500).send({ mensagem: 'erro interno ao excluir a casa de hogwarts' });
    }
});
// ----------------------------------------------------------------------------
// informações do servidor
app.get('/', (req, res) => {
    res.send('servidor funcionando!');
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});