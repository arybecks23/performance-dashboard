import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  performance: number;
  date: Date;
};
type SortKey = "id" | "name" | "performance" | "date";

type Props = {
  users: User[];
  sortUsers: (key: SortKey) => void;
};

export default function UsersTable({ users, sortUsers }: Props) {
  if (users.length > 0)
    return (
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              <button onClick={() => sortUsers("id")}>ID</button>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              <button onClick={() => sortUsers("name")}>Name</button>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              <button onClick={() => sortUsers("performance")}>
                Performance
              </button>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              <button onClick={() => sortUsers("date")}>Date</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, userIdx) => (
            <tr
              key={user.id}
              className={userIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {user.id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{user.name}</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {user.performance}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {user.date.toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  else return <p>Loading...</p>;
}
