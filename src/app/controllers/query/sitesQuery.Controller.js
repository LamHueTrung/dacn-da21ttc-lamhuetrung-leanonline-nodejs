class SitesQuery {
    
    // Render login page
    login(req, res) {
        res.render('Login', { layout: 'Login&Register'});
    }

    // Render login page
    register(req, res) {
        res.render('Register', { layout: 'Login&Register'});
    }

    // Details blog page
    detailBlog(req, res) {
        res.render('pages/blogs/detail');
    }

    // Home blog pages
    homeBlog(req, res) {
        res.render('pages/blogs/home');
    }

    //Home course pages
    learningCourse(req, res) {
        res.render('pages/courses/learning', { layout: 'learing'});
    }

    //Home course pages
    homeCourse(req, res) {
        res.render('pages/courses/home');
    }
    //Home pages
    index(req, res) {
        res.render('pages/home');
    }
};

module.exports = new SitesQuery;