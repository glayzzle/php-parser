// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/bug60761.phpt
  it("checks zlib compression output size is always the same", function () {
    expect(parser.parseCode("<?php\n// the INI directives from bug #60761 report\nini_set('zlib.output_compression', '4096');\nini_set('zlib.output_compression_level', '9');\n// try to duplicate the original bug by running this as a CGI\n// test using ob_start and zlib.output_compression(or ob_gzhandler)\n// so it follows more of the original code-path than just calling\n// gzcompress on CLI or CGI\n$lens = array();\nfor ( $i=0 ; $i < 100 ; $i++ ) {\n    // can't use ob_gzhandler with zlib.output_compression\n    ob_start();//\"ob_gzhandler\");\n    phpinfo();\n    $html = ob_get_clean();\n    $len = strlen($html);\n    $lens[$len] = $len;\n}\n$lens = array_values($lens);\necho \"Compressed Lengths\\n\";\n// pass == only ONE length for all iterations\n//         (length didn't change during run)\n//\n// hard to anticipate what 'correct' length should be since\n// return value of phpinfo() will vary between installations...\n// just check that there is only one length\n//\nvar_dump($lens); // show lengths to help triage in case of failure\n// expected headers since its CGI\n?>")).toMatchSnapshot();
  });
});
