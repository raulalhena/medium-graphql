import { useQuery, gql } from '@apollo/client';

function DisplayUsers({ handleClick }) {

  const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
  `;

  const { loading, error, data } = useQuery(GET_USERS);

  return (
    <>
      { error ?
        <p>Error: { error.message } </p>
        :
        <>
          <center><h1 style={{ color: 'lightcoral' }}>Blog Space</h1></center>
          <div className='users-container'>
            <h2 style={{ color: 'orange' }}>Users</h2>
            { loading ?
                <p>Loading...</p> 
              :
              data.users.map((user) => (
                <div key={ user.id } >
                  <a href='#' id={ user.id } onClick={handleClick}>{ user.name }</a>
                </div>
              ))
            }
          </div>
        </>
      }
    </>
  );
}

export default DisplayUsers;