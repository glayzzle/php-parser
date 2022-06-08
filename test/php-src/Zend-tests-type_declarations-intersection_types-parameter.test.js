// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/parameter.phpt
  it("Intersection types in parameters", function () {
    expect(parser.parseCode("<?php\ninterface A {}\ninterface B {}\nclass Foo implements A, B {}\nclass Bar implements A {}\nfunction foo(A&B $bar) {\n    var_dump($bar);\n}\nfoo(new Foo());\ntry {\n    foo(new Bar());\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
