getUser(1, (user) => {
    getRepos(user.gitHubUserName, (repos) => {
        getCommits(repos[0], (commits) => {
            console.log(commits);
        });
    });
});

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