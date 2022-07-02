// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/missing_param.phpt
  it("Required parameter not passed", function () {
    expect(parser.parseCode("<?php\nfunction test($a, $b, $c, $d) {\n}\ntry {\n    test(a: 'a', d: 'd');\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    array_keys(strict: true);\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    array_keys([], strict: true);\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n// This works fine, as search_value is explicitly specified.\nvar_dump(array_keys([41, 42], filter_value: 42, strict: true));\n?>")).toMatchSnapshot();
  });
});
