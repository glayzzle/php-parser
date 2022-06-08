// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bitwise_not_precision_exception.phpt
  it("Promoting float precision warning to exception in bitwise_not", function () {
    expect(parser.parseCode("<?php\nset_error_handler(function($_, $msg) {\n    throw new Exception($msg);\n});\ntry {\n    var_dump(~INF);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
