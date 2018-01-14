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

