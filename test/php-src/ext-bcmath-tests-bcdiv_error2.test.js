// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bcdiv_error2.phpt
  it("bcdiv() requires well-formed values", function () {
    expect(parser.parseCode("<?php\ntry {\n    bcdiv('a', '1');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\ntry {\n    bcdiv('1', 'a');\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
