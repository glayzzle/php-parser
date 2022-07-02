// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_095.phpt
  it("Typed properties in internal classes", function () {
    expect(parser.parseCode("<?php\n// Internal typed properties\n$obj = new _ZendTestClass;\nvar_dump($obj->intProp);\ntry {\n    $obj->intProp = \"foobar\";\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$obj->intProp = 456;\ntry {\n    $obj->classProp = $obj;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$obj->classProp = new stdClass;\nvar_dump($obj);\n// Inherit from internal class\nclass Test extends _ZendTestClass {\n}\n$obj = new Test;\nvar_dump($obj->intProp);\ntry {\n    $obj->intProp = \"foobar\";\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$obj->intProp = 456;\ntry {\n    $obj->classProp = $obj;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$obj->classProp = new stdClass;\nvar_dump($obj);\n// Static internal typed properties\nvar_dump(_ZendTestClass::$staticIntProp);\ntry {\n    _ZendTestClass::$staticIntProp = \"foobar\";\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n_ZendTestClass::$staticIntProp = 456;\nvar_dump(_ZendTestClass::$staticIntProp);\n?>")).toMatchSnapshot();
  });
});
