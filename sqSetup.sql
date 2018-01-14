CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(50) NOT NULL,
    task_owner VARCHAR(50) NOT NULL,
    task_priority VARCHAR(10) NOT NULL,
    notes VARCHAR(255) DEFAULT 'None'
);


INSERT INTO tasks (task_name, task_owner, task_priority, notes)
VALUES ('Mow Lawn', 'Ernie', 'Medium', 'Bag the grass'), ('Wash Dishes', 'Ana', 'High', '');

INSERT INTO tasks (task_name, task_owner, task_priority)
VALUES ('Clean Garage', 'Corbin', 'Low');
