CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    task_name VARCHAR(50) NOT NULL,
    task_owner VARCHAR(50) NOT NULL,
    task_priority INT NOT NULL,
    notes VARCHAR(255) DEFAULT 'None'
);
