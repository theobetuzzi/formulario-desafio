const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nomeCompleto: { type: String, unique: false, required: true },
    cargoPretendido: { type: String, unique: false, required: true },
    dataDeNascimento: { type: String, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: false },
    sexo: { type: String, unique: false, required: false },
    cep: { type: Number, unique: false, required: true },
    endereco: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    UF: { type: String, unique: false, required: true },
    telefoneFixo1: { type: String, unique: false, required: false },
    telefoneFixo2: { type: String, unique: false, required: false },
    celular: { type: String, unique: false, required: true },
    contato: { type: String, unique: false, required: false },
    email: { type: String, unique: false, required: true },
    identidade: { type: String, unique: false, required: true },
    cpf: { type: Number, unique: true, required: true },
    possuiVeiculo: { type: String, unique: false, required: false },
    habilitacao: { type: String, unique: false, required: false },
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);