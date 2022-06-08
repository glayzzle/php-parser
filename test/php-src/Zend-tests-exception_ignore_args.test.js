// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_ignore_args.phpt
  it("Exceptions ignoring arguments", function () {
    expect(parser.parseCode("<?php\n$function = function(string $user, string $pass) {\n    throw new Exception();\n};\nini_set(\"zend.exception_ignore_args\", 1);\n$function(\"secrets\", \"arewrong\");\n?>")).toMatchSnapshot();
  });
});
