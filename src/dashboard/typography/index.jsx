import React from "react";

export const Typography = () => {
  return (
    <section className="content">
      <div className="dash">
        <h4>Typography</h4>
      </div>
      <div className="reviews mt-3">
        <h1>h1 heading</h1>
        <h2>h2 heading</h2>
        <h3>h3 heading</h3>
        <h4>h4 heading</h4>
        <h5>h5 heading</h5>
        <h6>h6 heading</h6>
      </div>
      <div className="reviews mt-3">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h6>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title">Headings</h4>
              <p className="sub-title">
                All HTML headings,{" "}
                <code className="highlighter-rouge">&lt;h1&gt;</code> through{" "}
                <code className="highlighter-rouge">&lt;h6&gt;</code>, are
                available.
              </p>

              <h1>
                h1. Bootstrap heading{" "}
                <small className="text-muted font-14">
                  Semibold 2.5rem (40px)
                </small>
              </h1>
              <h2>
                h2. Bootstrap heading{" "}
                <small className="text-muted font-14">
                  Semibold 2rem (32px)
                </small>
              </h2>
              <h3>
                h3. Bootstrap heading{" "}
                <small className="text-muted font-14">
                  Semibold 1.75rem (28px)
                </small>
              </h3>
              <h4>
                h4. Bootstrap heading{" "}
                <small className="text-muted font-14">
                  Semibold 1.5rem (24px)
                </small>
              </h4>
              <h5>
                h5. Bootstrap heading{" "}
                <small className="text-muted font-14">
                  Semibold 1.25rem (20px)
                </small>
              </h5>
              <h6 className="mb-0">
                h6. Bootstrap heading{" "}
                <small className="text-muted font-14">
                  Semibold 1rem (16px)
                </small>
              </h6>
            </div>
          </div>

          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title">Inline text elements</h4>
              <p className="sub-title">
                Styling for common inline HTML5 elements.
              </p>

              <p>
                You can use the mark tag to <mark>highlight</mark> text.
              </p>
              <p>
                <del>
                  This line of text is meant to be treated as deleted text.
                </del>
              </p>
              <p>
                <s>
                  This line of text is meant to be treated as no longer
                  accurate.
                </s>
              </p>
              <p>
                <ins>
                  This line of text is meant to be treated as an addition to the
                  document.
                </ins>
              </p>
              <p>
                <u>This line of text will render as underlined</u>
              </p>
              <p>
                <small>
                  This line of text is meant to be treated as fine print.
                </small>
              </p>
              <p>
                <strong>This line rendered as bold text.</strong>
              </p>
              <p className="mb-0">
                <em>This line rendered as italicized text.</em>
              </p>
            </div>
          </div>

          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title">Unstyled List</h4>
              <p className="sub-title">
                Remove the default{" "}
                <code className="highlighter-rouge">list-style</code> and left
                margin on list items (immediate children only).{" "}
                <strong>
                  This only applies to immediate children list items
                </strong>
                , meaning you will need to add the className for any nested
                lists as well.
              </p>

              <ul className="list-unstyled mb-0">
                <li>Integer molestie lorem at massa</li>
                <li>
                  Nulla volutpat aliquam velit
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Vestibulum laoreet porttitor sem</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title">Display headings</h4>
              <p className="sub-title">
                Traditional heading elements are designed to work best in the
                meat of your page content.{" "}
              </p>

              <h1 className="display-1">Display 1</h1>
              <h1 className="display-2">Display 2</h1>
              <h1 className="display-3">Display 3</h1>
              <h1 className="display-4 mb-0">Display 4</h1>
            </div>
          </div>

          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title">Blockquotes</h4>
              <p className="sub-title">
                For quoting blocks of content from another source within your
                document. Wrap{" "}
                <code className="highlighter-rouge">
                  &lt;blockquote className="blockquote"&gt;
                </code>{" "}
                around any <abbr title="HyperText Markup Language">HTML</abbr>{" "}
                as the quote.
              </p>

              <blockquote className="blockquote font-16">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>

              <blockquote className="blockquote blockquote-reverse font-16 mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="card m-b-30">
            <div className="card-body">
              <h4 className="mt-0 header-title">Inline List</h4>
              <p className="sub-title">
                Remove a list’s bullets and apply some light{" "}
                <code className="highlighter-rouge">margin</code> with a
                combination of two classNamees,{" "}
                <code className="highlighter-rouge">.list-inline</code> and
                <code className="highlighter-rouge">.list-inline-item</code>.
              </p>

              <ul className="list-inline mb-0">
                <li className="list-inline-item">Lorem ipsum</li>
                <li className="list-inline-item">Phasellus iaculis</li>
                <li className="list-inline-item">Nulla volutpat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Typography;
