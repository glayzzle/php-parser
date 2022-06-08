// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug64555.phpt
  it("Bug #64555: Array key within interned string gets wrong hash value", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    protected $unsetme = 1;\n    protected $keepme = 2;\n    public function test() {\n        $a = get_object_vars($this);\n        foreach ($a as $k => $v) {\n            if ($k == 'unsetme') {\n                echo \"Unsetting: $k\\n\";\n                unset($a[$k]);\n            } else if ($k == 'keepme') {\n                echo \"Changing: $k\\n\";\n                $a[$k] = 42;\n                $a['keepme'] = 43;\n            }\n        }\n        var_dump($a, array_keys($a));\n    }\n}\n$f = new Foo;\n$f->test();\n?>")).toMatchSnapshot();
  });
});
