// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/verify_return_undef.phpt
  it("VERIFY_RETURN with undef var", function () {
    expect(parser.parseCode("<?php\nfunction test(): int {\n    return $undef;\n}\ntry {\n    test();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
