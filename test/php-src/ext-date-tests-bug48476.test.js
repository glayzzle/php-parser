// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug48476.phpt
  it("Bug #48476 (cloning extended DateTime class without calling parent::__constr crashed PHP)", function () {
    expect(parser.parseCode("<?php\nclass MyDateTime extends DateTime {\n    public function __construct() { }\n}\nclass MyDateTimeZone extends DateTimeZone {\n    public function __construct() { }\n}\n$o = new MyDateTime;\ntry {\n    var_dump($o->format(\"d\"));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$x = clone $o;\ntry {\n    var_dump($x->format(\"d\"));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nclone $o;\ntry {\n    var_dump(timezone_location_get(clone new MyDateTimezone));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
