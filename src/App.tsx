import { Switch } from "@headlessui/react";
import { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import UsersTable from "./components/UsersTable";
type User = {
  id: number;
  name: string;
  performance: number;
  date: Date;
};

type SortKey = "id" | "name" | "performance" | "date";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [sortFromAPI, setSortFromAPI] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>("performance");

  const fetchUsers = async (sortBy: SortKey) => {
    fetch(`http://localhost:5500/users?order_by=${sortBy}`)
      .then((response) => response.json())
      .then((data: User[]) => {
        const newData = data.map((item) => {
          const newItem = {
            ...item,
            date: new Date(item.date),
          };
          return newItem;
        });
        setUsers(newData);
      });
  };

  const sortUsers = (key: SortKey) => {
    setSortKey(key);
    if (!sortFromAPI) {
      const sortedUsers = [...users].sort((a, b) => (a[key] > b[key] ? -1 : 1));
      setUsers(sortedUsers);
    } else {
      fetchUsers(key);
    }
  };

  useEffect(() => {
    fetchUsers(sortKey);
  }, []);

  return (
    <div className="App max-w-3xl mx-auto mt-12 border-2 border-gray-800">
      <div className="p-5">
        <Switch
          checked={sortFromAPI}
          onChange={setSortFromAPI}
          className={`${
            sortFromAPI ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              sortFromAPI ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
        <span className="ml-5">Sort by calling API</span>
      </div>
      <UsersTable users={users} sortUsers={sortUsers} />
    </div>
  );
}

export default App;
