getUser(1, getRepositories);

// starting from the innermost anonymous function


function getRepositories(user) {
    getRepos(user.gitHubUserName, getCommits);
}
function getCommits(repos) {
    getCommits(repos[0], displayCommits);
}
function displayCommits(commits) {
    console.log(commits);
}


function getUser(id, callback) {
    setTimeout(() => {
        callback({ id: id, gitHubUserName: 'jackisbackpdx' });
    }, 2000);
}

function getRepos(username, callback) {
    setTimeout(() => {
        callback(['repo1, repo2, repo3'] + ' Username:' + username);
    }, 2000);
}

function getCommits(repos, callback) {
    setTimeout(() => {
        callback(repos[0]);
    });
}