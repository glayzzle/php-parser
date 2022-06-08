// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug76704.phpt
  it("Bug #76704 (mb_detect_order return value varies based on argument type)", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(mb_detect_order('Foo, UTF-8'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(mb_detect_order(['Foo', 'UTF-8']));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
