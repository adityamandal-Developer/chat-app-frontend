"use client";
import { Button } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { UsersDocument } from "@/network/src/gql/generated";
export default function Home() {
  const { data, loading } = useQuery(UsersDocument);
  console.log();
  return (
    <main className="bg-blue-500">
      <h1>
        {data?.users.map((user) => (
          <div key={user._id}>
            {user.name} <br />
            {user.email}
          </div>
        ))}
      </h1>
    </main>
  );
}
