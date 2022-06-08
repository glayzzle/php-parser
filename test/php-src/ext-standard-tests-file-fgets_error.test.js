// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgets_error.phpt
  it("Test fgets() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing error conditions ***\\n\";\n$fp = fopen(__FILE__, \"r\");\n// invalid length argument\necho \"-- Testing fgets() with invalid length arguments --\\n\";\n$len = 0;\ntry {\n    var_dump( fgets($fp, $len) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$len = -10;\ntry {\n    var_dump( fgets($fp, $len) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$len = 1;\nvar_dump( fgets($fp, $len) ); // return length - 1 always, expect false\n?>")).toMatchSnapshot();
  });
});
