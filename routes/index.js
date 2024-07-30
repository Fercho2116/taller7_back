var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Obtener todos los usuarios con descripción del perfil
router.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({
      include: {
        model: Perfil,
        attributes: ['descripcion']
      }
    });
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear un nuevo usuario
router.post('/usuarios', async (req, res) => {
  try {
    const { usuario, nombre, apellido, id_perfil } = req.body;
    const nuevoUsuario = await Usuario.create({ usuario, nombre, apellido, id_perfil });
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Obtener todos los perfiles
router.get('/perfiles', async (req, res) => {
  try {
    const perfiles = await Perfil.findAll();
    res.json(perfiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
