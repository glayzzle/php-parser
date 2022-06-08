// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constants/dir-constant-nested_includes.phpt
  it("__DIR__ constant test with nested includes", function () {
    expect(parser.parseCode("<?php\necho __DIR__ . \"\\n\";\necho dirname(__FILE__) . \"\\n\";\ninclude 'fixtures/folder1/fixture.inc';\ninclude 'fixtures/folder1/subfolder1/fixture.inc';\ninclude 'fixtures/folder1/subfolder2/fixture.inc';\ninclude 'fixtures/folder1/subfolder3/fixture.inc';\ninclude 'fixtures/folder1/subfolder4/fixture.inc';\ninclude 'fixtures/folder2/fixture.inc';\ninclude 'fixtures/folder2/subfolder1/fixture.inc';\ninclude 'fixtures/folder2/subfolder2/fixture.inc';\ninclude 'fixtures/folder2/subfolder3/fixture.inc';\ninclude 'fixtures/folder2/subfolder4/fixture.inc';\ninclude 'fixtures/folder3/fixture.inc';\ninclude 'fixtures/folder3/subfolder1/fixture.inc';\ninclude 'fixtures/folder3/subfolder2/fixture.inc';\ninclude 'fixtures/folder3/subfolder3/fixture.inc';\ninclude 'fixtures/folder3/subfolder4/fixture.inc';\ninclude 'fixtures/folder4/fixture.inc';\ninclude 'fixtures/folder4/subfolder1/fixture.inc';\ninclude 'fixtures/folder4/subfolder2/fixture.inc';\ninclude 'fixtures/folder4/subfolder3/fixture.inc';\ninclude 'fixtures/folder4/subfolder4/fixture.inc';\n?>")).toMatchSnapshot();
  });
});
