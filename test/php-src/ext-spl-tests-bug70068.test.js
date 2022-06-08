// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70068.phpt
  it("Bug #70068 (Dangling pointer in the unserialization of ArrayObject items)", function () {
    expect(parser.parseCode("<?php\ntry {\n$a = unserialize('a:3:{i:0;C:11:\"ArrayObject\":20:{x:i:0;r:3;;m:a:0:{};}i:1;d:11;i:2;S:31:\"AAAAAAAABBBBCCCC\\01\\00\\00\\00\\04\\00\\00\\00\\00\\00\\00\\00\\00\\00\\00\";}');\n} catch(Exception $e) {\n    print $e->getMessage().\"\\n\";\n}\n?>\nOK")).toMatchSnapshot();
  });
});
