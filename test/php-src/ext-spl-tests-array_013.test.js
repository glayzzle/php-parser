// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/array_013.phpt
  it("SPL: ArrayIterator::append", function () {
    expect(parser.parseCode("<?php\nif (!class_exists('NoRewindIterator', false))\n{\n    require_once(__DIR__ . '/../examples/norewinditerator.inc');\n}\necho \"===Array===\\n\";\n$a = array(0 => 'zero', 1 => 'one', 2 => 'two');\n$it = new ArrayIterator($a);\nforeach($it as $key => $val)\n{\n    echo \"$key=>$val\\n\";\n}\necho \"===Append===\\n\";\n$it->append('three');\n$it->append('four');\nforeach(new NoRewindIterator($it) as $key => $val)\n{\n    echo \"$key=>$val\\n\";\n}\necho \"===Object===\\n\";\nclass test\n{\n    public $zero = 0;\n    protected $pro;\n    public $one = 1;\n    private $pri;\n    public $two = 2;\n}\n$o = new test;\n$it = new ArrayIterator($o);\nforeach($it as $key => $val)\n{\n    echo \"$key=>$val\\n\";\n}\necho \"===Append===\\n\";\n$it->append('three');\n$it->append('four');\nforeach(new NoRewindIterator($it) as $key => $val)\n{\n    echo \"$key=>$val\\n\";\n}\nvar_dump($o->{0}); /* doesn't wotk anyway */\n?>\n===DONE===")).toMatchSnapshot();
  });
});
