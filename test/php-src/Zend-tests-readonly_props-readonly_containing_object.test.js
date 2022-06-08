// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/readonly_containing_object.phpt
  it("Not-modifying a readonly property holding an object", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public readonly object $prop;\n    public function __construct(object $prop) {\n        $this->prop = $prop;\n    }\n}\n$test = new Test(new stdClass);\n$test->prop->foo = 1;\n$test->prop->foo += 1;\n$test->prop->foo++;\ntry {\n    $test->prop += 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $test->prop++;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    --$test->prop;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test->prop);\n// Unfortunately this is allowed, but does not modify $test->prop.\n$ref =& $test->prop;\n$ref = new stdClass;\nvar_dump($test->prop);\n$test = new Test(new ArrayObject());\n$test->prop[] = [];\n$test->prop[0][] = 1;\nvar_dump($test->prop);\n?>")).toMatchSnapshot();
  });
});
