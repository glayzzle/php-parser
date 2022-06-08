// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/stream_get_meta_data_file_error.phpt
  it("Test stream_get_meta_data() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing stream_get_meta_data() : error conditions ***\\n\";\necho \"\\n-- Testing stream_get_meta_data() function with closed stream resource --\\n\";\n$fp = fopen(__FILE__, 'r');\nfclose($fp);\ntry {\n    var_dump(stream_get_meta_data($fp));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
