const QUERY = {
    SELECT_USERS: 'SELECT * FROM users ORDER BY created_at DESC LIMIT 100',
    SELECT_USER: 'SELECT * FROM user WHERE id = ?',
    CREATE_USER: `INSERT INTO users (username, first_name, last_name, email, password_hash, phone, img_url) VALUES(?,?,?,?,?,?,?)`,
    UPDATE_USER: 'UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?, phone = ?, img_url = ? WHERE id = ?',
    DELETE_USER: 'DELETE FROM users WHERE id = ?'
}

export default QUERY;