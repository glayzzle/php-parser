// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug68553.phpt
  it("Bug #68553 (array_column: null values in $index_key become incrementing keys in result)", function () {
    expect(parser.parseCode("<?php\n$i = 100;\n/* increase the resource id to make test stable */\nwhile ($i--) {\n    $fd = fopen(__FILE__, \"r\");\n    fclose($fd);\n}\n$a = [\n    ['a' => 10],\n    ['a' => 20],\n    ['a' => true],\n    ['a' => false],\n    ['a' => fopen(__FILE__, \"r\")],\n    ['a' => -5],\n    ['a' => 7.38],\n    ['a' => null, \"test\"],\n    ['a' => null],\n];\nvar_dump(array_column($a, null, 'a'));\ntry {\n    var_dump(array_column([['a' => new stdClass]], null, 'a'));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(array_column([['a' => []]], null, 'a'));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
