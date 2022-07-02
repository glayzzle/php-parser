// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/getrusage_basic.phpt
  it("Test getrusage() function: basic test", function () {
    expect(parser.parseCode("<?php\necho \"Simple testcase for getrusage() function\\n\";\n$dat = getrusage();\nif (!is_array($dat)) {\n    echo \"TEST FAILED : getrusage should return an array\\n\";\n}\n// echo the fields which are common to all platforms\necho \"User time used (seconds) \" . $dat[\"ru_utime.tv_sec\"] . \"\\n\";\necho \"User time used (microseconds) \" . $dat[\"ru_utime.tv_usec\"] . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
