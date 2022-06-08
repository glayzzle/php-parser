// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug40036.phpt
  it("Bug #40036 (empty() does not work correctly with ArrayObject when using ARRAY_AS_PROPS)", function () {
    expect(parser.parseCode("<?php\nclass View extends ArrayObject\n{\n    public function __construct(array $array = array())\n    {\n        parent::__construct($array, ArrayObject::ARRAY_AS_PROPS);\n    }\n}\n$view = new View();\n$view->foo = false;\n$view->bar = null;\n$view->baz = '';\nif (empty($view['foo']) || empty($view->foo)) {\n    echo \"View::foo empty\\n\";\n}\nif (empty($view['bar']) || empty($view->bar)) {\n    echo \"View::bar empty\\n\";\n}\nif (empty($view['baz']) || empty($view->baz)) {\n    echo \"View::baz empty\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
