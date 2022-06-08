// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug67626.phpt
  it("Bug #67626: Exceptions not properly handled in user stream handlers", function () {
    expect(parser.parseCode("<?php\nclass MyStream\n{\n    public function stream_open() { return true; }\n    public function stream_read()\n    {\n        throw new Exception('stream_read_exception');\n        return 'read';\n    }\n    public function stream_eof()\n    {\n        return true;\n    }\n    public function stream_write()\n    {\n        throw new Exception('stream_write_exception');\n        return 42;\n    }\n}\nstream_wrapper_register(\"my\", \"MyStream\");\n$fp = fopen('my://foobar', 'r+');\ntry {\n    fread($fp, 42);\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\necho \"\\n\";\ntry {\n    fwrite($fp, 'foobar');\n} catch (Exception $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
