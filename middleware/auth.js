exports.isAdmin = (req, res, next) => {
    if (req.session.isAdmin == true) {
        next();
    }else{
        res.redirect('/admin/login')
    }
}