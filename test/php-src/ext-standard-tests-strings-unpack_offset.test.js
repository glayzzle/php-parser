// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/unpack_offset.phpt
  it("unpack() with offset", function () {
    expect(parser.parseCode("<?php\n$data = \"pad\" . pack(\"ll\", 0x01020304, 0x05060708);\n$a = unpack(\"l2\", $data, 3);\nprintf(\"0x%08x 0x%08x\\n\", $a[1], $a[2]);\nprintf(\"0x%08x 0x%08x\\n\",\n    unpack(\"l\", $data, 3)[1],\n    unpack(\"@4/l\", $data, 3)[1]);\ntry {\n    unpack(\"l\", \"foo\", 10);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    unpack(\"l\", \"foo\", -1);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
