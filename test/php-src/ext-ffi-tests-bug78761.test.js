// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ffi/tests/bug78761.phpt
  it("Bug #78761 (Zend memory heap corruption with preload and casting)", function () {
    expect(parser.parseCode("<?php\ntry {\n    FFI::cast('char[10]', FFI::new('char[1]'));\n} catch (FFI\\Exception $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
