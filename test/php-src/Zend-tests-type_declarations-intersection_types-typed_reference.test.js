// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/typed_reference.phpt
  it("Intersection types and typed reference", function () {
    expect(parser.parseCode("<?php\ninterface X {}\ninterface Y {}\ninterface Z {}\nclass A implements X, Y, Z {}\nclass B implements X, Y {}\nclass Test {\n    public X&Y $y;\n    public X&Z $z;\n}\n$test = new Test;\n$r = new A;\n$test->y =& $r;\n$test->z =& $r;\ntry {\n    $r = new B;\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
