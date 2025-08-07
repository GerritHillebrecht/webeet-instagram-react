import React, { useState } from 'react';
import { Form, useNavigation } from 'react-router';
import { z } from 'zod';
import { createPostInputSchema } from '~/schemas/post.schema';
import { Button } from './ui/Button';
import { Textarea } from './ui/textarea';
import PostCard from './PostCard';
import { Separator } from './ui/separator';

type FormErrors = z.ZodIssue[];

export function CreatePostForm() {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<FormErrors>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setImageFile(null);
      setPreviewUrl(null);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Client-side validation
    const validationResult = createPostInputSchema.safeParse({
      caption,
      image: imageFile || undefined,
    });

    if (!validationResult.success) {
      setErrors(validationResult.error.issues);
      // Hier verhinderst du das Senden des Formulars, wenn die Validierung fehlschlägt
      event.preventDefault();
    } else {
      // Wenn die Validierung erfolgreich ist, rufst du kein preventDefault() auf.
      // React Router übernimmt das Senden und ruft die Action auf.
      setErrors([]); // Lösche vorherige Fehler
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 bg-white rounded-lg shadow-md pb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Create New Post</h2>
      <Form
        method="post"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
          />

          {errors.find((e) => e.path[0] === 'image') && (
            <p className="mt-2 text-sm text-red-600">
              {errors.find((e) => e.path[0] === 'image')?.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="caption"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Caption
          </label>
          <Textarea
            rows={3}
            id="caption"
            name="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            placeholder="Write a caption..."
          />
          {errors.find((e) => e.path[0] === 'caption') && (
            <p className="mt-2 text-sm text-red-600">
              {errors.find((e) => e.path[0] === 'caption')?.message}
            </p>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Creating...' : 'Create Post'}
        </Button>

        <Separator className="mt-4" />
        <p className="text-center bg-background font-bold uppercase tracking-wide text-xs -mt-6 px-4 mx-auto w-fit">
          PREVIEW
        </p>

        <PostCard
          caption={caption}
          imageUrl={previewUrl || '/placeholder.svg'}
        />
      </Form>
    </div>
  );
}
