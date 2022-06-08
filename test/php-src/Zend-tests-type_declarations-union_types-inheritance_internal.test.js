// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/union_types/inheritance_internal.phpt
  it("Inheritance of union type from internal class", function () {
    expect(parser.parseCode("<?php\nclass C extends _ZendTestClass {}\n$obj = new _ZendTestChildClass;\n$obj->classUnionProp = new stdClass;\n$obj->classUnionProp = new ArrayIterator;\ntry {\n    $obj->classUnionProp = new DateTime;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$obj = new C;\n$obj->classUnionProp = new stdClass;\n$obj->classUnionProp = new ArrayIterator;\ntry {\n    $obj->classUnionProp = new DateTime;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
