'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  
  function handleClick() {
    alert("Booo");
  }

  return (
    <main className="flex flex-col items-center justify-between p-2 w-4/5 m-auto">
      <div className='w-full items-center h-hero rounded-xl flex flex-col bg-darksecondary m-auto'>
        <h2 className="ml-auto mr-auto mt-auto justify-center font-extrabold text-7xl 
                      bg-gradient-to-tr from-primary to-orange-500 
                      bg-clip-text text-transparent p-2">
                      Picture Perfect Tagging
        </h2>
        <h3 className="mb-auto ml-auto mr-auto justify-center font-extrabold text-3xl 
                      bg-gradient-to-tr from-primary to-orange-500 
                      bg-clip-text text-transparent p-2">
                      Bringing Clarity To Social Media
        </h3>
      </div>
      <h4 className='float-left mt-8 m-3 mb-5 text-3xl font-bold bg-gradient-to-tr from-primary to-orange-500 
                      bg-clip-text text-transparent'>
        What is PictureSage? <span className='text-white font-normal text-xl'>The only tool you need describe your digital stories.</span>
      </h4>
      <div className='flex flex-row w-full items-center justify-around'>
        <Card className='m-1 w-1/3 self-start'>
          <CardHeader>
            <CardTitle>Enhanced Visibility</CardTitle>
            <CardDescription>Boost your reach with smart image tags.</CardDescription>
          </CardHeader>
          <CardContent>
          ImageTagger helps users improve the visibility of their social media posts. By automatically generating relevant and popular tags for their images, users can reach a wider audience and attract more engagement. Increased visibility means more likes, shares, and followers.
          </CardContent>
        </Card>
        <Card className='m-1 w-1/3 self-start'>
          <CardHeader>
            <CardTitle>Time Efficiency</CardTitle>
            <CardDescription>Simplify image tagging, save time for creativity.</CardDescription>
          </CardHeader>
          <CardContent>
          Manually tagging images for social media posts can be time-consuming and tedious. ImageTagger streamlines the process, saving users valuable time and effort. It ensures that images are tagged with accuracy and efficiency, allowing users to focus on creating great content.
          </CardContent>
        </Card>
        <Card className='m-1 w-1/3 self-start'>
          <CardHeader>
            <CardTitle>Optimized SEO</CardTitle>
            <CardDescription>Elevate your online presence effortlessly.</CardDescription>
          </CardHeader>
          <CardContent>
          ImageTagger can be your ultimate tool for achieving remarkable heights on search engines. By efficiently tagging your images, you can propel your posts to the coveted top spots, amplifying your online presence, and connecting with even broader audiences. With ImageTagger, your online visibility knows no bounds!
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
