// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug76275.phpt
  it("Bug #76275: Assertion failure in file cache when unserializing empty try_catch_array", function () {
    expect(parser.parseCode("<?php\nif (PHP_VERSION_ID >= 70000) {\n    echo \"Done\";\n    return;\n}\nif (!is_callable('random_bytes')) {\n    try {\n    } catch (com_exception $e) {\n    }\n    function random_bytes($length)\n    {\n        throw new Exception(\n            'There is no suitable CSPRNG installed on your system'\n        );\n        return '';\n    }\n}\n?>")).toMatchSnapshot();
  });
});
