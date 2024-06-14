import React, {createContext, useState, useContext} from 'react';
import {Photo, PhotoContextData, PhotoProviderProps} from './types';

const PhotoContext = createContext<PhotoContextData | undefined>(undefined);

export const usePhoto = (): PhotoContextData => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhoto must be used within a PhotoProvider');
  }
  return context;
};

export const PhotoProvider = ({children}: PhotoProviderProps): JSX.Element => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const addPhoto = (photo: Photo) => {
    setPhotos(prevPhotos => [...prevPhotos, photo]);
  };

  return (
    <PhotoContext.Provider value={{photos, addPhoto}}>
      {children}
    </PhotoContext.Provider>
  );
};
