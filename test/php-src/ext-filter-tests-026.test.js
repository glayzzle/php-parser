// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/026.phpt
  it("filter_var() and FILTER_SANITIZE_STRIPPED", function () {
    expect(parser.parseCode("<?php\nvar_dump(filter_var(\"<p>Let me <font color=\\\"#000000\\\">see</font> you <br /><b>Stripped</b> down to the bone</p>\", FILTER_SANITIZE_STRIPPED));\nvar_dump(filter_var(\"!@#$%^&*()><<>+_\\\"'<br><p /><li />\", FILTER_SANITIZE_STRIPPED));\nvar_dump(filter_var(\"\", FILTER_SANITIZE_STRIPPED));\nvar_dump(filter_var(\"<p>Let me <font color=\\\"#000000\\\">see</font> you <br /><b>Stripped</b> down to the bone</p>\", FILTER_SANITIZE_STRIPPED, FILTER_FLAG_STRIP_LOW));\nvar_dump(filter_var(\"!@#$%^&*()><<>+_\\\"'<br><p /><li />\", FILTER_SANITIZE_STRIPPED, FILTER_FLAG_STRIP_LOW));\nvar_dump(filter_var(\"\", FILTER_SANITIZE_STRIPPED, FILTER_FLAG_STRIP_LOW));\nvar_dump(filter_var(\"<p>Let me <font color=\\\"#000000\\\">see</font> you <br /><b>Stripped</b> down to the bone</p>\", FILTER_SANITIZE_STRIPPED, FILTER_FLAG_STRIP_HIGH));\nvar_dump(filter_var(\"!@#$%^&*()><<>+_\\\"'<br><p /><li />\", FILTER_SANITIZE_STRIPPED, FILTER_FLAG_STRIP_HIGH));\nvar_dump(filter_var(\"\", FILTER_SANITIZE_STRIPPED, FILTER_FLAG_STRIP_HIGH));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
