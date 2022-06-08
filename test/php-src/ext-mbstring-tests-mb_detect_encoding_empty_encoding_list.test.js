// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_detect_encoding_empty_encoding_list.phpt
  it("Test mb_detect_encoding() function : empty encoding list", function () {
    expect(parser.parseCode("<?php\n$string = 'Hello';\ntry {\n    var_dump( mb_detect_encoding($string, ''));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( mb_detect_encoding($string, []));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
