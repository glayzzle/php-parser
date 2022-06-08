// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mysqli/tests/mysqli_result_invalid_mode.phpt
  it("mysqli_result(), invalid mode", function () {
    expect(parser.parseCode("<?php\n    require('connect.inc');\n    require('table.inc');\n    $valid = array(MYSQLI_STORE_RESULT, MYSQLI_USE_RESULT);\n    $invalidModes = [-1, 152];\n    foreach ($invalidModes as $mode) {\n        try {\n            new mysqli_result($link, $mode);\n        } catch (\\ValueError $e) {\n            echo $e->getMessage() . \\PHP_EOL;\n        }\n    }\n?>")).toMatchSnapshot();
  });
});
