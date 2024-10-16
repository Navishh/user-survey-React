// import React, { createContext, ReactNode, useContext, useState } from "react";

// interface User {
//   firstName: string;
//   lastName: string;
// }

// interface UserContextType {
//   user: User;
//   setUser: React.Dispatch<React.SetStateAction<User>>;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const useUser = (): UserContextType => {
//   const context = useContext(UserContext);
//   if (!context) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };

// export const UserProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   const [user, setUser] = useState<User>({ firstName: "", lastName: "" });

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
import React, { createContext, ReactNode, useContext, useState } from "react";

interface User {
  firstName: string;
  lastName: string;
  otherFirstName?: string;
  otherLastName?: string;
  relationship?: string;
  day: string;
  month: string;
  year: string;
  disability: "yes" | "no";
  fileName: string;
}

interface UserContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    fileName: "",
    disability: "no",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
