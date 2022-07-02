// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/stringable_trait.phpt
  it("Bug #81582: Stringable not implicitly declared if __toString() came from a trait", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    public function __toString(): string {\n        return \"ok\";\n    }\n}\ntrait T2 {\n    use T;\n}\nclass C {\n    use T;\n}\nclass C2 {\n    use T2;\n}\nvar_dump(new C instanceof Stringable);\nvar_dump(new C2 instanceof Stringable);\n// The traits themselves should not implement Stringable -- traits cannot implement interfaces.\n$rc = new ReflectionClass(T::class);\nvar_dump($rc->getInterfaceNames());\n$rc = new ReflectionClass(T2::class);\nvar_dump($rc->getInterfaceNames());\n?>")).toMatchSnapshot();
  });
});
