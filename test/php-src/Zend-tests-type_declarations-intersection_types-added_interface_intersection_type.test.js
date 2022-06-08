// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/added_interface_intersection_type.phpt
  it("Added element of intersection type", function () {
    expect(parser.parseCode("<?php\ninterface X {}\ninterface Y {}\ninterface Z {}\nclass A implements X, Y, Z {}\nclass Collection {\n    public X&Y $intersect;\n}\nfunction foo(): X&Y {\n    return new A();\n}\nfunction bar(X&Y $o): void {\n    var_dump($o);\n}\n$o = foo();\nvar_dump($o);\n$c = new Collection();\n$a = new A();\n$c->intersect = $a;\necho 'OK', \\PHP_EOL;\nbar($a);\n?>")).toMatchSnapshot();
  });
});
