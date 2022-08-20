import React from "react";

// TODO validate

type Data = {
  nickname?: string;
  email?: string;
  password?: string;
};

const LogInForm = ({
                     initialData,
                     onSubmit
                   }: {
  initialData: Data;
  onSubmit(values: Data): void;
}) => {
  const [logInData, setLogInData] = React.useState<Data>(initialData);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmit(logInData);
  };

  return (
      <form onSubmit={handleSubmit}>
        <div>
            <label>
                Enter your nickname
                <input
                    value={logInData.nickname}
                    onChange={(e) =>
                        setLogInData({ ...logInData, nickname: e.target.value })
                    }

                />
            </label>
        </div>
        <div>
            <label>
                Enter your email
                <input
                    value={logInData.email}
                    onChange={(e) =>
                        setLogInData({ ...logInData, email: e.target.value })
                    }
                />
            </label>
        </div>
        <div>
            <label>
                Enter your password
                <input
                    value={logInData.password}
                    onChange={(e) =>
                        setLogInData({ ...logInData, password: e.target.value })
                    }
                />
            </label>
        </div>
        <button>Submit</button>
      </form>
  );
};

export default function App() {
  return (
      <div className="App">
        <LogInForm
            initialData={{}}
            onSubmit={(data: Data) => console.log(data)}
        />
      </div>
  );
}
