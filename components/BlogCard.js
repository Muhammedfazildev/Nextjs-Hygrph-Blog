import Link from "next/link";

export default function BlogPost({title,author,coverPhoto,datePublished,slug}){
    return(
        <div>
            <Link href={"/posts/"+slug}>
                <div>
                    <img src={coverPhoto.url} alt='image' />
                </div>
            </Link>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <h4>{datePublished}</h4>
        </div>
    )
}