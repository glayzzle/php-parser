// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug73789.phpt
  it("Bug #73789 (Strange behavior of class constants in switch/case block)", function () {
    expect(parser.parseCode("<?php\nclass Lexer\n{\n    const T_NONE = 1;\n    const T_STRING = 2;\n    const T_DOT = 8;\n    public function getType($value): int\n    {\n        $type = self::T_NONE;\n        switch (true) {\n        case ctype_alpha($value[0]):\n            $name = 'Lexer::T_' . strtoupper($value);\n            $type = constant($name);\n            if ($type > 100) {\n                return $type;\n            }\n            return self::T_STRING;\n        case $value === '.':\n            return self::T_DOT;\n        default:\n        }\n        return $type;\n    }\n}\nvar_dump((new Lexer())->getType(\"dot\"));\n?>")).toMatchSnapshot();
  });
});
