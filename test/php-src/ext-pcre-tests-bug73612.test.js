// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug73612.phpt
  it("Bug #73612 (preg_*() may leak memory)", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\n$obj->obj = $obj;\npreg_match('/./', 'x', $obj);\n$obj = new stdClass;\n$obj->obj = $obj;\npreg_replace('/./', '', 'x', -1, $obj);\n$obj = new stdClass;\n$obj->obj = $obj;\npreg_replace_callback('/./', 'count', 'x', -1, $obj);\n$obj = new stdClass;\n$obj->obj = $obj;\npreg_replace_callback_array(['/./' => 'count'], 'x', -1, $obj);\n$obj = new stdClass;\n$obj->obj = $obj;\npreg_filter('/./', '', 'x', -1, $obj);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
