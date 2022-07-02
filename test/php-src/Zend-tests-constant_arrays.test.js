// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constant_arrays.phpt
  it("Constant arrays", function () {
    expect(parser.parseCode("<?php\ndefine('FOOBAR', [1, 2, 3, ['foo' => 'bar']]);\nconst FOO_BAR = [1, 2, 3, ['foo' => 'bar']];\n$x = FOOBAR;\n$x[0] = 7;\nvar_dump($x, FOOBAR);\n$x = FOO_BAR;\n$x[0] = 7;\nvar_dump($x, FOO_BAR);\n// ensure references are removed\n$x = 7;\n$y = [&$x];\ndefine('QUX', $y);\n$y[0] = 3;\nvar_dump($x, $y, QUX);\n// objects are allowed in arrays\ndefine('ELEPHPANT', [new StdClass]);\nvar_dump(ELEPHPANT);\n// ensure recursion doesn't crash\n$recursive = [];\n$recursive[0] = &$recursive;\ntry {\n    define('RECURSION', $recursive);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
