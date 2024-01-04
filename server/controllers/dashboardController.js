exports.dashboard = async (req, res) => {
    const locals = {
        title: 'Dashboard',
        description: 'Note taking app'
    }
    res.render('dashboard/index',{
        locals,
        layout: '../views/layouts/dashboard'
    });
}