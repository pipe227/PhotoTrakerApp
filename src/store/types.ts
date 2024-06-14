import {ReactNode} from 'react';

export interface Photo {
  uri: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface PhotoContextData {
  photos: Photo[];
  addPhoto: (photo: Photo) => void;
}

export interface PhotoProviderProps {
  children: ReactNode;
}
