// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_on_object.phpt
  it("Using ::class on an object", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\nvar_dump($obj::class);\n$ref =& $obj;\nvar_dump($ref::class);\nvar_dump((new stdClass)::class);\n// Placed in a function to check that opcache doesn't perform incorrect constprop.\nfunction test() {\n    $other = null;\n    var_dump($other::class);\n}\ntry {\n    test();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
