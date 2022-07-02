// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/023.phpt
  it("Test match strict comparison with true expression", function () {
    expect(parser.parseCode("<?php\nfunction wrong() {\n    throw new Exception();\n}\necho match (true) {\n    'truthy' => wrong(),\n    ['truthy'] => wrong(),\n    new stdClass() => wrong(),\n    1 => wrong(),\n    1.0 => wrong(),\n    true => \"true\\n\",\n};\n?>")).toMatchSnapshot();
  });
});
