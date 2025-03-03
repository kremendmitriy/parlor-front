'use client';

import { useEffect, useState } from 'react';
import { ArtistCard } from './components/artist-card/ArtistCard';

const AboutUs = () => {
   const [artistsData, setArtistsData] = useState([]);
   useEffect(() => {
      const fetchArtists = async () => {
         try {
            const response = await fetch('http://localhost:5000/artist');
            const data = await response.json();
            setArtistsData(data);
         } catch (error) {
            console.error('Failed to fetch images:', error);
         }
      };

      fetchArtists();
   }, []);

   return (
      <>
         {artistsData.map(
            ({
               id,
               firstName,
               lastName,
               nickName,
               description,
               artistImageUrl,
            }) => {
               return (
                  <ArtistCard
                     key={id}
                     artistName={`${firstName} ${lastName}`}
                     nickName={nickName}
                     artistDetails={description}
                     imageUrl={artistImageUrl}
                  />
               );
            }
         )}
      </>
   );
};

export default AboutUs;
