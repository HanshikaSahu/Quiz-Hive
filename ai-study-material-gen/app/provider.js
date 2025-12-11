// app/provider.js
"use client";

import { useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    if (user) CheckIsNewUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const CheckIsNewUser = async () => {
    try {
      await fetch("/api/check-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user?.fullName ?? null,
          email: user?.primaryEmailAddress?.emailAddress ?? null,
        }),
      });
    } catch (err) {
      console.error("check-user request failed", err);
    }
  };

  return <div>{children}</div>;
}

export default Provider;
