import { GraphQLClient, gql } from "graphql-request"

const graphqlAPI = 'https://api-us-west-2.hygraph.com/v2/cl9yh0cw71vl301uj9jcfbrfc/master'

const authToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Njc3NTk5ODIsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2w5eWgwY3c3MXZsMzAxdWo5amNmYnJmYy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzQ0MmUyMzQtYzc2Yy00MDA0LTk3OTctM2ZkNmI3NzAzOGUyIiwianRpIjoiY2xhNXA4ZWRyNGlzODAxdWsxMTRuY2ExcSJ9.EzkPcOex75xNI86sFN6u1cFT2LRiitl71OMoo7rOl0jAg5dHlyn1DDEAnkxr4DRgW8UhP_Pnmewj5GNuQEm6lmD0YrdPVKTgmzxsWtztoYOHxII4WV1PGqY-8v8LuYnw8RuVgObs9fa3cek9MJyG5nb7QKtq7dg3ZQ4CCU-MkM0vE7it2ElcGR2U2kY0lnXRagG3znZxpUeRHdPjzyb_n-ZCp5HvFkmXRIuqkWypEn9heWRsRJ305xwD9UsqYaxUUoILTw9FVofjztaoK4RTrCA7fJYCj--lYMrRJJCzEBmJb2f5ONW6tty07-fDfRYehurQcFLhMDTOqTwrikuJWjPG1i_jQ9ijr7Vks9-kGEaKlgNK7Ttsgy-DdL67_VymEmHvjKdGURUu4F2zhIWf7xc8ZzVf7YBUz6ozJqArkddmMwubv1DGeNbQesLmlcGA3-J8s6PaRoZCcKCMZ4lnMkM253ZITrotN5V06lTrapv7seMaUTD4Z4Y4eXWHa4WPjd9hoYi0JHa8jYDgrBxfo0K5w5-aGv_U7WdA-8lLwBsUaOrFY6s6Te4m_BiOikf3RnXSHMrMeGvMMwGhITdrpxF_1J2HzO9uiplylonE7sEXdivRE6GlqeDY3o8KtyuaGFRwmJRc1RXHab7-u-81jN3tIl1jxXqroV7-xyjTJFU'


export default async function comments(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${authToken}`
    }
  })
  const query = gql`
  mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
    createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
  }
`;

const result = await graphQLClient.request(query, {
  name: req.body.name,
  email: req.body.email,
  comment: req.body.comment,
  slug: req.body.slug,
});

return res.status(200).send(result);
}
