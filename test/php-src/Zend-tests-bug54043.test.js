// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug54043.phpt
  it("Bug #54043: Remove inconsitency of internal exceptions and user defined exceptions", function () {
    expect(parser.parseCode("<?php\n$time = '9999-11-33';\t// obviously invalid ;-)\n$timeZone = new DateTimeZone('UTC');\ntry {\n    $dateTime = new DateTime($time, $timeZone);\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\nvar_dump(error_get_last());\n?>")).toMatchSnapshot();
  });
});
