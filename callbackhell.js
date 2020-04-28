console.log('Before');
// Used named functions to make code more readable
// getUser(1, (user) => {
//     getRepositories(user.gitHubUsername, (repos) => {
//         getCommits(repos[0], (commits) => {
//             console.log(commits);
//         });
//     });
// });

// Promise based Approach
// getUser(1)
//     .then(user => getRepositories(user.gitHubUsername))
//     .then(repos => getCommits(repos[0]))
//     .then(commits => console.log(commits))
//     .catch(err => console.log('Error', err.message));

// Async and Await
const p = document.querySelector('p');
console.log(p);

async function displayCommits() {
    try {
        const user = await getUser(1);  
        const repos = await getRepositories(user.gitHubUsername);
        console.log(repos);
        const commits = await getCommits(repos[0]);
        console.log(commits);
        p.textContent = commits;
    }
    catch(err) {
        console.log('Error', err.message);
    }
}

displayCommits();

console.log('after');

// Named functions that return a promise with the resolved data

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from a database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['repo1', 'repo2', 'repo3']);
            // reject(new Error('Could not get the repos.'));
        }, 2000);
    });
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling GitHub API...');
            resolve(['commit']);
        }, 2000);
    });
}