// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug26166.phpt
  it("Bug #26166 (__toString() crash when no values returned)", function () {
    expect(parser.parseCode("<?php\nclass Foo\n{\n    function __toString()\n    {\n        return \"Hello World!\\n\";\n    }\n}\nclass Bar\n{\n    private $obj;\n    function __construct()\n    {\n        $this->obj = new Foo();\n    }\n    function __toString()\n    {\n        return $this->obj->__toString();\n    }\n}\n$o = new Bar;\necho $o;\necho \"===NONE===\\n\";\nclass NoneTest\n{\n    function __toString() {\n    }\n}\n$o = new NoneTest;\ntry {\n    echo $o;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"===THROW===\\n\";\nclass ErrorTest\n{\n    function __toString() {\n        throw new Exception(\"This is an error!\");\n    }\n}\n$o = new ErrorTest;\ntry {\n    echo $o;\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
