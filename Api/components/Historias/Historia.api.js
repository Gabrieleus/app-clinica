const historiaModel = require ('./Historias.model');

module.exports.registrar = function(req, res){
    let nuevaHistoria = new historiaModel({
        Nombre : req.body.Nombre,
        Edad : req.body.Edad
    });

    nuevoLibro.save(function(error){
        if(error){
            res.json({
                success : false,
                msj : 'La historia no pudo ser registrada: ' + error
            })
        }else{
            res.json({
            success: true,
            msj : 'la historia ha sido registrada'
            });
        };
    });

};