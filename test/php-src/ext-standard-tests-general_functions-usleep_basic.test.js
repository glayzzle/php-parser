// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/usleep_basic.phpt
  it("Test usleep() function", function () {
    expect(parser.parseCode("<?php\nset_time_limit(20);\necho \"*** Testing usleep() : basic functionality ***\\n\";\n$sleeptime = 1000000; // == 1 seconds\n// Test passes if sleeps for at least 98% of specified time\n$sleeplow = $sleeptime - ($sleeptime * 2 /100);\n$time_start = microtime(true);\n// Sleep for a while\nusleep($sleeptime);\n$time_end = microtime(true);\n$time = ($time_end - $time_start) * 1000 * 1000;\n$summary = \"Thread slept for \" . $time . \" micro-seconds\\n\";\nif ($time >= $sleeplow) {\n    echo \"TEST PASSED: $summary\";\n} else {\n    echo \"TEST FAILED: $summary\";\n}\n?>")).toMatchSnapshot();
  });
});
