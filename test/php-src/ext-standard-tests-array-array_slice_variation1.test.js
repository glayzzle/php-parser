// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_slice_variation1.phpt
  it("Test array_slice() - Third parameter (NULL vs 0)", function () {
    expect(parser.parseCode("<?php\nvar_dump(array_slice(range(1, 3), 0, NULL, 1));\nvar_dump(array_slice(range(1, 3), 0, 0, 1));\nvar_dump(array_slice(range(1, 3), 0, NULL));\nvar_dump(array_slice(range(1, 3), 0, 0));\nvar_dump(array_slice(range(1, 3), -1, 0));\nvar_dump(array_slice(range(1, 3), -1, 0, 1));\nvar_dump(array_slice(range(1, 3), -1, NULL));\nvar_dump(array_slice(range(1, 3), -1, NULL, 1));\n$a = 'foo';\ntry {\n    var_dump(array_slice(range(1, 3), 0, $a));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(array_slice(range(1, 3), 0, $a));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
