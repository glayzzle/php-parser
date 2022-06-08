// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/intersection_types/missing_interface_intersection_type.phpt
  it("Missing one element of intersection type", function () {
    expect(parser.parseCode("<?php\ninterface X {}\ninterface Y {}\ninterface Z {}\nclass A implements X {}\nclass Collection {\n    public X&Y $intersect;\n}\nfunction foo(): X&Y {\n    return new A();\n}\nfunction bar(X&Y $o): void {\n    var_dump($o);\n}\ntry {\n    $o = foo();\n    var_dump($o);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$c = new Collection();\n$a = new A();\ntry {\n    $c->intersect = $a;\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    bar($a);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
