// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcmul_error.phpt
  it("bcmul() requires well-formed values", function () {
    expect(parser.parseCode("<?php\ntry {\n    bcmul('a', '1');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\ntry {\n    bcmul('1', 'a');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
