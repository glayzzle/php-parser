// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug74623.phpt
  it("Bug #74623: Infinite loop in type inference when using HTMLPurifier", function () {
    expect(parser.parseCode("<?php\nfunction crash($arr) {\n    $current_item = false;\n    foreach($arr as $item) {\n        if($item->name === 'string') {\n            $current_item = $item;\n        } else {\n            $current_item->a[] = '';\n        }\n    }\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
