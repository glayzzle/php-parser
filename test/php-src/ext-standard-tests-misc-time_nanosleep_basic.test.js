// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/time_nanosleep_basic.phpt
  it("time_nanosleep — Delay for a number of seconds and nanoseconds", function () {
    expect(parser.parseCode("<?php\n$nano = time_nanosleep(2, 100000);\nif ($nano === true) {\n    echo \"Slept for 2 seconds, 100 milliseconds.\\n\";\n} elseif ($nano === false) {\n    echo \"Sleeping failed.\\n\";\n} elseif (is_array($nano)) {\n    $seconds = $nano['seconds'];\n    $nanoseconds = $nano['nanoseconds'];\n    echo \"Interrupted by a signal.\\n\";\n    echo \"Time remaining: $seconds seconds, $nanoseconds nanoseconds.\";\n}\n?>")).toMatchSnapshot();
  });
});
