// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/init_array_illegal_offset_type.phpt
  it("INIT_ARRAY with illegal offset type", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    return [new stdClass => null];\n}\ntry {\n    test();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
