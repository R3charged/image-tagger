'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
 
import { ChangeEvent, FormEvent, useRef, useState } from "react"
import { useForm } from "react-hook-form"

export default function InputFile() {
  const [image, setImage] = useState<any>({});
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  let form = useForm(); 

  async function onSubmit() {
    console.log(image)
    if (!image) 
      return; 
    
      const formData = new FormData(); 
      formData.append('file', image);
      
      try {
        setLoading(true);
        const response = await fetch('http://127.0.0.1:5000/api/upload', {
          method: 'POST',
          body: formData,
        });
        
        // Handle the response here
        if (response.ok) {
          const tags = await response.json(); 
          setTags(tags.message);
          console.log('Image uploaded successfully');
        } else {
          console.error('Image upload failed');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }

      setLoading(false);
  }

  function onFileChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.currentTarget.files) 
      return; 
    

    const file = e.currentTarget.files[0];
    setImage(file);
  }

  function renderTags() {
    if (loading == false && tags.length == 0) {
      return (<p> Upload an image to figure out its tags! </p>);
    }

    if (loading == false) {
      const tagElems = []; 
      for (let tag of tags) {
        tagElems.push(
          <>
          <p>{tag}</p>
          </>
        );
      }

      return (<>
      {tagElems}
              </>);
    }

    if (loading) {
      return (
        <>
          <Skeleton className="w-3/4 h-[20px] mb-1"/>
          <Skeleton className="w-4/5 h-[20px] mb-1"/>
          <Skeleton className="w-2/3 h-[20px] mb-1"/>
        </>
      )
    }
  }
  return (
    <div className="flex flex-col">
        <h3 className="ml-auto mr-auto justify-center font-extrabold text-3xl 
                      bg-gradient-to-tr from-primary to-orange-500 
                      bg-clip-text text-transparent p-2">
                      Tagging Made Easy.
        </h3>
        <h3 className="mb-auto ml-auto mr-auto justify-center font-bold text-2xl p-2">
                      Upload your image and leave your worries at the door. 
        </h3>
      <div className="grid w-full h-full m-2 grid-cols-3 gap-3">
        <div className="col-span-1 border h-full m-3 mr-1 bg-darksecondary rounded-lg p-2">
          <div className="grid w-full items-center gap-1.5 m-2">
            <Label htmlFor="picture" className="font-bold text-white text-lg ">Picture</Label>
            <Input className="w-11/12" id="picture" type="file" onChange={onFileChange}/>
            <Button variant="default" className="w-20" onClick={onSubmit}>Upload</Button>
          </div>
        </div>
        <Card className='m-3 col-span-2 p-2 h-full'>
          <CardHeader>
            <CardTitle>Keywords</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
          {renderTags()}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
