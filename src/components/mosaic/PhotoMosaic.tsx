import PhotoAlbum, { type LayoutType } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

import "react-photo-album/styles.css";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

interface MosaicImage {
  src: string;
  width: number;
  height: number;
}

interface PhotoMosaicProps {
  images: MosaicImage[];
  layout: LayoutType;
  columns?: number;
  spacing?: number;
  padding?: number;
}

const PhotoMosaic = ({
  images,
  layout = "rows",
  columns = 3,
  spacing = 8,
  padding = 20,
}: PhotoMosaicProps) => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="w-full mx-auto">
      <PhotoAlbum
        photos={images}
        layout={layout}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 2;
          if (containerWidth < 1024) return 3;
          return columns; // el prop que pasas
        }}
        spacing={spacing}
        padding={padding}
        onClick={({ index: current }) => setIndex(current)}
      />
      <Lightbox
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
        index={index}
        slides={images}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default PhotoMosaic;
