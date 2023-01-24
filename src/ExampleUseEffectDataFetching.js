import { useEffect, useState } from 'react';

export default function ExampleUseEffectDataFetching() {
  const [appUsers, setAppUsers] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // 1. every render (most of the time problematic)
  // useEffect(() => {
  //   async function fetchUsers() {
  //     const response = await fetch('https://randomuser.me/api/?results=2');
  //     const data = await response.json();

  //     console.log(data);
  //     setAppUsers(data.results);
  //   }
  //   fetchUsers().catch((error) => console.log(error));
  // });

  // 2. only at first render => passing an empty array as second argument
  useEffect(() => {
    document.title = 'my user dashboard';
  }, []);

  // 3. when a variable update // this also trigger on first render
  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://randomuser.me/api/?results=2');
      const data = await response.json();

      setAppUsers(data.results);
      setIsLoading(false);
    }
    fetchUsers().catch((error) => console.log(error));
  }, [refetch]);

  // if (isLoading) {
  //   return 'is Loading...';
  // }

  return (
    <>
      <h1>Data Fetching Use Effect</h1>
      {!isLoading &&
        appUsers.map((user) => {
          return (
            // using prefixes for your ids is good practice
            <div key={`user-profile-${user.id.value}`}>
              <h3>
                {user.name.first} {user.name.last}
              </h3>
              <span>email: {user.email}</span>
              <br />
              <img src={user.picture.medium} alt="user profile" />
            </div>
          );
        })}

      <button
        onClick={() => {
          setIsLoading(true);
          setRefetch(!refetch);
        }}
      >
        refetch
      </button>
    </>
  );
}
