// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug70277.phpt
  it("Bug #70277 (new DateTimeZone($foo) is ignoring text after null byte)", function () {
    expect(parser.parseCode("<?php\n$timezone = \"Europe/Zurich\\0Foo\";\ntry {\n    var_dump(timezone_open($timezone));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(new DateTimeZone($timezone));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
