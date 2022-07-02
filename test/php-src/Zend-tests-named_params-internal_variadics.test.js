// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/internal_variadics.phpt
  it("Named params on internal functions: Variadic functions that don't support extra named args", function () {
    expect(parser.parseCode("<?php\ntry {\n    array_merge([1, 2], a: [3, 4]);\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    array_diff_key([1, 2], [3, 4], a: [5, 6]);\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
