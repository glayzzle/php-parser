// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strncasecmp_error.phpt
  it("Test strncasecmp() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strncasecmp() function: error conditions ***\\n\";\n$str1 = 'string_val';\n$str2 = 'string_val';\necho \"-- Testing strncasecmp() function with invalid argument --\\n\";\n$len = -10;\ntry {\n    var_dump( strncasecmp($str1, $str2, $len) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
