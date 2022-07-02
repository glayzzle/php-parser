// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_016.phpt
  it("Live ranges should be ordered according to \"start\" position", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($no, $msg) { throw new Exception; });\ntry {\n    $a = [];\n    $str = \"$a${\"y$a$a\"}y\";\n} catch (Exception $e) {\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
