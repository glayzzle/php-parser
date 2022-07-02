// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strval_error.phpt
  it("Test strval() function : usage variations  - error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strval() : error conditions ***\\n\";\nerror_reporting(E_ALL ^ E_NOTICE);\nclass MyClass\n{\n    // no toString() method defined\n}\n// Testing strval with a object which has no toString() method\necho \"\\n-- Testing strval() function with object which has not toString() method  --\\n\";\ntry {\n    var_dump( strval(new MyClass()) );\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
