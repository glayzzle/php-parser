const parser = require("../main");

describe("boolean", () => {
  it("simple", () => {
    expect(
      parser.parseEval(
        "try { call(); } catch (Exception $e) { do_something(); }"
      )
    ).toMatchSnapshot();
  });
  it("qualified name", () => {
    expect(
      parser.parseEval(
        "try { call(); } catch (Foo\\Exception $e) { do_something(); }"
      )
    ).toMatchSnapshot();
  });

  it("fully qualified name", () => {
    expect(
      parser.parseEval(
        "try { call(); } catch (\\Exception $e) { do_something(); }"
      )
    ).toMatchSnapshot();
  });
  it("fully qualified name #2", () => {
    expect(
      parser.parseEval(
        "try { call(); } catch (\\Exception\\Foo $e) { do_something(); }"
      )
    ).toMatchSnapshot();
  });
  it("relative name", () => {
    expect(
      parser.parseEval(
        "try { call(); } catch (namespace\\Exception $e) { do_something(); }"
      )
    ).toMatchSnapshot();
  });
  it("finally", () => {
    expect(
      parser.parseEval(
        "try { call(); } catch (Exception $e) { do_something(); } finally { do_something_other(); }"
      )
    ).toMatchSnapshot();
  });
  it("multiple catch", () => {
    expect(
      parser.parseEval(
        "try { call(); } catch (MyException | MyOtherException $e) { do_something(); }"
      )
    ).toMatchSnapshot();
  });
  it("multiple catch #2", () => {
    expect(
      parser.parseEval(
        "try { call(); } catch (MyException | Foo\\Exception | \\Exception | \\Exception\\Foo | namespace\\Exception $e) { do_something(); }"
      )
    ).toMatchSnapshot();
  });
});
