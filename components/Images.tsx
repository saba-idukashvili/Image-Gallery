import React, { useEffect, useState } from "react";

interface Image {
  asset_id: string;
  secure_url: string;
  public_id: string;
}

export default function Images() {
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images");
        if (!response.ok) {
          throw new Error("Failed to fetch images");
        }
        const data = await response.json();
        setImages(data);
      } catch (error: any) {
        setError(error.message);
      }
    };

    fetchImages();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className=" columns-1 gap-2 lg:gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {images.map((image) => (
          <img
            className="rounded-lg my-4 object-cover"
            key={image.asset_id}
            src={image.secure_url}
            alt={image.public_id}
          />
        ))}
      </div>
    </div>
  );
}
