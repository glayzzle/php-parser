// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug64353.phpt
  it("Bug #64353 (Built-in classes can be unavailable with dynamic includes and OPcache)", function () {
    expect(parser.parseCode("<?php\nclass BugLoader extends php_user_filter {\n    public function filter($in, $out, &$consumed, $closing): int {\n        if (!class_exists(\"Test\")) {\n            eval(\"class Test extends ArrayObject {}\");\n        }\n        while ($bucket = stream_bucket_make_writeable($in)) {\n            $consumed += $bucket->datalen;\n            stream_bucket_append($out, $bucket);\n        }\n        return PSFS_PASS_ON;\n    }\n}\nstream_filter_register('bug.test', 'BugLoader');\ninclude \"php://filter/read=bug.test/resource=data://text/plain,<?php\\n\";\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
