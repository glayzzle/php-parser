// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug69948.phpt
  it("Bug #69948 (path/domain are not sanitized for special characters in setcookie)", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(setcookie('foo', 'bar', 0, 'asdf;asdf'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump(setcookie('foo', 'bar', 0, '/', 'foobar; secure'));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
