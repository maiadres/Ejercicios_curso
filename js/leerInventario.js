const fs = require ( `fs`);

fs.readFile( `inventario.txt`, `utf8`,(err,data)=>{
    console.log(data);
});
