// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unpack_iterator_by_ref_type_check.phpt
  it("Unpack iterator by reference with type check", function () {
    expect(parser.parseCode("<?php\nfunction test(T &$a) {\n}\nfunction gen() {\n    yield null;\n}\ntry {\n    test(...gen());\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
