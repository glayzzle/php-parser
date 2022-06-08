// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_pow2.phpt
  it("Test pow() with gmp object", function () {
    expect(parser.parseCode("<?php\n$n = gmp_init(2);\nvar_dump(pow($n, 10));\nvar_dump($n ** 10);\ntry {\n    pow($n, -10);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $n ** -10;\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
