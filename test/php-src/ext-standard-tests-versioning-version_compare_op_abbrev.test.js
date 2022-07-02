// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/versioning/version_compare_op_abbrev.phpt
  it("version_compare() no longer supports operator abbreviations", function () {
    expect(parser.parseCode("<?php\n$abbrevs = ['', 'l', 'g', 'e', '!', 'n'];\nforeach ($abbrevs as $op) {\n    try {\n        version_compare('1', '2', $op);\n        echo \"'$op' succeeded\\n\";\n    } catch (ValueError $err) {\n        echo \"'$op' failed\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
