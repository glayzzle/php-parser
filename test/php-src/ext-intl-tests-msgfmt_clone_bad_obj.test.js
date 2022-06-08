// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/msgfmt_clone_bad_obj.phpt
  it("Cloning unconstructed MessageFormatter", function () {
    expect(parser.parseCode("<?php\nclass A extends MessageFormatter {\n    function __construct() {}\n}\n$a = new A;\ntry {\n    $b = clone $a;\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
