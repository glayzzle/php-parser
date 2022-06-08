// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug35411.phpt
  it("Bug #35411 (Regression with \\{$ handling)", function () {
    expect(parser.parseCode("<?php\n$abc = \"bar\";\necho \"foo\\{$abc}baz\\n\";\necho \"foo\\{ $abc}baz\\n\";\necho <<<TEST\nfoo{$abc}baz\nfoo\\{$abc}baz\nfoo\\{ $abc}baz\nTEST;\n?>")).toMatchSnapshot();
  });
});
