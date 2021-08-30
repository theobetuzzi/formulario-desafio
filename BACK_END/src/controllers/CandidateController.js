const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { nomeCompleto, cargoPretendido, dataDeNascimento, estadoCivil, sexo, cep, endereco, numero, bairro, cidade, UF, telefoneFixo1, telefoneFixo2, celular, contato, email, identidade, cpf, possuiVeiculo, habilitacao } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nomeCompleto = nomeCompleto;
        newCandidate.cargoPretendido = cargoPretendido;
        newCandidate.dataDeNascimento = dataDeNascimento;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.sexo = sexo;
        newCandidate.cep = cep;
        newCandidate.endereco = endereco;
        newCandidate.numero = numero;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.UF = UF;
        newCandidate.telefoneFixo1 = telefoneFixo1;
        newCandidate.telefoneFixo2 = telefoneFixo2;
        newCandidate.celular = celular;
        newCandidate.contato = contato;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.possuiVeiculo = possuiVeiculo;
        newCandidate.habilitacao = habilitacao;


        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};