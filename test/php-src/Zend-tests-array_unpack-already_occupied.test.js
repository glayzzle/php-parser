// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/array_unpack/already_occupied.phpt
  it("Appending to an array via unpack may fail", function () {
    expect(parser.parseCode("<?php\n$arr = [1, 2, 3];\ntry {\n    var_dump([PHP_INT_MAX-1 => 0, ...$arr]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump([PHP_INT_MAX-1 => 0, ...[1, 2, 3]]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nconst ARR = [1, 2, 3];\nfunction test($x = [PHP_INT_MAX-1 => 0, ...ARR]) {}\ntry {\n    test();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
