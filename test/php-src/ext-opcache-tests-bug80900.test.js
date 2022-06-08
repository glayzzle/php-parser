// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug80900.phpt
  it("Bug 80900: Switch constant with incorrect type", function () {
    expect(parser.parseCode("<?php\nfunction switchLong() {\n    $var = 'foo';\n    /* The number of case clauses needs to be greater than 5,\n     * otherwise it will not be compiled into SWITCH_LONG. */\n    switch ($var) {\n        case 1:\n            echo 'no1';\n            break;\n        case 2:\n            echo 'no2';\n            break;\n        case 3:\n            echo 'no3';\n            break;\n        case 4:\n            echo 'no4';\n            break;\n        case 5:\n            echo 'no5';\n            break;\n        default:\n            echo 'yes';\n            break;\n    }\n    echo PHP_EOL;\n}\nfunction switchString() {\n    $var = false;\n    switch ($var) {\n        case 'string':\n            echo 'no';\n            break;\n        default:\n            echo 'yes';\n            break;\n    }\n    echo PHP_EOL;\n}\nswitchLong();\nswitchString();\n?>")).toMatchSnapshot();
  });
});
