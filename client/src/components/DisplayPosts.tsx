import { useQuery, gql } from '@apollo/client';

function DisplayPosts({ userId }) {

  const GET_POSTS = gql`
  query { 
    findUserPosts(userId: ${userId}) { 
      id 
      title 
      content 
    } 
  }
  `;

  const { loading, error, data } = useQuery(GET_POSTS);

  return (
    <>
      { error ?
        <></>
      :
        <>
          <div className='posts-container'>
            <h2 style={{ color: 'orange' }}>Posts</h2>
            <div className='posts-list'>
              { loading ?
                  <p>Loading...</p>
                :
                  data.findUserPosts.map((post) => (
                    <div key={ post.id }>
                      <h3> { post.title } </h3>
                      <article>{ post.content } <a href='#' id={ post.id } style={{ fontSize: '0.7rem' }}>Leer mas</a></article>
                    </div>
                  ))
              }
            </div>
          </div>
        </>
      }
    </>
  );
}

export default DisplayPosts;