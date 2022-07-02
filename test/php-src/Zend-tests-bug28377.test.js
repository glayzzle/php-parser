// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug28377.phpt
  it("Bug #28377 (debug_backtrace is intermittently passing args)", function () {
    expect(parser.parseCode("<?php\nfunction doit($a, $b)\n{\n  $trace = debug_backtrace();\n  custom_callback('dereferenced', $trace);\n  custom_callback('direct', debug_backtrace());\n}\nfunction custom_callback($traceName, $btInfo)\n{\n  echo $traceName .\" -- args: \";\n  echo isset($btInfo[0]['args']) ? count($btInfo[0]['args']) : 'does not exist';\n  echo \"\\n\";\n}\ndoit('a','b');\n?>")).toMatchSnapshot();
  });
});
