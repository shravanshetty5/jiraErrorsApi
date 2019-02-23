import mongoose from 'mongoose';
import { JiraSchema } from '../models/model';

const Jira = mongoose.model('Jira', JiraSchema);

export const addJiraError = (req, res) => {
    let newJira = new Jira(req.body);

    newJira.save((err, jira) => {
        if (err) {
            res.send(err);
        }
        res.json(jira);
    });
};

export const getJiraErrors = (req, res) => {
    Jira.find({}, (err, jira) => {
        if (err) {
            res.send(err);
        }
        res.json(jira);
    });
};

export const getJiraWithId = (req, res) => {
    const query = { jiraId: req.params.jiraId };
    Jira.find(query, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact);
    });
}