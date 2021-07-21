USE employees;

INSERT INTO department 
    (name)
VALUES
    ('sales'),
    ('engineer'),
    ('legal'),
    ('finance');

INSERT INTO role (employee)
    (title, salary, department_id)
VALUES
    ('Sales Leader', 30000, 100),
    ('Sales Associate', 24000, 110),
    ('Senior Engineer', 40000, 200),
    ('Engineer', 35000, 210),
    ('Financial Analyst', 50000, 400),
    ('Financial Planner', 45000, 410),
    ('Lawyer', 60000, 300),
    ('Paralegal', 55000, 310');