// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/012.phpt
  it("Strict comparison in match expression", function () {
    expect(parser.parseCode("<?php\nfunction wrong() {\n    throw new Exception();\n}\nvar_dump(match (0) {\n    null => wrong(),\n    false => wrong(),\n    0.0 => wrong(),\n    [] => wrong(),\n    '' => wrong(),\n    0 => 'int',\n});\nfunction get_value() {\n    return 0;\n}\nvar_dump(match (get_value()) {\n    null => wrong(),\n    false => wrong(),\n    0.0 => wrong(),\n    [] => wrong(),\n    '' => wrong(),\n    0 => 'int',\n    default => 'default',\n});\n?>")).toMatchSnapshot();
  });
});
