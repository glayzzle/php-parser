// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41961.phpt
  it("Bug #41961 (Ensure search for hidden private methods does not stray from class hierarchy)", function () {
    expect(parser.parseCode("<?php\nX::test();\n/** Class X is related to neither ParentClass nor ChildClass. */\nclass X {\n  public static function test() {\n    $myChild = new ChildClass;\n    $myChild->secret(); // bug - invokes X::secret() instead of ChildClass::secret()\n  }\n  private function secret() {\n    echo \"Called private \" . __METHOD__ . \"() on an instance of: \" . get_class($this) . \"\\n\";\n  }\n}\nclass ParentClass {\n  private function secret() { }\n}\nclass ChildClass extends ParentClass {\n  public function secret() {\n    echo \"Called public \" . __METHOD__ . \"() on an instance of: \" . get_class($this) . \"\\n\";\n  }\n}\n?>")).toMatchSnapshot();
  });
});
