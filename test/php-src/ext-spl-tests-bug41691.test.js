// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug41691.phpt
  it("Bug #41691 (ArrayObject::exchangeArray hangs Apache)", function () {
    expect(parser.parseCode("<?php\nclass A extends ArrayObject {\n    public function __construct($dummy, $flags) {\n        parent::__construct($this, $flags);\n    }\n    public $a;\n    public $b;\n    public $c;\n}\n$a = new A(null, ArrayObject::ARRAY_AS_PROPS );\nvar_dump($a->exchangeArray(array('a'=>1,'b'=>1,'c'=>1)));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
