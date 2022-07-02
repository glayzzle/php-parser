// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/sleep_basic.phpt
  it("Test sleep() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sleep() : basic functionality ***\\n\";\n$sleeptime = 1; // sleep for 1 seconds\nset_time_limit(20);\n$time_start = microtime(true);\n// Sleep for a while\n$result = sleep($sleeptime);\n// Test passes if sleeps for at least 98% of specified time\n$sleeplow = $sleeptime - ($sleeptime * 2 /100);\n$time_end = microtime(true);\n$time = $time_end - $time_start;\necho \"Thread slept for \" . $time . \" seconds\\n\";\necho \"Return value: \" . $result . \"\\n\";\nif ($time >= $sleeplow) {\n    echo \"TEST PASSED\\n\";\n} else {\n    echo \"TEST FAILED - time is ${time} secs and sleep was ${sleeptime} secs\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
