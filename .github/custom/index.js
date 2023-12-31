import { debug, warning, error, getInput, setOutput, exportVariable, startGroup, endGroup, setFailed } from "@actions/core";
import { context } from "@actions/github";


try {
    debug('Debug Message');
    warning('Warning Message');
    error('Error Message');
    const name = getInput('who_to_greet');
    console.log(`Hello there ${name}`);
    const time = new Date();
    setOutput("time", time.toTimeString());
    exportVariable("HELLO_TIME", time);
    startGroup("Logging Github Context");
    console.log(JSON.stringify(context, null, 2));
    endGroup();
} catch(err) {
    setFailed(err.message);
}

