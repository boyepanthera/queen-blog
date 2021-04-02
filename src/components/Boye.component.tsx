import React, { ChangeEventHandler, FC, PureComponent } from "react";
import boye from "../images/boye-social.jpeg";

interface displayProps {
  age: number;
  fullName: string;
  id: string;
}

// React Component with Props passed down and destructured with its type
const Display: FC<displayProps> = ({
  age,
  fullName,
  id,
}: displayProps): JSX.Element => {
  return (
    <>
      <div>
        <strong> {fullName}</strong>: with userId {id}
      </div>
      <div>You are {age} years old</div>
    </>
  );
};

// Declare function component using normal function
function Profile(): JSX.Element {
  return (
    <div>Olanrewaju Is a fullstack Developer with 4+ years of experience.</div>
  );
}

// Declare with arrow function without prop
const Contact: FC = (): JSX.Element => {
  const [address, setAddress] = React.useState({
    homeNumber: "",
    street: "",
    city: "",
  });

  const handleChange: ChangeEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.currentTarget;
    setAddress({ ...address, [name]: value });
  };

  return (
    <div>
      <p>Email: eyiwumiolaboye@gmail.com</p>
      <p>Twitter:@Boyepanthera</p>
      <div>You can visit him at :</div>
      <div>
        {address.homeNumber}, {address.street}, {address.city}
      </div>
      <div className="">
        <div className="col-md-4 mx-auto">
          <form className="row border border-2 p-3 rounded">
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="homeNumber"
                onChange={handleChange}
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Address 2
              </label>
              <input
                type="text"
                className="form-control"
                name="street"
                onChange={handleChange}
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                name="city"
                onChange={handleChange}
                className="form-control"
                id="inputCity"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Class Component without prop and state
// class Address extends PureComponent {
//   render(): JSX.Element {
//     return (
//       <div>
//         <span>Address : 2, Ladi lak, Lagos</span>
//       </div>
//     );
//   }
// }

interface professionInterface {
  position: string;
}
interface professionStateInterface {
  salary: number;
}
class Profession extends PureComponent<
  professionInterface,
  professionStateInterface
> {
  constructor(props: professionInterface) {
    super(props);
    this.state = {
      salary: 6000,
    };
  }

  render(): JSX.Element {
    const { salary } = this.state;
    const { position } = this.props;
    return (
      <div>
        Hello for the role {position} you will {salary} monthly
      </div>
    );
  }
}

// React Component with normal functions using other components
function Boye(): JSX.Element {
  return (
    <>
      <img
        src={boye}
        height={250}
        width={250}
        className="boye-image"
        alt="logo"
      />
      <Display age={26} fullName="Olanrewaju A. Olaboye" id="23" />
      <Profession position="Fullstack Engineer" />
      <Profile />
      <Contact />
      {/* <Address /> */}
    </>
  );
}

export default Boye;
