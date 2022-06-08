// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_012.phpt
  it("SPL: ArrayIterator::count", function () {
    expect(parser.parseCode("<?php\necho \"===Array===\\n\";\n$a = array('zero' => 0, 'one' => 1, 'two' => 2);\n$it = new ArrayIterator($a);\nvar_dump($it->count());\nforeach($it as $key => $val)\n{\n    echo \"$key=>$val\\n\";\n    var_dump($it->count());\n}\nvar_dump($it->count());\necho \"===Object===\\n\";\nclass test\n{\n    public $zero = 0;\n    protected $pro;\n    public $one = 1;\n    private $pri;\n    public $two = 2;\n}\n$o = new test;\n$it = new ArrayIterator($o);\nvar_dump($it->count());\nforeach($it as $key => $val)\n{\n    echo \"$key=>$val\\n\";\n    var_dump($it->count());\n}\nvar_dump($it->count());\n?>")).toMatchSnapshot();
  });
});
