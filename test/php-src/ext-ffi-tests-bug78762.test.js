// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug78762.phpt
  it("Bug #78762 (Failing FFI::cast() may leak memory)", function () {
    expect(parser.parseCode("<?php\ntry {\n    FFI::cast('char[10]', FFI::new('char[1]'));\n} catch (FFI\\Exception $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
