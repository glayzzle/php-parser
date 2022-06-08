// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80037.phpt
  it("Bug #80037: Typed property must not be accessed before initialization when __get() declared", function () {
    expect(parser.parseCode("<?php\nfinal class A\n{\n    public string $a;\n    public static function fromArray(array $props): self\n    {\n        $me = new static;\n        foreach ($props as $k => &$v) {\n            $me->{$k} = &$v;  # try to remove &\n        }\n        return $me;\n    }\n    public function __get($name)\n    {\n        throw new \\LogicException(\"Property '$name' is not defined.\");\n    }\n}\nvar_dump(A::fromArray(['a' => 'foo']));\n?>")).toMatchSnapshot();
  });
});
