CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(50) NOT NULL,
    task_owner VARCHAR(50) NOT NULL,
    task_priority VARCHAR(10) NOT NULL,
	task_complete BOOLEAN DEFAULT FALSE,
    notes VARCHAR(255) DEFAULT 'None'
);


INSERT INTO tasks (task_name, task_owner, task_priority, task_complete, notes)
VALUES ('Mow Lawn', 'Ernie', 'Medium', FALSE, 'Bag the grass'), ('Wash Dishes', 'Ana', 'High', FALSE, '');

INSERT INTO tasks (task_name, task_owner, task_complete, task_priority)
VALUES ('Clean Garage', 'Corbin', TRUE, 'Low');


CREATE TABLE catagories (
    id SERIAL PRIMARY KEY,
    catagory_name VARCHAR(25) NOT NULL
);

INSERT INTO catagories (catagory_name)
VALUES ('Work Task'), ('Home Task'), ('School Task');


CREATE TABLE tasks_catagories (
    id SERIAL PRIMARY KEY,
    tasks_id INT REFERENCES tasks,
    catagories_id INT REFERENCES catagories
);

INSERT INTO tasks_catagories (tasks_id, catagories_id)
VALUES (1,2), (2,2);
