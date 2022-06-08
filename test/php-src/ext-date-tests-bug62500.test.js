// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug62500.phpt
  it("Bug #62500 (Segfault in DateInterval class when extended)", function () {
    expect(parser.parseCode("<?php\nclass Crasher extends DateInterval {\n    public $foo;\n    public function __construct($time_spec) {\n        var_dump($this->foo);\n        $this->foo = 3;\n        var_dump($this->foo);\n        var_dump($this->{2});\n        parent::__construct($time_spec);\n    }\n}\ntry {\n    $c = new Crasher('blah');\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
