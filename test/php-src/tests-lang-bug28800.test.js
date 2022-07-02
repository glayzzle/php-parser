// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug28800.phpt
  it("Bug #28800 (Incorrect string to number conversion for strings starting with 'inf')", function () {
    expect(parser.parseCode("<?php\n    $strings = array('into', 'info', 'inf', 'infinity', 'infin', 'inflammable');\n    foreach ($strings as $v) {\n        try {\n            echo ($v+0).\"\\n\";\n        } catch (\\TypeError $e) {\n            echo $e->getMessage() . \\PHP_EOL;\n        }\n    }\n?>")).toMatchSnapshot();
  });
});
