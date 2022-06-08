// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_setAccessible.phpt
  it("Test that ReflectionMethod::setAccessible() has no effects", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private function aPrivate($a) { print __METHOD__ . \"\\n\"; }\n    private static function aPrivateStatic($a) { print __METHOD__ . \"\\n\"; }\n    protected function aProtected($a) { print __METHOD__ . \"\\n\"; }\n    protected static function aProtectedStatic($a) { print __METHOD__ . \"\\n\"; }\n}\n$private         = new ReflectionMethod('A', 'aPrivate');\n$privateStatic   = new ReflectionMethod('A', 'aPrivateStatic');\n$protected       = new ReflectionMethod('A', 'aProtected');\n$protectedStatic = new ReflectionMethod('A', 'aProtectedStatic');\n$private->invoke(new A, NULL);\n$private->invokeArgs(new A, array(NULL));\n$privateStatic->invoke(NULL, NULL);\n$privateStatic->invokeArgs(NULL, array(NULL));\n$protected->invoke(new A, NULL);\n$protected->invokeArgs(new A, array(NULL));\n$protectedStatic->invoke(NULL, NULL);\n$protectedStatic->invokeArgs(NULL, array(NULL));\n$private->setAccessible(FALSE);\n$privateStatic->setAccessible(FALSE);\n$protected->setAccessible(FALSE);\n$protectedStatic->setAccessible(FALSE);\n$private->invoke(new A, NULL);\n$private->invokeArgs(new A, array(NULL));\n$privateStatic->invoke(NULL, NULL);\n$privateStatic->invokeArgs(NULL, array(NULL));\n$protected->invoke(new A, NULL);\n$protected->invokeArgs(new A, array(NULL));\n$protectedStatic->invoke(NULL, NULL);\n$protectedStatic->invokeArgs(NULL, array(NULL));\n?>")).toMatchSnapshot();
  });
});
