// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug38146.phpt
  it("Bug #38146 (Cannot use array returned from foo::__get('bar') in write context)", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public function __get($member) {\n        $f = array(\"foo\"=>\"bar\",\"bar\"=>\"foo\");\n        return $f;\n    }\n}\n$f = new foo();\nforeach($f->bar as $key => $value) {\n    print \"$key => $value\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
