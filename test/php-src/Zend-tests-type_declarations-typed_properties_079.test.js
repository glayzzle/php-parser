// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_079.phpt
  it("Test static typed properties with references", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static iterable $it = [];\n    static ?array $a;\n}\nA::$a = &A::$it;\ntry {\n    A::$it = new ArrayIterator();\n} catch (TypeError $e) { var_dump($e->getMessage()); }\nvar_dump(A::$it);\nA::$a = &$a;\nA::$it = new ArrayIterator();\ntry {\n    $a = 1;\n} catch (TypeError $e) { var_dump($e->getMessage()); }\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
