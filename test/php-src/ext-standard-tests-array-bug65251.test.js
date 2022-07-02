// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug65251.phpt
  it("Bug #65251: array_merge_recursive() recursion detection broken", function () {
    expect(parser.parseCode("<?php\n/* This no longer involves any recursion. */\ntry {\n    array_merge_recursive($GLOBALS, $GLOBALS);\n} catch (\\Error $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
