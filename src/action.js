const core = require('@actions/core');
const github = require('@actions/github');

const shell = require('shelljs');

async function run() {
  const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN');

  const { context = {} } = github;
  const { pull_request } = context.payload;

  console.log(context)
  console.log('------')
  console.log(context.payload)

  console.log('hello')
  //Create repos folder
//   shell.cd('..');
//   shell.exec('mkdir repos');
//   shell.cd('./repos');
//   //Clone
//   shell.exec('git clone https://github.com/beefyfinance/beefy-app');
//   shell.cd('./beefy-app');
//   shell.exec('git checkout prod');
//   shell.cd('..');
//   shell.exec(`git clone https://${GITHUB_TOKEN}@github.com/beefyfinance/beefy-v2`);
//   shell.cd('./beefy-v2');
//   shell.exec('yarn install');
//   //Sync
//   shell.exec('yarn sync');

//   //Check for modded files
//   let out = shell.exec('git status');
//   let modified = out
//     .grep('modified')
//     .split('\n')
//     .filter(line => line.includes('src/') || line.includes('package.json'));
//   console.log(modified);
//   if (modified.length > 0) {
//     console.log('Modified files, commiting and syncing');
//     const branch = `autosync/${pull_request.number}${Math.random() * 45}`;
//     shell.exec('git add .');
//     shell.exec(`git checkout -b ${branch}`);
//     shell.exec(`git config user.email "chebiN@beefy.com"`);
//     shell.exec(`git config user.name "chebiN"`);
//     shell.exec(`git commit -m 'sync'`);
//     shell.exec('git push');
//     // shell.exec(`git push --set-upstream origin ${branch}`);
//   } else {
//     console.log('Nothing to commit');
//   }
}

run();