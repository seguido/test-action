const core = require('@actions/core');
const github = require('@actions/github');

const { Octokit } = require("@octokit/rest");

async function run() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');



    const { context = {} } = github;
    const { pull_request } = context.payload;
    console.log('context')
    console.log(context);
    console.log('---')
    console.log('Attempting sync!');
    console.log('branching');
    console.log(pull_request.number);
    console.log(pull_request);
    console.log('@@')
    console.log(pull_request.paths)
    console.log('REPO');
    console.log(context.repository);

    

    // const octokit = new Octokit(GITHUB_TOKEN);

    // octokit.pulls.listFiles({owner: , repo: pull_request.head.repo.full_name})

}

run();