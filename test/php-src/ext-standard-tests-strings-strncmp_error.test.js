// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strncmp_error.phpt
  it("Test strncmp() function : error conditions", function () {
    expect(parser.parseCode("<?php\n/* Test strncmp() function with more/less number of args and invalid args */\necho \"*** Testing strncmp() function: error conditions ***\\n\";\n$str1 = 'string_val';\n$str2 = 'string_val';\n/* Invalid argument for $len */\n$len = -10;\ntry {\n    var_dump( strncmp($str1, $str2, $len) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
