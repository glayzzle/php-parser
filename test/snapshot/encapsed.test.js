const parser = require("../main");

describe("encapsed", function () {
  it.each([
    ["variable (simple syntax)", '"string $var string";'],
    ["two variable (simple syntax)", '"string $var->$var string";'],
    ["variable curly (simple syntax)", '"string ${var} string";'],
    ["offsetlookup (simple syntax)", '"string $array[0] string";'],
    ["offsetlookup (2) (simple syntax)", '"string $array[koolaid1] string";'],
    ["offsetlookup (3) (simple syntax)", '"string $array[0][0] string";'],
    ["propertylookup (simple syntax)", '"string $obj->property string";'],
    ["variable with space opening before curly", '"string { $var} string";'],
    ["variable with before closing curly", '"string {$var } string";'],
    ["variable (complex syntax)", '"string {$var} string";'],
    ["propertylookup (complex syntax)", '"string {$obj->property} string";'],
    ["offsetlookup (complex syntax)", '"string {$array["key"]} string";'],
    ["offsetlookup 2 (complex syntax)", '"string {$array[4][3]} string";'],
    ["offsetlookup 3 (complex syntax)", '"string {$arr[foo][3]} string";'],
    ["offsetlookup 4 (complex syntax)", '"string {$arr["foo"][3]} string";'],
    [
      "propertylookup and offsetlookup (complex syntax)",
      '"string {$obj->values[3]->name} string";',
    ],
    ["value of the var (complex syntax)", '"string {${$name}} string";'],
    [
      "value of the var named by the return value (complex syntax)",
      '"string {${call()}} string";',
    ],
    [
      "value of the var named by the return value (2) (complex syntax)",
      '"string {${call()}} string";',
    ],
    [
      "value of the var named by the return value (3) (complex syntax)",
      '"string {${$obj->property}} string";',
    ],
    [
      "value of the var named by the return value (4) (complex syntax)",
      '"string {${$obj->call()}} string";',
    ],
    [
      "value of the var named by the return value (5) (complex syntax)",
      '"string {${$obj::$var}} string";',
    ],
    [
      "value of the var named by the return value (6) (complex syntax)",
      '"string {${$obj::call()}} string";',
    ],
    [
      "propertylookup by variable (complex syntax)",
      '"string {$obj->$var} string";',
    ],
    [
      "propertylookup by variable (2) (complex syntax)",
      '"string {$obj->{$array[1]}} string";',
    ],
    [
      "propertylookup with multiple call (complex syntax)",
      '"string {$obj->call()->call()} string";',
    ],
    [
      "multiple propertylookup (complex syntax)",
      '"string {$obj->property->property} string";',
    ],
    [
      "propertylookup with comments (complex syntax)",
      '"string {$var->foo->bar /* Comment */ } string";',
    ],
    [
      "newline before closing curly (complex syntax)",
      '"string {$var\n} string";',
    ],
    ["staticlookup (complex syntax)", '"string {$obj::$var} string";'],
    ["staticlookup (2) (complex syntax)", '"string {$obj::call()} string";'],
    [
      "staticlookup (3) (complex syntax)",
      '"string {$obj::$var::$var} string";',
    ],
    [
      "staticlookup (4) (complex syntax)",
      '"string {$var::$target::$resource::$binary::$foo::$bar::$foobar::$bar::$foo::$foobar::$bar::$foo} string";',
    ],
    ["string offset in encapsed var offset", `"$var[var]";`],
    ["positive offset in encapsed var offset", `"$var[1]";`],
    ["negative offset in encapsed var offset", `"$var[-1]";`],
    ["string offset in encapsed var offset", `"$var[$var]";`],
    ["dollar open curly braces", '"string ${juice} string";'],
    ["dollar open curly braces #2", '"string ${$juice} string";'],
    ["dollar open curly braces #3", '"string ${${$juice}} string";'],
    ["dollar open curly braces #4", '"string ${call()} string";'],
    ["dollar open curly braces #5", '"string ${test[test]} string";'],
    ["dollar open curly braces #6", '"string ${test[1]} string";'],
    ["dollar open curly braces #7", '"string ${test[-1]} string";'],
    ["dollar open curly braces #8", '"string ${test[$var]} string";'],
    ["curly", '"string {$juice} string";'],
    ["curly #2", '"string {$$juice} string";'],
    ["curly #3", '"string {$call()} string";'],
    ["no curly", '"string $$juice string";'],
    ["propertylookup", '$this->{"set{$type}"};'],
  ])("%s", function (_, code) {
    expect(parser.parseEval(code)).toMatchSnapshot();
  });
});
