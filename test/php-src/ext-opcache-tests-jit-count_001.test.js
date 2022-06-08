// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/count_001.phpt
  it("JIT COUNT: 001", function () {
    expect(parser.parseCode("<?php\nclass ThrowsInDestructor {\n    public function __destruct() {\n        throw new RuntimeException(\"In destructor\");\n    }\n}\nclass C {\n    public static function create_array(int $i): array {\n        return array_fill(0, $i, new stdClass());\n    }\n    public static function foo() {\n        $x = [self::create_array(5)];\n        echo count(self::create_array(0)), \"\\n\";\n        echo count(self::create_array(1)), \"\\n\";\n        echo count($x[0]), \"\\n\";\n        $a = [];\n        for ($i = 0; $i < 4; $i++) {\n            $a[] = $i;\n            echo count($a) . \"\\n\";\n        }\n    }\n    public static function count_ref(array &$ref): int {\n        return count($ref);\n    }\n    public static function count_throws(): int {\n        $result = count([new ThrowsInDestructor()]);\n        echo \"Unreachable\\n\";\n        return $result;\n    }\n}\nC::foo();\n$x = ['x', 'y', 'z', 'a', new stdClass()];\necho C::count_ref($x), \"\\n\";\nfor ($i = 0; $i < 5; $i++) {\n    try {\n        echo C::count_throws(), \"\\n\";\n    } catch (RuntimeException $e) {\n        printf(\"Caught %s\\n\", $e->getMessage());\n    }\n}")).toMatchSnapshot();
  });
});
