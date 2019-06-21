module.exports = {
    get
}

async function get(req, res) {
    return res.status(200).json({ message: 'OK' });
}