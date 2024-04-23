"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <Navbar session={session} />
      <div className="flex-grow text-center p-10">
        <div className="flex justify-center my-10">
          <h3 className="text-3xl py-3 font-bold">Welcome to home page</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, laudantium harum! Vel ab commodi, assumenda illum, sunt
            eum aliquam veniam possimus, voluptates dicta itaque totam! Natus
            repellat iusto molestiae velit.
          </p>
        </div>
      </div>
    </main>
  );
}
