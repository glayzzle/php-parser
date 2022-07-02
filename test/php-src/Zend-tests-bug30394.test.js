// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30394.phpt
  it("Bug #30394 (Assignment operators yield wrong result with __get/__set)", function () {
    expect(parser.parseCode("<?php\nclass Container\n{\n    public function __get( $what )\n    {\n        return $this->_p[ $what ];\n    }\n    public function __set( $what, $value )\n    {\n        $this->_p[ $what ] = $value;\n    }\n    private $_p = array();\n}\n$c = new Container();\n$c->a = 1;\n$c->a += 1;\nprint $c->a;\t// --> 2\nprint \" - \";\n$c->a += max( 0, 1 );\nprint $c->a;\t// --> 4 (!)\n?>")).toMatchSnapshot();
  });
});
