// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_001.phpt
  it("Register Alloction 001: Spilling in \"identical\" code", function () {
    expect(parser.parseCode("<?php\nclass Caster\n{\n    const EXCLUDE_PUBLIC = 8;\n    const EXCLUDE_PRIVATE = 32;\n    const EXCLUDE_STRICT = 512;\n    public static function filter(array $a, $filter): int\n    {\n        foreach ($a as $k => $v) {\n            if (!isset($k[1])) {\n                $type |= self::EXCLUDE_PUBLIC;\n            } else {\n                $type |= self::EXCLUDE_PRIVATE;\n            }\n            if ((self::EXCLUDE_STRICT & $filter) ? $type === $filter : $type) {\n            }\n        }\n        return $a;\n    }\n}\n?>\nOK")).toMatchSnapshot();
  });
});
