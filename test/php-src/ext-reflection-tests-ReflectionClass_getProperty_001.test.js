// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getProperty_001.phpt
  it("ReflectionClass::getProperty()", function () {
    expect(parser.parseCode("<?php\nclass pubf {\n    public $a;\n    static public $s;\n}\nclass subpubf extends pubf {\n}\nclass protf {\n    protected $a;\n    static protected $s;\n}\nclass subprotf extends protf {\n}\nclass privf {\n    private $a;\n    static protected $s;\n}\nclass subprivf extends privf  {\n}\n$classes = array(\"pubf\", \"subpubf\", \"protf\", \"subprotf\",\n                 \"privf\", \"subprivf\");\nforeach($classes as $class) {\n    echo \"Reflecting on class $class: \\n\";\n    $rc = new ReflectionClass($class);\n    try {\n        echo \"  --> Check for s: \";\n        var_dump($rc->getProperty(\"s\"));\n    } catch (exception $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        echo \"  --> Check for a: \";\n        var_dump($rc->getProperty(\"a\"));\n    } catch (exception $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        echo \"  --> Check for A: \";\n        var_dump($rc->getProperty(\"A\"));\n    } catch (exception $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n    try {\n        echo \"  --> Check for doesNotExist: \";\n        var_dump($rc->getProperty(\"doesNotExist\"));\n    } catch (exception $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
