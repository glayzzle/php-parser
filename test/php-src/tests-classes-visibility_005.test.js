// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/visibility_005.phpt
  it("ZE2 foreach and property visibility", function () {
    expect(parser.parseCode("<?php\nclass base\n{\n    public $a=1;\n    protected $b=2;\n    private $c=3;\n    function f()\n    {\n        foreach($this as $k=>$v) {\n            echo \"$k=>$v\\n\";\n        }\n    }\n}\nclass derived extends base\n{\n}\n$o = new base;\n$o->d = 4;\necho \"===base::function===\\n\";\n$o->f();\necho \"===base,foreach===\\n\";\nforeach($o as $k=>$v) {\n    echo \"$k=>$v\\n\";\n}\n$o = new derived;\n$o->d = 4;\necho \"===derived::function===\\n\";\n$o->f();\necho \"===derived,foreach===\\n\";\nforeach($o as $k=>$v) {\n    echo \"$k=>$v\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
