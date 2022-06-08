// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/gh8289.phpt
  it("GH-8289 (Exceptions thrown within a yielded from iterator are not rethrown into the generator)", function () {
    expect(parser.parseCode("<?php\nfunction yieldFromIteratorGeneratorThrows() {\n\ttry {\n\t\tyield from new class(new ArrayIterator([1, -2])) extends IteratorIterator {\n\t\t\tpublic function key(): mixed {\n\t\t\t\tif ($k = parent::key()) {\n\t\t\t\t\tthrow new Exception;\n\t\t\t\t}\n\t\t\t\treturn $k;\n\t\t\t}\n\t\t};\n\t} catch (Exception $e) {\n\t\techo \"$e\\n\";\n\t\tyield 2;\n\t}\n}\nforeach (yieldFromIteratorGeneratorThrows() as $k => $v) {\n    var_dump($v);\n}\n?>")).toMatchSnapshot();
  });
});
