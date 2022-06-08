// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_close_error.phpt
  it("Test finfo_close() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing finfo_close() : error conditions ***\\n\";\necho \"\\n-- Testing finfo_close() function with wrong resource type --\\n\";\n$fp = fopen( __FILE__, 'r' );\ntry {\n    var_dump( finfo_close( $fp ) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
