// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_045.phpt
  it("foreach() must return properly typed references", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public int $bar = 0;\n    public float $baz = 0.5;\n    private float $privateProp = 0.5;\n    public function test() {\n        foreach ($this as $k => &$val) {\n            if ($k == 'privateProp') {\n                var_dump($val);\n                $val = 20;\n                var_dump($val);\n                try {\n                    $val = [];\n                } catch (Error $e) {\n                    echo $e->getMessage(), \"\\n\";\n                }\n            }\n        }\n    }\n}\n$foo = new Foo;\nforeach ($foo as $k => &$val) {\n    var_dump($val);\n    $val = 20;\n    var_dump($foo->$k);\n    try {\n        $val = [];\n        var_dump($foo->$k);\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\n$foo->test();\n?>")).toMatchSnapshot();
  });
});
