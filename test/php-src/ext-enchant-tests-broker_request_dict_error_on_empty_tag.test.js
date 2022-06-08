// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/enchant/tests/broker_request_dict_error_on_empty_tag.phpt
  it("enchant_broker_request_dict() must throw ValueError on empty tag", function () {
    expect(parser.parseCode("<?php\n$broker = enchant_broker_init();\ntry {\n    var_dump(enchant_broker_request_dict($broker, ''));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
