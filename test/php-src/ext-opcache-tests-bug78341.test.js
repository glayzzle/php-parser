// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78341.phpt
  it("Bug #78341: Failure to detect smart branch in DFA pass", function () {
    expect(parser.parseCode("<?php\nfunction test($a) {\n    // Just some dead code...\n    if (strpos(\"foo\", \"foo\") !== 0) {\n        echo \"Foo\";\n    }\n    $x = $a === null;\n    if ($x) {\n        var_dump($x);\n    }\n}\ntest(null);\n?>")).toMatchSnapshot();
  });
});
