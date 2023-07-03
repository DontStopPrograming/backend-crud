import { pool } from '../db.js'

export const getEmployee = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employees')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export const getEmployees = async ( req, res ) => {
   try {
    const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id])
    if (rows.length <= 0 ) return res.status(404).json({
    message: 'Employees not found'
   })
    res.json(rows[0])
   } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
   }
}

export const creEmployees = async (req, res) => {
   try {
    const { name, salary } = req.body
    const [ rows ] = await pool.query('INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary])
    res.status(201).json({
        id: rows.insertId,
        name,
        salary,
    })
   } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
   }
}

export const delEmployees = async (req, res) => {
    try {
        const [ result ] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Employees not found'
    })

    res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }

    }

export const patEmployees = async(req, res) => {
    try {
    const { id } = req.params
    const { name, salary } = req.body

    const [result] = await pool.query('UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
    if(result.affectedRows === 0 ) 
        return res.status(404).json({
        message: 'Employees not found'
    })
    const [ rows ] = await pool.query('SELECT * FROM employees WHERE id = ?', [id,])
    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
    
}
