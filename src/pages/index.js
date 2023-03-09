import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { GraphQLClient, gql } from 'graphql-request'
import { useState } from 'react';
import BlogCard from '../../components/BlogCard'



import { Text, Link, Image , Button } from "@nextui-org/react";


const graphcms = new GraphQLClient(
  'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clezi6kw10ys101ujg5b09lk6/master'
);


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

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  console.log('hello', posts)
  return {
    props: {
      posts,
    },
  };
}



export default function Home({ posts }) {
  console.log('working..')
  return (
    <>
      <main className={styles.mainDiv}>
        {posts.map((post) => {
          console.log('data is', post.coverPhoto.url)
          return (
            <>
              <div className={styles.cardMainDiv}>
                <div>
                  <Link href={post.slug}>
                    <Text h1
                      size={30}
                      css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                      }}
                      weight="bold">
                      {post.title}
                    </Text>
                  </Link>
                  <Text>
                    {post.content.text}
                  </Text>
                  <div className={styles.photoDate}>
                    <Link src={post.coverphoto}>
                      <Image
                        width={650}
                        height={330}
                        src={post.coverPhoto.url}
                        alt="Default Image"
                        objectFit="cover"    
                      />
                    </Link>
                    <text>Published Date : {post.datePublished}</text>
                    <Link href={post.slug}>
                      <Button color='success'>Read More</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </main>
    </>
  )
}
