
import Greeting from "./components/Greetings";
import UserCard from "./components/UserCard";
import CardContainer from "./components/CardContainer";
import { userSortByAge } from "./helper";

const App = () => {
  let user = [
    { name: "Bob", Age: 30 },
    { name: "Charlie", Age: 35 },
    { name: "Alice", Age: 25 },
  ];

  const sorted = userSortByAge(user);

  let userArray = user.map((user, index) => (
    <UserCard key={index} name={user.name} age={user.Age} />
  ));

  return (
    <div>
      <Greeting name={"Nick"} />
      <CardContainer children={userArray}/>

{/*this works too when placed between the CardContainer open and close tags*/}
      {/* {userArray} */}
{/* // </CardContainer> */}
    </div>
  );
};

export default App;
