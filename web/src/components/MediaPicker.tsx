'use client'
/* eslint-disable @next/next/no-img-element */

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)
  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target
    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }
  return (
    <>
      <div>
        <input
          type="file"
          className="invisible h-0 w-0"
          id="media"
          onChange={onFileSelected}
          accept="image/*"
          name="coverUrl"
        />
        {preview && (
          // esl-disable-next-line
          <img
            src={preview}
            alt=""
            className="aspect-video w-full rounded-lg object-cover"
          />
        )}
      </div>
    </>
  )
}
