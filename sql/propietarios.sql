INSERT INTO propietarios(nombre, inmueble, correo, telefono)
VALUES ('leonardo', 'pb-a', 'leorrc96@gmail.com', '04160832957'),
       ('barbara', 'pb-b', 'barba@gmail.com', '04160832957'),
       ('yanira', 'pb-c', '12@gmail.com', '5555555'),
       ('roberto', 'pb-d', '123@gmai.com', '5555555');


-------------------------------------------------------------------------
-- SELECCION DE DATA:

-- Seleccionar los propietarios que tengan deduas incluyendo el total
SELECT 
    propietarios.inmueble, 
    propietarios.nombre,
    COUNT(propietarios.inmueble) AS meses,
    SUM(recibos.monto) AS total FROM deudas
INNER JOIN propietarios 
    ON deudas.propietario_id = propietarios.id
INNER JOIN recibos
    ON deudas.recibo_id = recibos.id
GROUP BY propietarios.inmueble, propietarios.nombre;

-- Seleccionar todos los propietarios con cada mes que deben
SELECT 
    propietarios.inmueble,
    propietarios.nombre,
    recibos.mes,
    recibos.año,
    recibos.monto
FROM deudas
INNER JOIN propietarios 
    ON deudas.propietario_id = propietarios.id
INNER JOIN recibos
    ON deudas.recibo_id = recibos.id;