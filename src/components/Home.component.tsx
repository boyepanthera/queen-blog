import axios from "axios";
import React, { FC, PureComponent } from "react";

interface LoginPropsInterface {
  data?: string;
}
interface LoginStateInterface {
  password: string;
  email: string;
}
class Login extends PureComponent<LoginPropsInterface, LoginStateInterface> {
  constructor(props: LoginPropsInterface) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value } as Pick<
      LoginStateInterface,
      keyof LoginStateInterface
    >);
  };

  handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const loginUrl = "";
    // let { message, data } = await axios.post();
  };

  render(): JSX.Element {
    const { email, password } = this.state;
    return (
      <div className="col-md-4  d-flex flex-column full-page">
        <div className="m-auto form-wrap">
          <h1 className="h1">Welcome</h1>
          <form
            onSubmit={this.handleSubmit}
            className="border border-2 p-4 rounded"
          >
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                value={email}
                name="email"
                onChange={this.handleChange}
                placeholder="john@queenblog.com"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={password}
                name="password"
                onChange={this.handleChange}
                id="inputAddress2"
                placeholder="****pw****"
              />
            </div>
            <div className="col-12 mt-3">
              <button type="submit" className="btn btn-primary col">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const Home: FC = (): JSX.Element => {
  return <Login />;
};

export default Home;
