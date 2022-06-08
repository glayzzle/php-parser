// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_detect_order_empty_encoding_list.phpt
  it("Test mb_detect_order() function : empty encoding list", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump( mb_detect_order(''));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( mb_detect_order([]));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
