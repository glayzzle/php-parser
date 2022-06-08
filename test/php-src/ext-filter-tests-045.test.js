// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/045.phpt
  it("Options must not be changed by filter_var()", function () {
    expect(parser.parseCode("<?php\n$a = array(\"flags\"=>(string)FILTER_FLAG_ALLOW_HEX, \"options\" => array(\"min_range\"=>\"0\", \"max_range\"=>\"1024\"));\n$ret = filter_var(\"0xff\", FILTER_VALIDATE_INT, $a);\necho ($ret === 255 && $a[\"options\"][\"min_range\"] === \"0\")?\"ok\\n\":\"bug\\n\";\necho ($ret === 255 && $a[\"options\"][\"max_range\"] === \"1024\")?\"ok\\n\":\"bug\\n\";\necho ($ret === 255 && is_string($a[\"flags\"]) && $a[\"flags\"] == FILTER_FLAG_ALLOW_HEX)?\"ok\\n\":\"bug\\n\";\n$a = (string)FILTER_FLAG_ALLOW_HEX;\n$ret = filter_var(\"0xff\", FILTER_VALIDATE_INT, $a);\necho ($ret === 255 && is_string($a) && $a == FILTER_FLAG_ALLOW_HEX)?\"ok\\n\":\"bug\\n\";\n$a = array(\"test\"=>array(\"filter\"=>(string)FILTER_VALIDATE_INT, \"flags\"=>(string)FILTER_FLAG_ALLOW_HEX));\n$ret = filter_var_array(array(\"test\"=>\"0xff\"), $a);\necho ($ret[\"test\"] === 255 && is_string($a[\"test\"][\"filter\"]) && $a[\"test\"][\"filter\"] == FILTER_VALIDATE_INT)?\"ok\\n\":\"bug\\n\";\necho ($ret[\"test\"] === 255 && is_string($a[\"test\"][\"flags\"]) && $a[\"test\"][\"flags\"] == FILTER_FLAG_ALLOW_HEX)?\"ok\\n\":\"bug\\n\";\n$a = array(\"test\"=>(string)FILTER_VALIDATE_INT);\n$ret = filter_var_array(array(\"test\"=>\"255\"), $a);\necho ($ret[\"test\"] === 255 && is_string($a[\"test\"]) && $a[\"test\"] == FILTER_VALIDATE_INT)?\"ok\\n\":\"bug\\n\";\n?>")).toMatchSnapshot();
  });
});
