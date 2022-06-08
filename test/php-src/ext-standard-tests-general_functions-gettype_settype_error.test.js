// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/gettype_settype_error.phpt
  it("Test gettype() & settype() functions : error conditions", function () {
    expect(parser.parseCode("<?php\n/* Test different error conditions of settype() and gettype() functions */\necho \"**** Testing gettype() and settype() functions ****\\n\";\necho \"\\n*** Testing settype(): error conditions ***\\n\";\n// passing an invalid type to set\ntry {\n    settype( $var, \"unknown\" );\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
