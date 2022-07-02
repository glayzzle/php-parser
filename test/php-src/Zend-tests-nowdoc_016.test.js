// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/nowdoc_016.phpt
  it("Testing nowdocs with escape sequences", function () {
    expect(parser.parseCode("<?php\n$test = <<<'TEST'\nTEST;\nvar_dump(strlen($test));\n$test = <<<'TEST'\n\\\nTEST;\nvar_dump(strlen($test));\n$test = <<<'TEST'\n\\0\nTEST;\nvar_dump(strlen($test));\n$test = <<<'TEST'\n\\n\nTEST;\nvar_dump(strlen($test));\n$test = <<<'TEST'\n\\\\'\nTEST;\nvar_dump(strlen($test));\n?>")).toMatchSnapshot();
  });
});
