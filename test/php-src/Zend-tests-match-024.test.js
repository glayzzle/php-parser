// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/match/024.phpt
  it("Test match strict comparison with false expression", function () {
    expect(parser.parseCode("<?php\nfunction wrong() {\n    throw new Exception();\n}\necho match (false) {\n    '' => wrong(),\n    [] => wrong(),\n    0 => wrong(),\n    0.0 => wrong(),\n    false => \"false\\n\",\n};\n?>")).toMatchSnapshot();
  });
});
