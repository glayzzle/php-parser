// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/recv_init_ref_type.phpt
  it("Check by-ref RECV_INIT with single type", function () {
    expect(parser.parseCode("<?php\nfunction test(array &$foo = []) {\n}\ntry {\n    $bar = 42;\n    test($bar);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
