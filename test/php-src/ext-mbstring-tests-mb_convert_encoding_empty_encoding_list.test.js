// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_convert_encoding_empty_encoding_list.phpt
  it("Test mb_convert_encoding() function : empty encoding list", function () {
    expect(parser.parseCode("<?php\n$string = 'Hello';\ntry {\n    var_dump( mb_convert_encoding($string, 'UTF-8', ''));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( mb_convert_encoding($string, 'UTF-8', []));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
