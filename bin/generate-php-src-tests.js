#!/usr/bin/env node
const fs = require("fs");
const glob = require("glob");

// Note: Ideally we'd check for "--EXPECTF--" in the phpt file, but that also
// described run-time errors, rather than just parse errors.
const testsThatExpectParseErrors = [
  "Zend/tests/attributes/019_variable_attribute_name.phpt",
  "Zend/tests/bug43343.phpt",
  "Zend/tests/bug60099.phpt",
  "Zend/tests/bug64660.phpt",
  "Zend/tests/bug70430.phpt",
  "Zend/tests/bug76439_2.phpt",
  "Zend/tests/bug77993.phpt",
  "Zend/tests/bug78363.phpt",
  "Zend/tests/bug78454_1.phpt",
  "Zend/tests/bug78454_2.phpt",
  "Zend/tests/ctor_promotion_additional_modifiers.phpt",
  "Zend/tests/eval_parse_error_with_doc_comment.phpt",
  "Zend/tests/flexible-heredoc-error1.phpt",
  "Zend/tests/flexible-heredoc-error10.phpt",
  "Zend/tests/flexible-heredoc-error11.phpt",
  "Zend/tests/flexible-heredoc-error12.phpt",
  "Zend/tests/flexible-heredoc-error13.phpt",
  "Zend/tests/flexible-heredoc-error2.phpt",
  "Zend/tests/flexible-heredoc-error3.phpt",
  "Zend/tests/flexible-heredoc-error4.phpt",
  "Zend/tests/flexible-heredoc-error5.phpt",
  "Zend/tests/flexible-heredoc-error6.phpt",
  "Zend/tests/flexible-heredoc-error7.phpt",
  "Zend/tests/flexible-heredoc-error8.phpt",
  "Zend/tests/flexible-heredoc-error9.phpt",
  "Zend/tests/flexible-nowdoc-error1.phpt",
  "Zend/tests/flexible-nowdoc-error2.phpt",
  "Zend/tests/flexible-nowdoc-error3.phpt",
  "Zend/tests/flexible-nowdoc-error4.phpt",
  "Zend/tests/flexible-nowdoc-error5.phpt",
  "Zend/tests/flexible-nowdoc-error6.phpt",
  "Zend/tests/flexible-nowdoc-error7.phpt",
  "Zend/tests/flexible-nowdoc-error8.phpt",
  "Zend/tests/function_arguments/call_with_leading_comma_error.phpt",
  "Zend/tests/function_arguments/call_with_multi_inner_comma_error.phpt",
  "Zend/tests/function_arguments/call_with_multi_trailing_comma_error.phpt",
  "Zend/tests/function_arguments/call_with_only_comma_error.phpt",
  "Zend/tests/function_arguments_001.phpt",
  "Zend/tests/function_arguments_002.phpt",
  "Zend/tests/grammar/bug78441.phpt",
  "Zend/tests/grammar/regression_004.phpt",
  "Zend/tests/grammar/regression_005.phpt",
  "Zend/tests/grammar/regression_010.phpt",
  "Zend/tests/grammar/regression_012.phpt",
  "Zend/tests/heredoc_005.phpt",
  "Zend/tests/heredoc_013.phpt",
  "Zend/tests/heredoc_014.phpt",
  "Zend/tests/list_011.phpt",
  "Zend/tests/lsb_008.phpt",
  "Zend/tests/lsb_009.phpt",
  "Zend/tests/namespace_name_namespace_start.phpt",
  "Zend/tests/namespaced_name_whitespace.phpt",
  "Zend/tests/ns_088.phpt",
  "Zend/tests/ns_094.phpt",
  "Zend/tests/ns_096.phpt",
  "Zend/tests/ns_trailing_comma_error_01.phpt",
  "Zend/tests/ns_trailing_comma_error_02.phpt",
  "Zend/tests/ns_trailing_comma_error_03.phpt",
  "Zend/tests/ns_trailing_comma_error_04.phpt",
  "Zend/tests/ns_trailing_comma_error_05.phpt",
  "Zend/tests/ns_trailing_comma_error_06.phpt",
  "Zend/tests/ns_trailing_comma_error_07.phpt",
  "Zend/tests/ns_trailing_comma_error_08.phpt",
  "Zend/tests/numeric_literal_separator_002.phpt",
  "Zend/tests/numeric_literal_separator_003.phpt",
  "Zend/tests/numeric_literal_separator_004.phpt",
  "Zend/tests/numeric_literal_separator_005.phpt",
  "Zend/tests/numeric_literal_separator_006.phpt",
  "Zend/tests/numeric_literal_separator_007.phpt",
  "Zend/tests/numeric_literal_separator_008.phpt",
  "Zend/tests/numeric_literal_separator_009.phpt",
  "Zend/tests/oct_whitespace.phpt",
  "Zend/tests/readonly_classes/readonly_enum.phpt",
  "Zend/tests/readonly_classes/readonly_interface.phpt",
  "Zend/tests/readonly_classes/readonly_trait.phpt",
  "Zend/tests/short_echo_as_identifier.phpt",
  "Zend/tests/traits/bug55524.phpt",
  "Zend/tests/traits/bugs/interfaces.phpt",
  "Zend/tests/type_declarations/intersection_types/invalid_types/invalid_nullable_type.phpt",
  "Zend/tests/type_declarations/intersection_types/parse_error.phpt",
  "Zend/tests/type_declarations/intersection_types/parse_error.phpt",
  "Zend/tests/type_declarations/mixed/casting/mixed_cast_error.phpt",
  "Zend/tests/type_declarations/static_type_param.phpt",
  "Zend/tests/type_declarations/static_type_property.phpt",
  "Zend/tests/type_declarations/typed_properties_025.phpt",
  "Zend/tests/unterminated_comment.phpt",
  "Zend/tests/varSyntax/globalNonSimpleVariableError.phpt",
  "ext/opcache/tests/preload_parse_error.phpt",
  "ext/phar/tests/031.phpt",
  "ext/phar/tests/fatal_error_webphar.phpt",
  "ext/spl/tests/bug74372.phpt",
  "ext/standard/tests/strings/bug51899.phpt",
  "ext/tokenizer/tests/parse_errors.phpt",
  "ext/tokenizer/tests/token_get_all_TOKEN_PARSE_000.phpt",
  "ext/tokenizer/tests/token_get_all_heredoc_nowdoc.phpt",
  "ext/tokenizer/tests/token_get_all_heredoc_nowdoc.phpt",
  "ext/tokenizer/tests/token_get_all_heredoc_nowdoc.phpt",
  "ext/tokenizer/tests/token_get_all_heredoc_nowdoc.phpt",
  "ext/tokenizer/tests/token_get_all_heredoc_nowdoc.phpt",
  "ext/tokenizer/tests/token_get_all_heredoc_nowdoc.phpt",
  "ext/tokenizer/tests/token_get_all_heredoc_nowdoc.phpt",
  "ext/tokenizer/tests/token_get_all_heredoc_nowdoc.phpt",
  "ext/zend_test/tests/zend_test_compile_string.phpt",
  "sapi/cgi/tests/006.phpt",
  "sapi/cli/tests/011.phpt",
  "sapi/cli/tests/017.phpt",
  "tests/classes/constants_error_006.phpt",
  "tests/classes/constants_error_007.phpt",
  "tests/lang/019.phpt",
  "tests/lang/bug21669.phpt",
  "tests/lang/bug21820.phpt",
  "tests/lang/bug71897.phpt",
  "tests/lang/invalid_octal.phpt",
  "tests/lang/string/unicode_escape_empty.phpt",
  "tests/lang/string/unicode_escape_incomplete.phpt",
  "tests/lang/string/unicode_escape_large_codepoint.phpt",
  "tests/lang/string/unicode_escape_sign.phpt",
  "tests/lang/string/unicode_escape_sign2.phpt",
  "tests/lang/string/unicode_escape_whitespace.phpt",

  // These should also throw parse errors according to PHP 8.1, but we also
  // support older versions.
  // "Zend/tests/real_cast.phpt",

  // These are not parse errors in PHP strictly speaking, but they test syntax
  // that is still invalid (i.e. it generates a fatal error).
  "Zend/tests/enum/case-in-class.phpt",
  "Zend/tests/enum/no-name-property.phpt",
  "Zend/tests/readonly_props/readonly_const.phpt",
  "Zend/tests/readonly_props/readonly_method.phpt",
  "Zend/tests/readonly_props/readonly_method_trait.phpt",
  "Zend/tests/static_in_trait_insteadof_list.phpt",
];

const header = `// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {`;

const footer = `});
`;

for (const absolutePath of glob.sync(__dirname + "/../php-src/**/*.phpt")) {
  const relativePath = absolutePath.substring(
    absolutePath.indexOf("php-src") + "php-src/".length
  );
  const testName = [];
  const testContents = [];
  const expectError = testsThatExpectParseErrors.includes(relativePath);
  let testFileName = relativePath.replace(/[/\\]/g, "-");
  testFileName = testFileName.substring(0, testFileName.lastIndexOf("."));

  let section = null;
  for (const line of fs
    .readFileSync(absolutePath)
    .toString()
    .split(/[\r\n]+/)) {
    if (/^--\w/.test(line)) {
      if (line === "--TEST--") {
        section = "name";
      } else if (line === "--FILE--") {
        section = "file";
      } else {
        section = null;
      }
      continue;
    }

    if (section === "name") {
      testName.push(line);
    } else if (section === "file") {
      testContents.push(line);
    }
    // TODO: Handle --FILE_EXTERNAL--
  }

  if (testContents.length === 0) {
    continue;
  }

  const contents = `${header}
  // ${relativePath}
  it(${JSON.stringify(testName.join("\n"))}, function () {
    expect(${expectError ? "() => " : ""}parser.parseCode(${JSON.stringify(
    testContents.join("\n")
  )})).${expectError ? "toThrowErrorMatchingSnapshot" : "toMatchSnapshot"}();
  });
${footer}`;

  fs.writeFile(
    `${__dirname}/../test/php-src/${testFileName}.test.js`,
    contents,
    (err) => {
      if (err) throw err;
      console.log(`Written ${testFileName}`);
    }
  );
}
