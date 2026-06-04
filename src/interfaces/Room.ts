// src/interfaces/room.ts

export interface RoomFeature {
  title: string;
  description?: string;
  icon?: React.ReactNode
}

export interface RoomImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Room {
  title: string;
  shortDescription: string;
  longDescription: string;
  priceDescription: string;
  slug: string;
  images: RoomImage[];
  features: RoomFeature[];
}
