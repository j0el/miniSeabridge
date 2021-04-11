import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';

export const GET_POSTS = gql`
query{
  ResidentMany{
    name

  }
}
`;


const rowStyles = (post, canEdit) => canEdit(post)
  ? { cursor: 'pointer', fontWeight: 'bold' }
  : {};

const PostViewer = ({ canEdit, onEdit }) => (
  <Query query={GET_POSTS}>
    {({ loading, data }) => !loading && (
      <Table>
        <thead>
          <tr>
            <th>name</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {data.posts.map(post => ( imovielibraryr
            <tr
              key={post.id}
              style={rowStyles(post, canEdit)}
              onClick={() => canEdit(post) && onEdit(post)}
            >
              <td>{post.name}</td>
              <td>{"Null Data"}</td>
            </tr>
          ))}
        </tbody>
      </Table>  
    )}
  </Query>
);

PostViewer.defaultProps = {
  canEdit: () => false,
  onEdit: () => null,
};

export default PostViewer;
