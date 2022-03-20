const core = require('@actions/core');
const github = require('@actions/github');

// const { Octokit } = require("@octokit/rest");

const shell = require('shelljs');

async function run() {
    const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');



    const { context = {} } = github;
    const { pull_request, repository } = context.payload;
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


    shell.exec('hub clone beefyfinance/beefy-app')
    // shell.cd('mkdir repos');
    // shell.cd('./repos')
    // shell.exec('git clone https://github.com/beefyfinance/beefy-app');
    // shell.cd('./beefy-app');
    // shell.exec('git checkout prod');
    // shell.exec('git pull');
    // shell.cd('..');
    // shell.exec(`git clone https://${GITHUB_TOKEN}@github.com/beefyfinance/beefy-v2`);
    // shell.cd('./beefy-v2');
    // shell.exec('yarn install');
    // shell.exec('yarn sync');
    // let out = shell.exec('git status');
    // let modified = out.grep('modified').split('\n').filter(line => line.includes("src/") || line.includes("yarn.lock")|| line.includes('package.json'));
    // console.log(modified);
    // if (modified.length > 0) {
    //     console.log('Modified files, commiting and syncing')
    //     shell.exec('git add .');
    //     shell.exec(`git checkout -b auto-sync/${pull_request}${Math.random(45)}`);
    // } else {
    //     console.log('Nothing to commit');
    // }

}

run();