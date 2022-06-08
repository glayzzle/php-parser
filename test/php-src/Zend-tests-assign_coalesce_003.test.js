// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_coalesce_003.phpt
  it("Coalesce assign (??=): ArrayAccess handling", function () {
    expect(parser.parseCode("<?php\nfunction id($arg) {\n    echo \"id($arg)\\n\";\n    return $arg;\n}\nclass AA implements ArrayAccess {\n    public $data;\n    public function __construct($data = []) {\n        $this->data = $data;\n    }\n    public function &offsetGet($k): mixed {\n        echo \"offsetGet($k)\\n\";\n        return $this->data[$k];\n    }\n    public function offsetExists($k): bool {\n        echo \"offsetExists($k)\\n\";\n        return array_key_exists($k, $this->data);\n    }\n    public function offsetSet($k,$v): void {\n        echo \"offsetSet($k,$v)\\n\";\n        $this->data[$k] = $v;\n    }\n    public function offsetUnset($k): void { }\n}\n$ary = new AA([\"foo\" => new AA, \"null\" => null]);\necho \"[foo]\\n\";\n$ary[\"foo\"] ??= \"bar\";\necho \"[bar]\\n\";\n$ary[\"bar\"] ??= \"foo\";\necho \"[null]\\n\";\n$ary[\"null\"] ??= \"baz\";\necho \"[foo][bar]\\n\";\n$ary[\"foo\"][\"bar\"] ??= \"abc\";\necho \"[foo][bar]\\n\";\n$ary[\"foo\"][\"bar\"] ??= \"def\";\n?>")).toMatchSnapshot();
  });
});
