function createUserSession(req, user, action) {
    req.session.udi = user._id.toString();
    req.session.save(action);
}

module.exports = {
    createUserSession: createUserSession
}