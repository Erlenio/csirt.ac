'use client'

import { LoaderOverlay } from "@/components/materialUI/Loaders";
import { PostForm } from "@/components/noticia/PostForm";
import { PostWithDeteils } from "@/utils/CustomInterface";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditPost: React.FC = () => {

    const [post, setPost] = useState<PostWithDeteils>();
    const [isLoading, setIsloading] = useState(true);
    const searchParams = useParams();
    const slug = searchParams.slug;


    useEffect(() => {

    const getPost = async () => {
      try {

        const request = await fetch(`/api/posts?slug=${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            credentials: 'include'
          },
        });

        if (!request.ok) {
          throw new Error('Erro ao carregar o post');
        }

        const response = await request.json();
        const post_ = response.data;
        console.log(post_);
        
        setPost(post_);
        
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }
    getPost();
  }, [slug]);

    return (
        <>

            
            <PostForm post={post}/>
            {isLoading && <LoaderOverlay style="fixed "/>}
        </>
    )

}

export default EditPost;