// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73338.phpt
  it("Bug #73338: Ensure exceptions in function init opcodes are cleaned properly", function () {
    expect(parser.parseCode("<?php\ntry { call_user_func(new class { function __destruct () { throw new Error; } }); } catch (Error $e) {}\nset_error_handler(function() { throw new Error; });\ntry { var_dump(new stdClass, call_user_func(\"fail\")); } catch (Error $e) {}\ntry { (function() { call_user_func(\"fail\"); })(); } catch (Error $e) {}\ntry { [new class { static function foo() {} function __destruct () { throw new Error; } }, \"foo\"](); } catch (Error $e) {}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
