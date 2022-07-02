// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/time/001.phpt
  it("microtime() function", function () {
    expect(parser.parseCode("<?php\n$passed = 0;\n$failed = 0;\n$last_m = 0;\n$last_t = 0;\n$result = '';\nset_time_limit(0);\nfor ($i=1;$i<=100000;$i++) {\n    list($micro,$time)=explode(\" \",microtime());\n    if ($time > $last_t || ($time == $last_t && $micro >= $last_m)) {\n        $passed++;\n    } else if ($failed++ <=10) {\n        $result .= sprintf('%06d', $i).\": $time $micro < $last_t $last_m\\n\";\n    }\n    $last_m = $micro;\n    $last_t = $time;\n}\necho \"Passed: $passed\\n\";\necho \"Failed: $failed\\n\";\necho $result;\n?>")).toMatchSnapshot();
  });
});
