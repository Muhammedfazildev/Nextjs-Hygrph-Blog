## Hygraph cms data fetch to Nextjs App


### hygraph blog content fetch and showing in the the storefront


### To run the project should follow few steps

* Installation of node atleast version 
    node v14.20.0

* Hygraph account login

* Url from the hygraph path API ACCESS > Endpoints > Content Api


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