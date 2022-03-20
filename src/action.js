const core = require('@actions/core');
const github = require('@actions/github');

const { Octokit } = require("@octokit/rest");

async function run() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');


    const { context = {} } = github;
    const { pull_request } = context.payload;
    console.log('Attempting sync!');
    console.log('branching');
    console.log(pull_request.number)

    // const octokit = new Octokit(GITHUB_TOKEN);

    // octokit.repos.

}

run();