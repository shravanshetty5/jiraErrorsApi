import {
    getJiraErrors,
    addJiraError,
    getJiraWithId,
} from '../controllers/controller';

const routes = (app) => {
    app.route('/jiraErrors')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getJiraErrors)

    // POST endpoint
    .post(addJiraError);

    app.route('/jiraErrors/:jiraId')
    // get specific contact
    .get(getJiraWithId);
}

export default routes;
