import React from "react";
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export const Form = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <section className="content">
      <div className="reviews">
        <div className="page-header">
          <h5 className="page-title">Form elements</h5>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="">Forms</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Form elements
              </li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="dash">
                  <h4 className="card-title">Default form</h4>
                </div>
                <p className="card-description">Basic form layout</p>
                <form className="forms-sample">
                  <div className="form-group">
                    <label for="exampleInputUsername1">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputUsername1"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputConfirmPassword1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputConfirmPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-check form-check-flat form-check-warning">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-warning m-2">
                    Submit
                  </button>
                  <button className="btn btn-dark">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="dash">
                  <h4 className="card-title">Horizontal Form</h4>
                </div>
                <p className="card-description">Horizontal form layout</p>
                <form className="forms-sample">
                  <div className="form-group row">
                    <label
                      for="exampleInputUsername2"
                      className="col-sm-3 mt-3 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-9 mt-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputUsername2"
                        placeholder="Username"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="exampleInputEmail2"
                      className="col-sm-3 mt-3 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-9 mt-3">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail2"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="exampleInputMobile"
                      className="col-sm-3 mt-3 col-form-label"
                    >
                      Mobile
                    </label>
                    <div className="col-sm-9 mt-3">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputMobile"
                        placeholder="Mobile number"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="exampleInputPassword2"
                      className="col-sm-3 mt-3 col-form-label"
                    >
                      Password
                    </label>
                    <div className="col-sm-9 mt-3">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword2"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="exampleInputConfirmPassword2"
                      className="col-sm-3 mt-3 col-form-label"
                    >
                      Re Password
                    </label>
                    <div className="col-sm-9 mt-3">
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputConfirmPassword2"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-check form-check-flat form-check-warning">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-warning m-2">
                    Submit
                  </button>
                  <button className="btn btn-dark">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="dash">
                  <h4 className="card-title">Basic form elements</h4>
                </div>
                <p className="card-description">Basic form elements</p>
                <form className="forms-sample">
                  <div className="form-group">
                    <label for="exampleInputName1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail3">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail3"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword4">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleSelectGender">Gender</label>
                    <select className="form-control" id="exampleSelectGender">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>File upload</label>
                    <input
                      type="file"
                      name="img[]"
                      className="file-upload-default"
                    />
                    <div className="input-group col-xs-12">
                      <input
                        type="text"
                        className="form-control file-upload-info"
                        disabled
                        placeholder="Upload Image"
                      />
                      <span className="input-group-append">
                        <button
                          className="file-upload-browse btn btn-warning"
                          type="button"
                        >
                          Upload
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputCity1">City</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputCity1"
                      placeholder="Location"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleTextarea1">Textarea</label>
                    <textarea
                      className="form-control"
                      id="exampleTextarea1"
                      rows="4"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-warning m-2">
                    Submit
                  </button>
                  <button className="btn btn-dark">Cancel</button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="dash">
                  <h4 className="card-title">Input size</h4>
                </div>
                <p className="card-description">
                  Add classNamees like <code>.form-control-lg</code> and
                  <code>.form-control-sm</code>.
                </p>
                <div className="form-group">
                  <label>Large input</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Username"
                    aria-label="Username"
                  />
                </div>
                <div className="form-group">
                  <label>Default input</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                  />
                </div>
                <div className="form-group">
                  <label>Small input</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="Username"
                    aria-label="Username"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="dash">
                  <h4 className="card-title">Select size</h4>
                </div>
                <p className="card-description">
                  Add classNamees like <code>.form-control-lg</code> and
                  <code>.form-control-sm</code>.
                </p>
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Large select</label>
                  <select
                    className="form-control form-control-lg"
                    id="exampleFormControlSelect1"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect2">Default select</label>
                  <select
                    className="form-control"
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect3">Small select</label>
                  <select
                    className="form-control form-control-sm"
                    id="exampleFormControlSelect3"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="dash">
                  <h4 className="card-title">Basic input groups</h4>
                </div>
                <p className="card-description">Basic bootstrap input groups</p>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-warning text-white">
                        $
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">.00</span>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <div className="input-group-prepend">
                      <span className="input-group-text">0.00</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Amount (to the nearest dollar)"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Recipient's username"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-sm btn-warning" type="button">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-sm btn-outline-warning dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Dropdown
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="">
                          Action
                        </a>
                        <a className="dropdown-item" href="">
                          Another action
                        </a>
                        <a className="dropdown-item" href="">
                          Something else here
                        </a>
                        <div
                          role="separator"
                          className="dropdown-divider"
                        ></div>
                        <a className="dropdown-item" href="">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Text input with dropdown button"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      style={{width:"100%"}}
                      className="form-control"
                      placeholder="Find in facebook"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-sm btn-facebook" type="button">
                        <i className="mdi mdi-facebook"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="dash">
                  <h4 className="card-title">Checkbox Controls</h4>
                </div>
                <p className="card-description">
                  Checkbox and radio controls (default appearance is in warning
                  color)
                </p>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <ul>
                        <li> <Checkbox {...label} defaultChecked />Default Checked</li>
                        <li><Checkbox {...label} defaultChecked color="success" />Success</li>
                        <li><Checkbox {...label} defaultChecked color="secondary" />Secondary</li>
                        <li><Checkbox {...label} defaultChecked color="default" />Default</li>
                        <li>
                          <Checkbox
                            {...label}
                            defaultChecked
                            sx={{
                              color: pink[800],
                              '&.Mui-checked': {
                                color: pink[600],
                              },
                            }}

                          />Checked
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>
                          <Radio {...controlProps('a')} />Checked
                        </li>
                        <li><Radio {...controlProps('b')} color="secondary" />Default Checked</li>
                        <li><Radio {...controlProps('c')} color="success" />Success</li>
                        <li> <Radio {...controlProps('d')} color="default" />Secondary</li>
                        <li><Radio
                          {...controlProps('e')}
                          sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                              color: pink[600],
                            },
                          }}
                        />Default</li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-body">
                <p className="card-description">
                  Add className <code>.form-check</code> for checkbox and radio
                  controls in theme colors
                </p>
                <form>
                  <div className="row">
                  <div className="col-md-6">
                      <ul>
                        <li> <Checkbox {...label} defaultChecked />Default Checked</li>
                        <li><Checkbox {...label} defaultChecked color="success" />Success</li>
                        <li><Checkbox {...label} defaultChecked color="secondary" />Secondary</li>
                        <li><Checkbox {...label} defaultChecked color="default" />Default</li>

                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>
                          <Radio {...controlProps('a')} />Checked
                        </li>
                        <li><Radio {...controlProps('b')} color="secondary" />Default Checked</li>
                        <li><Radio {...controlProps('c')} color="success" />Success</li>
                        <li> <Radio {...controlProps('d')} color="default" />Secondary</li>

                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="dash">
                  <h4 className="card-title">Inline forms</h4>
                </div>
                <p className="card-description">
                  Use the <code>.form-inline</code> className to display a
                  series of labels, form controls, and buttons on a single
                  horizontal row
                </p>
                <form className="form-inline">
                  <label className="sr-only" for="inlineFormInputName2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    placeholder="Jane Doe"
                  />
                  <label
                    className="sr-only"
                    for="inlineFormInputGroupUsername2"
                  >
                    Username
                  </label>
                  <div className="input-group mb-2 mr-sm-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">@</div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroupUsername2"
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-check mx-sm-2">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked
                      />
                      Remember me
                    </label>
                  </div>
                  <button type="submit" className="btn btn-warning mb-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="dash">
                  <h4 className="card-title">Horizontal Two column</h4>
                </div>
                <form className="form-sample">
                  <p className="card-description">Personal info</p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 mt-3 col-form-label">
                          First Name
                        </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Last Name
                        </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Gender
                        </label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Date of Birth
                        </label>
                        <div className="col-sm-9">
                          <input
                            className="form-control"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Category
                        </label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>Category1</option>
                            <option>Category2</option>
                            <option>Category3</option>
                            <option>Category4</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Membership
                        </label>
                        <div className="col-sm-4">
                          <div className="form-check">
                            <label className="form-check-label">
                            <Radio {...controlProps('b')} color="secondary" />
                              Free
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-5">
                          <div className="form-check">
                            <label className="form-check-label">
                            <Radio {...controlProps('b')} color="success" />
                              Professional
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="card-description">Address</p>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Address 1
                        </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">State</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Address 2
                        </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Postcode
                        </label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">City</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Country
                        </label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>America</option>
                            <option>Italy</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
