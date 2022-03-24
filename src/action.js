const core = require('@actions/core');
const github = require('@actions/github');

const shell = require('shelljs');

async function run() {
  const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');
  const GITHUB_USER = core.getInput('GITHUB_USER');
  const GITHUB_EMAIL = core.getInput('GITHUB_EMAIL');

  const { context = {} } = github;

  const commit = context.sha;

  // Create repos folder
  shell.cd('..');
  shell.exec('mkdir repos');
  shell.cd('./repos');
  //Clone
  shell.exec('git clone https://github.com/beefyfinance/beefy-app');
  shell.cd('./beefy-app');
  shell.exec('git checkout prod');
  shell.cd('..');
  shell.exec(`git clone https://${GITHUB_TOKEN}@github.com/beefyfinance/beefy-v2`);
  shell.cd('./beefy-v2');
  shell.exec('yarn install');
  //Sync
  shell.exec('yarn sync');

  //Check for modded files
  let out = shell.exec('git status');
  let modified = out
    .grep('modified')
    .split('\n')
    .filter(line => line.includes('src/') || line.includes('package.json'));
  console.log(modified);
  if (modified.length > 0) {
    console.log('Modified files, commiting and syncing');
    const branch = `as/${commit}`;
    shell.exec('git add .');
    shell.exec(`git checkout -b ${branch}`);
    shell.exec(`git config user.name "${GITHUB_USER}"`);
    shell.exec(`git config user.email "${GITHUB_EMAIL}"`);
    shell.exec(`git commit -m 'sync'`);
    const diffOut = shell.exec(`git diff --name-only HEAD HEAD~1`);
    const commitedFileCount = diffOut.split('/n').filter(line => line.includes('src/') || line.includes('package.json')).length;
    if (commitedFileCount == 0) {
      return console.log('No changes after commit formatting');
    }
    shell.exec('git push');
    shell.exec(`git push --set-upstream origin ${branch}`);
  } else {
    console.log('Nothing to commit');
  }
}

run();