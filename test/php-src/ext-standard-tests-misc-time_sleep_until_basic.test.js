// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/time_sleep_until_basic.phpt
  it("time_sleep_until() function - basic test for time_sleep_until()", function () {
    expect(parser.parseCode("<?php\n$time = microtime(true) + 2;\n$sleepUntil = (int) $time;\nvar_dump(time_sleep_until($sleepUntil));\n$now = microtime(true);\nif (substr(PHP_OS, 0, 3) == 'WIN') {\n    // on windows, time_sleep_until has millisecond accuracy while microtime() is accurate\n    // to 10th of a second. this means there can be up to a .9 millisecond difference\n    // which will fail this test. this test randomly fails on Windows and this is the cause.\n    //\n    // fix: round to nearest millisecond\n    // passes for up to .5 milliseconds less, fails for more than .5 milliseconds\n    // should be fine since time_sleep_until() on Windows is accurate to the\n    // millisecond(.5 rounded up is 1 millisecond)\n    // In practice, on slower machines even that can fail, so giving yet 50ms or more.\n    $tmp = round($now, 3);\n    $now = $tmp >= (int)$time ? $tmp : $tmp + .05;\n}\n// Add some tolerance for early wake on macos. Reason unknown.\nif ($now + 0.002 >= $sleepUntil) {\n    echo \"Success\\n\";\n} else {\n    echo \"Sleep until (before truncation): \", $time, \"\\n\";\n    echo \"Sleep until: \", $sleepUntil, \"\\n\";\n    echo \"Now: \", $now, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
