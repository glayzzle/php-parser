// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69532.phpt
  it("Bug #69532: array_multisort is chocking when using it's own constants", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\n$origins = array();\n$profiles = array();\n$all_files = array();\narray_multisort($origins, SORT_ASC, $profiles, SORT_ASC, $all_files);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
