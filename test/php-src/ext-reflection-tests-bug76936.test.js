// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug76936.phpt
  it("Bug #76936: Objects cannot access their private attributes while handling reflection errors", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public $dummy1;\n    public $dummy2;\n}\nclass ErrorHandler {\n    private $private = 'THIS IS PRIVATE'.\"\\n\";\n    function __construct() {\n        set_error_handler(\n            function ($errno, $errstr, $errfile, $errline) {\n                $this->handleError($errno, $errstr, $errfile, $errline);\n            }\n        );\n    }\n    private function handleError($errno, $errstr, $errfile, $errline, $errmodule = null) {\n        echo __METHOD__. \" dealing with error $errstr\\n\";\n        // This attribute is no longer accessible in this object.  Same for other\n        // objects and their private attributes once we reach in this state.\n        echo $this->private;\n    }\n}\n$errorHandler = new ErrorHandler();\n$f = new Foo;\nunset($f->dummy2);\nforeach ((new ReflectionObject($f))->getProperties() as $p) {\n    echo $p->getName() .' = '. $p->getValue($f) .\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
