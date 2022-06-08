// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_open.phpt
  it("proc_open", function () {
    expect(parser.parseCode("<?php\n$ds = array(\n        0 => array(\"pipe\", \"r\"),\n        1 => array(\"pipe\", \"w\"),\n        2 => array(\"pipe\", \"w\")\n        );\n$cat = proc_open(\n        \"/bin/cat\",\n        $ds,\n        $pipes\n        );\nproc_close($cat);\necho \"I didn't segfault!\\n\";\n?>")).toMatchSnapshot();
  });
});
