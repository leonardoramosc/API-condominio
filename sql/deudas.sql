INSERT INTO deudas("OwnerId", "BillId")
VALUES (1, 1),
       (1, 2),
       (1, 3),
       (1, 4),
       (1, 5),
       (2, 3),
       (2, 4),
       (2, 5),
       (3, 4),
       (3, 5),
       (4, 5);

INSERT INTO deudas(monto, concepto, "OwnerId")
VALUES (6.5, 'enero 2020', 1),
       (3.5, 'febrero 2020', 1),
       (8.5, 'marzo 2020', 1),
       (3.5, 'febrero 2020', 2),
       (8.5, 'marzo 2020', 2),
       (6.5, 'enero 2020', 2),
       (3.5, 'febrero 2020', 3),
       (6.5, 'enero 2020', 4)

SELECT 
  nombre,
  inmueble,
  monto,
  concepto
FROM 
  propietarios
INNER JOIN deudas on propietarios.id = "OwnerId";

