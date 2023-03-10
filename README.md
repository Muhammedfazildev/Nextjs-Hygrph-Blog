## Hygraph cms data fetch to Nextjs App


### hygraph blog content fetch and showing in the the storefront


### To run the project should follow few steps

* Installation of node atleast version 
    node v14.20.0

* Hygraph account login


* To run next js app

    ``` npm run dev ```

```diff
-  graphql query example fetch from hygraph
 query{
    posts{
      id
      title
      slug
      datePublished
      content{
        text
      }
      coverPhoto {
        id
        url
      }
    }
  }
```


### steps to follow 

#### Installing module 
    npm install graphql
    npm install graphql-request


### Importing package to the file
```
import { GraphQLClient, gql } from 'graphql-request'
```


### Used content api in hygraph 
    Access > Endpoints > Content Api


```
const graphcms = new GraphQLClient(
  'content api url'
);
```

Fetch the details which we need through graphql -  hygraph
```
const QUERY = gql`
  query{
    posts{
      id
      title
      slug
      datePublished
      content{
        text
      }
      coverPhoto {
        id
        url
      }
    }
  }
`

```

```
export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts,
    },
  };
}

```


Refer the tutorial

1. https://www.youtube.com/watch?v=Dc7LAgqy1_E

