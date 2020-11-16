CREATE TABLE propietarios (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR( 50 ) NOT NULL,
    inmueble VARCHAR ( 20 ) NOT NULL UNIQUE,
    correo VARCHAR ( 50 ) UNIQUE NOT NULL,
    telefono VARCHAR ( 20 )
);

CREATE TABLE recibos (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    mes VARCHAR ( 20 ) NOT NULL,
    year VARCHAR ( 4 ) NOT NULL,
    monto NUMERIC (6, 2) NOT NULL
);

CREATE TABLE deudas2 (
    id INT GENERATED ALWAYS AS IDENTITY,
    propietario_id INT NOT NULL,
    recibo_id INT NOT NULL,
    PRIMARY KEY (propietario_id, recibo_id),
    FOREIGN KEY (propietario_id)
        REFERENCES propietarios (id),
    FOREIGN KEY (recibo_id)
        REFERENCES recibos (id)
);

