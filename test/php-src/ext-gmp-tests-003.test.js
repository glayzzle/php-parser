// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/003.phpt
  it("Check for number base recognition", function () {
    expect(parser.parseCode("<?php\n        /* Binary */\n        $test[] = gmp_init(\"0b10011010010\");\n        $test[] = gmp_init(\"0b10011010010\", 2);\n        $test[] = gmp_init(\"10011010010\");\n        $test[] = gmp_init(\"10011010010\", 2);\n        /* Octal */\n        $test[] = gmp_init(\"02322\");\n        $test[] = gmp_init(\"02322\", 8);\n        $test[] = gmp_init(\"2322\");\n        $test[] = gmp_init(\"2322\", 8);\n        /* Decimal */\n        $test[] = gmp_init(\"1234\");\n        $test[] = gmp_init(\"1234\", 10);\n        /* Hexadecimal */\n        $test[] = gmp_init(\"0x4d2\");\n        $test[] = gmp_init(\"0x4d2\", 16);\n        try {\n            $test[] = gmp_init(\"4d2\");\n        } catch (\\ValueError $e) {\n            echo $e->getMessage() . \\PHP_EOL;\n        }\n        $test[] = gmp_init(\"4d2\", 16);\n        for ($i = 0; $i < count($test); $i++) {\n                printf(\"%s\\n\", gmp_strval($test[$i]));\n        }\n?>")).toMatchSnapshot();
  });
});
