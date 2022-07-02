// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/017.phpt
  it("Testing user-defined function falling out of an If into another", function () {
    expect(parser.parseCode("<?php\n$a = 1;\nfunction Test ($a) {\n    if ($a<3) {\n        return(3);\n    }\n}\nif ($a < Test($a)) {\n    echo \"$a\\n\";\n    $a++;\n}\n?>")).toMatchSnapshot();
  });
});
