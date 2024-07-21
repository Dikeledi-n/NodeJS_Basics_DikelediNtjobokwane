let users = []; // In-memory array to store users

// Function to add a user
exports.addUser = (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).send('User added successfully');
};

// Function to retrieve all users
exports.getUsers = (req, res) => {
    res.status(200).json(users);
};
