// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_076.phpt
  it("Computation of intersection types for typed reference to typed property assignments", function () {
    expect(parser.parseCode("<?php\nclass A {}\nclass B extends A {}\nclass Test {\n    public int $int;\n    public float $float;\n    public ?int $nint;\n    public ?string $nstring;\n    public array $array;\n    public object $object;\n    public iterable $iterable;\n    public Iterator $Iterator;\n    public A $A;\n    public B $B;\n}\nfunction invalid(Test $test, string $prop1, string $prop2, $value) {\n    try {\n        $test->$prop2 = $value;\n        $test->$prop1 =& $test->$prop2;\n        echo \"Invalid assignment $prop1 =& $prop2 did not error\\n\";\n    } catch (TypeError $e) {}\n    try {\n        $test->$prop1 = $value;\n        $test->$prop2 =& $test->$prop1;\n        echo \"Invalid assignment $prop2 =& $prop1 did not error\\n\";\n    } catch (TypeError $e) {}\n}\nfunction valid(Test $test, string $prop1, string $prop2, $value) {\n    try {\n        $test->$prop2 = $value;\n        $test->$prop1 =& $test->$prop2;\n    } catch (TypeError $e) {\n        echo \"Valid assignment $prop1 =& $prop2 threw {$e->getMessage()}\\n\";\n    }\n    try {\n        $test->$prop1 = $value;\n        $test->$prop2 =& $test->$prop1;\n    } catch (TypeError $e) {\n        echo \"Valid assignment $prop2 =& $prop1 threw {$e->getMessage()}\\n\";\n    }\n}\n$test = new Test;\ninvalid($test, 'int', 'float', 42.0);\nvalid($test, 'int', 'nint', 42);\ninvalid($test, 'int', 'nint', null);\nvalid($test, 'nint', 'nstring', null);\ninvalid($test, 'nint', 'nstring', '42');\nvalid($test, 'A', 'A', new A);\nvalid($test, 'A', 'B', new B);\ninvalid($test, 'A', 'B', new A);\nvalid($test, 'iterable', 'array', [1, 2, 3]);\nvalid($test, 'A', 'object', new A);\ninvalid($test, 'A', 'object', new Test);\nvalid($test, 'iterable', 'Iterator', new ArrayIterator);\ninvalid($test, 'Iterator', 'iterable', [1, 2, 3]);\nvalid($test, 'object', 'iterable', new ArrayIterator);\ninvalid($test, 'iterable', 'object', new stdClass);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
