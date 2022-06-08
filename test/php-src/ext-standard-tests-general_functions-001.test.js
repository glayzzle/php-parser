// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/001.phpt
  it("sprintf() function", function () {
    expect(parser.parseCode("<?php\n$agent = sprintf(\"%.5s\", \"James Bond, 007\");\necho(\"sprintf string truncate test:   \");\nif ($agent == \"James\") {\n    echo(\"passed\\n\");\n} else {\n    echo(\"failed!\\n\");\n}\necho(\"sprintf padding and align test: \");\n$test = sprintf(\"abc%04d %-20s%c\", 20, \"fisketur\", 33);\nif ($test == \"abc0020 fisketur            !\") {\n    echo(\"passed\\n\");\n} else {\n    echo(\"failed!\\n\");\n}\necho(\"sprintf octal and hex test:     \");\n$test = sprintf(\"%4o %4x %4X %0\".\"8x\", 128, 1024, 49151, 3457925);\nif ($test == \" 200  400 BFFF 0034c385\") {\n    echo(\"passed\\n\");\n} else {\n    echo(\"failed!\\n\");\n}\necho(\"sprintf octal binary test:      \");\n$test = sprintf(\"%b\", 3457925);\nif ($test == \"1101001100001110000101\") {\n    echo(\"passed\\n\");\n} else {\n    echo(\"failed!\\n\");\n}\necho(\"sprintf float test:             \");\n$test = sprintf(\"%0\".\"06.2f\", 10000/3.0);\nif ($test == \"003333.33\") {\n    echo(\"passed\\n\");\n} else {\n    echo(\"failed!\\n\");\n}\necho sprintf(\"%.2f\\n\", \"99.00\");\necho sprintf(\"%.2f\\n\", 99.00);\necho sprintf(\"%e\\n\", 1.234E-18);\necho sprintf(\"%e\\n\", 1.234E+18);\necho sprintf(\"%e\\n\", 9843243.12);\necho sprintf(\"%e\\n\", -9843243.12);\n?>")).toMatchSnapshot();
  });
});
