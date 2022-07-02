// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/proc_open02.phpt
  it("proc_open", function () {
    expect(parser.parseCode("<?php\n$ds = array(array('pipe', 'r'));\n$cat = proc_open(\n    ['/bin/sleep', '2'],\n    $ds,\n    $pipes\n);\nusleep(20000); // let the OS run the sleep process before sending the signal\nvar_dump(proc_terminate($cat, 0)); // status check\nusleep(20000);\nvar_dump(proc_get_status($cat));\nvar_dump(proc_terminate($cat)); // now really quit it\nusleep(20000);\nvar_dump(proc_get_status($cat));\nproc_close($cat);\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
