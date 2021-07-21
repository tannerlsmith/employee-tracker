USE employees;

INSERT INTO department 
    (name)
VALUES
    ('Sales'),
    ('Engineer'),
    ('Legal'),
    ('Finance');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Leader', 30000, 1),
    ('Sales Associate', 24000, 1),
    ('Senior Engineer', 40000, 2),
    ('Engineer', 35000, 2),
    ('Financial Analyst', 50000, 4),
    ('Financial Planner', 45000, 4),
    ('Lawyer', 60000, 3),
    ('Paralegal', 55000, 3);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES 
    ('James', 'Fraser', 1, NULL),
    ('Jack', 'London', 2, 1),
    ('Robert', 'Bruce', 3, NULL),
    ('Peter', 'Greenaway', 4, 3),
    ('Derek', 'Jarman', 5, NULL);