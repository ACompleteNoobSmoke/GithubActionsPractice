const core = require("@actions/core");
const github = require("@actions/github");


try {
    core.debug('Debug Message');
    core.warning('Warning Message');
    core.error('Error Message');
    const name = core.getInput('who_to_greet');
    console.log(`Hello there ${name}`);
    const time = new Date();
    core.setOutput("time", time.toTimeString());
    core.exportVariable("HELLO_TIME", time);
    core.startGroup("Logging Github Context");
    console.log(JSON.stringify(github.context, null, 2));
    core.endGroup();
} catch(err) {
    core.setFailed(err.message);
}

