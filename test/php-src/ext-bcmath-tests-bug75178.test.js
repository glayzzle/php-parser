// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/bug75178.phpt
  it("Bug #75178 (bcpowmod() misbehaves for non-integer base or modulus)", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(bcpowmod('4.1', '4', '3', 3));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(bcpowmod('4', '4', '3.1', 3));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
