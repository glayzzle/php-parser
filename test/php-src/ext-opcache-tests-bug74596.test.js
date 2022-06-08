// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug74596.phpt
  it("Bug #74596 (SIGSEGV with opcache.revalidate_path enabled)", function () {
    expect(parser.parseCode("<?php\nfile_put_contents(__DIR__ . \"/bug74596_1.php\", <<<CODE\n<?php\nclass A {\n    public function __construct() {\n        \\$a = true;\n        if (\\$a) {\n            echo 1 + 2;\n        } else {\n            echo 2 + 3;\n        }\n    }\n}\n?>\nCODE\n);\nfile_put_contents(__DIR__ . \"/bug74596_2.php\", \"ok\\n\");\nclass ufilter extends php_user_filter\n{\n    function filter($in, $out, &$consumed, $closing): int\n    {\n        include_once __DIR__ . \"/bug74596_1.php\";\n        while ($bucket = stream_bucket_make_writeable($in)) {\n            stream_bucket_append($out, $bucket);\n        }\n        return PSFS_PASS_ON;\n    }\n}\nstream_filter_register(\"ufilter\", \"ufilter\");\ninclude \"php://filter/read=ufilter/resource=\" . __DIR__ . \"/bug74596_2.php\";\n?>")).toMatchSnapshot();
  });
});
