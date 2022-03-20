// const core = require('@actions/core');
// const github = require('@actions/github');

// const { Octokit } = require("@octokit/rest");

const shell = require('shelljs');

async function run() {
    // const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');



    // const { context = {} } = github;
    // const { pull_request, repository } = context.payload;
    // console.log('context')
    // console.log(context);
    // console.log('---')
    // console.log('Attempting sync!');
    // console.log('branching');
    // console.log(pull_request.number);
    // console.log(pull_request);
    // console.log('@@')
    // console.log(pull_request.paths)
    // console.log('REPO');
    // console.log(repository);

    

    // const octokit = new Octokit(GITHUB_TOKEN);

    // let resp = await octokit.pulls.listFiles({
    //     owner: repository.full_name.split('/')[0], 
    //     repo: repository.full_name.split('/')[1],
    //     pull_number: pull_request.number
    // });

    // console.log(resp);

    console.log('___')
    console.log(shell.pwd());
    console.log('___')
    shell.ls();
    console.log('___')
    console.log(shell.ls());
    shell.cd('./repos');
    shell.exec('git clone https://github.com/beefyfinance/beefy-app')
    console.log(shell.ls());
}

run();