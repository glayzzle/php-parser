// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/duplicate_param.phpt
  it("Duplicate param", function () {
    expect(parser.parseCode("<?php\nfunction test($a) {}\ntry {\n    test(a: 1, a: 2);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test(1, a: 2);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
