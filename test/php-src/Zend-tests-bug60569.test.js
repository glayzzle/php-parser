// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60569.phpt
  it("Bug #60569 (Nullbyte truncates Exception $message.)", function () {
    expect(parser.parseCode("<?php\ntry {\n    $msg = \"Some error \\x00 message\";\n    throw new Exception($msg);\n} catch(Exception $e) {\n    var_dump($e->getMessage(), $msg);\n}\n?>")).toMatchSnapshot();
  });
});
