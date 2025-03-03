/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';
import { DesignHeaderImage } from './components/design-header-image/DesignHeaderImage';
import { DesignGrid } from './components/design-grid/DesignGrid';
import { Pagination } from './components/pagination/pagination';
import { styled } from 'styled-components';

const PageWrapper = styled.div`
   background: linear-gradient(135deg, #1b1b1b, #696969);
`;

const Page = () => {
   const [japanImages, setJapanImages] = useState<string[]>([]);
   const [realismImages, setRealismImages] = useState<string[]>([]);
   const [graphicsImages, setGraphicsImages] = useState<string[]>([]);

   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 6;

   useEffect(() => {
      const fetchImages = async () => {
         try {
            const response = await fetch('http://localhost:5000/tattoo-images');
            const data = await response.json();

            setJapanImages(data.japanImages.map((img: any) => img.imageUrl));
            setRealismImages(
               data.realismImages.map((img: any) => img.imageUrl)
            );
            setGraphicsImages(
               data.graphicsImages.map((img: any) => img.imageUrl)
            );
         } catch (error) {
            console.error('Failed to fetch images:', error);
         }
      };

      fetchImages();
   }, []);

   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;

   const displayedJapanImages = japanImages.slice(startIndex, endIndex);
   const displayedRealismImages = realismImages.slice(startIndex, endIndex);
   const displayedGraphicsImages = graphicsImages.slice(startIndex, endIndex);

   return (
      <>
         <DesignHeaderImage />
         <PageWrapper>
            <DesignGrid
               japanImages={displayedJapanImages}
               realismImages={displayedRealismImages}
               graphicsImages={displayedGraphicsImages}
            />
            <Pagination
               currentPage={currentPage}
               totalItems={Math.max(
                  japanImages.length,
                  realismImages.length,
                  graphicsImages.length
               )}
               itemsPerPage={itemsPerPage}
               onPageChange={setCurrentPage}
            />
         </PageWrapper>
      </>
   );
};

export default Page;
