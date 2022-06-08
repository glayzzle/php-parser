// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/bug50283.phpt
  it("Feature Request #50283 (allow base in gmp_strval to use full range: 2 to 62, and -2 to -36)", function () {
    expect(parser.parseCode("<?php\n$a = gmp_init(\"0x41682179fbf5\");\nprintf(\"Decimal: %s, -36-based: %s\\n\", gmp_strval($a), gmp_strval($a,-36));\nprintf(\"Decimal: %s, 36-based: %s\\n\", gmp_strval($a), gmp_strval($a,36));\ntry {\n    printf(\"Decimal: %s, -1-based: %s\\n\", gmp_strval($a), gmp_strval($a,-1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    printf(\"Decimal: %s, 1-based: %s\\n\", gmp_strval($a), gmp_strval($a,1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    printf(\"Decimal: %s, -37-based: %s\\n\", gmp_strval($a), gmp_strval($a,-37));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nprintf(\"Decimal: %s, 37-based: %s\\n\", gmp_strval($a), gmp_strval($a,37));\nprintf(\"Decimal: %s, 62-based: %s\\n\", gmp_strval($a), gmp_strval($a,62));\ntry {\n    printf(\"Decimal: %s, 63-based: %s\\n\\n\", gmp_strval($a), gmp_strval($a,63));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nprintf(\"Base 32 and 62-based: %s\\n\", gmp_strval(gmp_init(\"gh82179fbf5\", 32), 62));\n?>")).toMatchSnapshot();
  });
});
