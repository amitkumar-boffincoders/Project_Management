import React from "react";

export const Button = () => {
  return (
    <section className="content">
      <div className="dash">
        <h4>Button</h4>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title">Examples</h4>
              <p className="sub-title">
                Bootstrap includes six predefined button styles, each serving
                its own semantic purpose.
              </p>

              <div className="button-items">
                <button
                  type="button"
                  className="btn btn-primary waves-effect waves-light"
                >
                  Primary
                </button>

                <button
                  type="button"
                  className="btn btn-secondary waves-effect"
                >
                  Secondary
                </button>

                <button
                  type="button"
                  className="btn btn-success waves-effect waves-light"
                >
                  Success
                </button>

                <button
                  type="button"
                  className="btn btn-info waves-effect waves-light"
                >
                  Info
                </button>

                <button
                  type="button"
                  className="btn btn-warning waves-effect waves-light"
                >
                  Warning
                </button>

                <button
                  type="button"
                  className="btn btn-danger waves-effect waves-light"
                >
                  Danger
                </button>

                <button type="button" className="btn btn-light waves-effect">
                  Light
                </button>

                <button
                  type="button"
                  className="btn btn-dark waves-effect waves-light"
                >
                  Dark
                </button>

                <button type="button" className="btn btn-link waves-effect">
                  Link
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title">Outline buttons</h4>
              <p className="sub-title">
                In need of a button, but not the hefty background colors they
                bring? Replace the default modifier classNamees with the{" "}
                <code className="highlighter-rouge">.btn-outline-*</code> ones
                to remove all background images and colors on any button.
              </p>

              <div className="button-items">
                <button
                  type="button"
                  className="btn btn-outline-primary waves-effect waves-light"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary waves-effect"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success waves-effect waves-light"
                >
                  Success
                </button>
                <button
                  type="button"
                  className="btn btn-outline-info waves-effect waves-light"
                >
                  Info
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning waves-effect waves-light"
                >
                  Warning
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger waves-effect waves-light"
                >
                  Danger
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark waves-effect waves-light"
                >
                  Dark
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-6">
          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title">Button tags</h4>
              <p className="sub-title">
                The <code className="highlighter-rouge">.btn</code>
                classNamees are designed to be used with the{" "}
                <code className="highlighter-rouge">&lt;button&gt;</code>{" "}
                element. However, you can also use these classNamees on{" "}
                <code className="highlighter-rouge">&lt;a&gt;</code> or{" "}
                <code className="highlighter-rouge">&lt;input&gt;</code>{" "}
                elements (though some browsers may apply a slightly different
                rendering).
              </p>

              <div className="button-items">
                <a className="btn btn-success" href="" role="button">
                  Link
                </a>
                <button className="btn btn-primary" type="submit">
                  Button
                </button>
                <input className="btn btn-info" type="button" value="Input" />
                <input
                  className="btn btn-warning"
                  type="submit"
                  value="Submit"
                />
                <input className="btn btn-danger" type="reset" value="Reset" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title">Sizes</h4>
              <p className="sub-title">
                Fancy larger or smaller buttons? Add
                <code className="highlighter-rouge">.btn-lg</code> or{" "}
                <code className="highlighter-rouge">.btn-sm</code> for
                additional sizes.
              </p>

              <div className="button-items">
                <button
                  type="button"
                  className="btn btn-info btn-lg waves-effect waves-light"
                >
                  Large button
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg waves-effect waves-light"
                >
                  Large button
                </button>
                <button
                  type="button"
                  className="btn btn-info btn-sm waves-effect waves-light"
                >
                  Small button
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm waves-effect waves-light"
                >
                  Small button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-6">
          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title">Block Buttons</h4>
              <p className="sub-title">
                Create block level buttons—those that span the full width of a
                parent—by adding{" "}
                <code className="highlighter-rouge">.btn-block</code>.
              </p>

              <div className="button-items">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block waves-effect waves-light"
                >
                  Block level button
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm btn-block waves-effect waves-light"
                >
                  Block level button
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title">Toggle states</h4>
              <p className="sub-title">
                Add{" "}
                <code className="highlighter-rouge">data-toggle="button"</code>
                to toggle a button’s{" "}
                <code className="highlighter-rouge">active</code>
                state. If you’re pre-toggling a button, you must manually add
                the <code className="highlighter-rouge">.active</code> className
                <strong>and</strong>{" "}
                <code className="highlighter-rouge">aria-pressed="true"</code>{" "}
                to the
                <code className="highlighter-rouge">&lt;button&gt;</code>.
              </p>

              <div className="button-items">
                <button
                  type="button"
                  className="btn btn-primary waves-effect waves-light"
                  data-toggle="button"
                  aria-pressed="false"
                >
                  Single toggle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Button;
