function submitForm() {
    const proficiency = document.getElementById('proficiency').value;
    const company = document.getElementById('company').value;

    // Your custom error-handling logic based on proficiency
    if (proficiency === 'beginner') {
        displayResourcesForBeginner();
    } else if (proficiency === 'intermediate') {
        displayResourcesForIntermediate();
    } else if (proficiency === 'advanced') {
        displayResourcesForExpert();
    } else {
        displayGenericError();
    }
}

function displayResourcesForBeginner() {
    // Display resources for beginners
    const resourcesContainer = document.getElementById('resourcesContainer');
    resourcesContainer.innerHTML = `
        <div>
            <p>Resources for beginners...</p>
            <ul>
                <li>
                    <a href="https://techdevguide.withgoogle.com/resources/paths/assessment-preparation/">Google Tech Guide: Assessment Preparation</a>
                </li>
                <li>
                    <a href="https://leetcode.com/explore/">LeetCode: Explore problems by topic, difficulty, and company</a>
                </li>
                <li>
                    <a href="https://www.hackerrank.com/domains/algorithms/">HackerRank: Algorithm problems from various companies</a>
                </li>
                <li>
                    <a href="https://www.codewars.com/">Codewars: Coding challenges from various topics</a>
                </li>
                <li>
                    <a href="https://www.freecodecamp.org/learn/coding-interview-preparation/">FreeCodeCamp: Coding Interview Preparation</a>
                </li>
                <li>
                    <a href="https://www.pramp.com/">Pramp: Practice coding interviews with other people</a>
                </li>
            </ul>
        </div>
    `;
}

function displayResourcesForIntermediate() {
    // Display resources for intermediate proficiency
    const resourcesContainer = document.getElementById('resourcesContainer');
    resourcesContainer.innerHTML = `
        <div>
            <p>Resources for intermediate proficiency...</p>
            <ul>
    <li>
        <a href="https://www.grokkingalgorithms.com/">Grokking Algorithms: An illustrated guide for programmers and other curious people</a>
    </li>
    <li>
        <a href="https://www.coursera.org/courses/algorithms/algorithms-design-analysis/lecture/preview">Algorithms, Part I on Coursera</a>
    </li>
    <li>
        <a href="https://www.coursera.org/courses/algorithms/algorithmic-analysis-techniques/lecture/preview">Algorithms, Part II on Coursera</a>
    </li>
    <li>
        <a href="https://www.educative.io/courses/grokking-the-coding-interview">Grokking the Coding Interview</a>
    </li>
    <li>
        <a href="https://www.geeksforgeeks.org/must-do-coding-questions-for-software-engineer-interviews/">GeeksforGeeks: Must-do coding questions for software engineer interviews</a>
    </li>
    <li>
        <a href="https://www.interviewbit.com/top-programming-interview-questions/">InterviewBit: Top programming interview questions</a>
    </li>
</ul>

        </div>
    `;
}

function displayResourcesForExpert() {
    // Display resources for expert proficiency
    const resourcesContainer = document.getElementById('resourcesContainer');
    resourcesContainer.innerHTML = `
        <div>
            <p>Resources for expert proficiency...</p>
            <ul>
                <li>
                    <a href="https://www.competitiveprogramming.com/">Competitive Programming</a>
                </li>
                <li>
                    <a href="https://www.codeforces.com/">Codeforces</a>
                </li>
                <li>
                    <a href="https://atcoder.jp/contests/">AtCoder</a>
                </li>
                <li>
                    <a href="https://www.topcoder.com/">Topcoder</a>
                </li>
                <li>
                    <a href="https://leetcode.com/discuss/tag/hard/">LeetCode Hard Questions</a>
                </li>
                <li>
                    <a href="https://www.hackerrank.com/domains/algorithms/advanced/">HackerRank Advanced Algorithms</a>
                </li>
                <li>
                    <a href="https://codewars.com/collections/algorithms-hard">Codewars Hard Algorithms</a>
                </li>
            </ul>
        </div>
    `;
}

function displayGenericError() {
    // Display a generic error message
    const resourcesContainer = document.getElementById('resourcesContainer');
    resourcesContainer.innerHTML = '<p>Oops! Something went wrong. Please try again.</p>';
}

function displayResources(resources) {
    const resourcesContainer = document.getElementById('resourcesContainer');
    resourcesContainer.innerHTML = ''; // Clear previous content

    if (resources && resources.length > 0) {
        const ul = document.createElement('ul');
        resources.slice(0, 3).forEach(resource => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = resource.link;
            link.textContent = resource.title;
            li.appendChild(link);
            ul.appendChild(li);
        });
        resourcesContainer.appendChild(ul);
    } else {
        resourcesContainer.innerHTML = '<p>No resources found.</p>';
    }
}
