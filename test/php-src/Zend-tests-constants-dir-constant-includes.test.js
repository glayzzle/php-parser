// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/dir-constant-includes.phpt
  it("__DIR__ constant test with includes", function () {
    expect(parser.parseCode("<?php\necho __DIR__ . \"\\n\";\necho dirname(__FILE__) . \"\\n\";\ninclude 'fixtures/folder1/fixture.inc';\ninclude 'fixtures/folder2/fixture.inc';\ninclude 'fixtures/folder3/fixture.inc';\ninclude 'fixtures/folder4/fixture.inc';\n?>")).toMatchSnapshot();
  });
});
