// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/bug_47769.phpt
  it("PDO Common: Bug #47769 (Strange extends PDO)", function () {
    expect(parser.parseCode("<?php\nclass test extends PDO\n{\n    protected function isProtected() {\n        echo \"this is a protected method.\\n\";\n    }\n    private function isPrivate() {\n        echo \"this is a private method.\\n\";\n    }\n    public function quote($str, $paramtype = NULL): string|false {\n        $this->isProtected();\n        $this->isPrivate();\n        print $str .\"\\n\";\n        return $str;\n    }\n}\n$test = new test('sqlite::memory:');\n$test->quote('foo');\n$test->isProtected();\n?>")).toMatchSnapshot();
  });
});
