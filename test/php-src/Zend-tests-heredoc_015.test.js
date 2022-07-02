// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/heredoc_015.phpt
  it("Testing heredoc with escape sequences", function () {
    expect(parser.parseCode("<?php\n$test = <<<TEST\nTEST;\nvar_dump(strlen($test) == 0);\n$test = <<<TEST\n\\\nTEST;\nvar_dump(strlen($test) == 1);\n$test = <<<TEST\n\\0\nTEST;\nvar_dump(strlen($test) == 1);\n$test = <<<TEST\n\\n\nTEST;\nvar_dump(strlen($test) == 1);\n$test = <<<TEST\n\\\\'\nTEST;\nvar_dump(strlen($test) == 2);\n?>")).toMatchSnapshot();
  });
});
