// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/assigning_intersection_types.phpt
  it("Assigning values to intersection types", function () {
    expect(parser.parseCode("<?php\ninterface X {}\ninterface Y {}\ninterface Z {}\nclass TestParent implements X, Y {}\nclass TestChild  extends TestParent implements Z {}\nclass A {\n    public X&Y&Z $prop;\n    public function method1(X&Y $a): X&Y&Z {\n        return new TestChild();\n    }\n    public function method2(X $a): X&Y {\n        return new TestParent();\n    }\n}\n$tp = new TestParent();\n$tc = new TestChild();\n$o = new A();\ntry {\n    $o->prop = $tp;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n$o->prop = $tc;\n$r = $o->method1($tp);\nvar_dump($r);\n$r = $o->method2($tp);\nvar_dump($r);\n$r = $o->method1($tc);\nvar_dump($r);\n$r = $o->method2($tc);\nvar_dump($r);\n?>")).toMatchSnapshot();
  });
});
