//Gate Homepage

exports.homepage = async (req, res) => {
    const locals = {
        title: 'Note Taking',
        description: 'Note taking app'
    }
    res.render('index',{
        locals,
        layout: '../views/layouts/front-pageLayout.ejs'
    });
}

exports.about = async (req, res) => {
    const local = {
        title: 'about page',
        description: 'Note taking app'
    }
    res.render('about', local);
}
