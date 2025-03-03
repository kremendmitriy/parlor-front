'use client';

import {
   montserrat,
   vastShadow,
   viaodaLibre,
   vesperLibre,
} from './(fonts)/Fonts';
import './globals.css';
import { Header } from './(components)/header/header';
import { Footer } from './(components)/footer/footer';
import StyledComponentsRegistry from './lib/registry';
import styled from 'styled-components';

const StyledBody = styled.body`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   font-family: var(--font-vast-shadow), var(--font-viaoda-libre),
      var(--font-vesper-libre), var(--font-montserrat);
`;

const StyledMain = styled.main`
   overflow-y: auto;
   padding-top: 96px;
   background-color: #545454;
`;

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html
         lang="en"
         className={`${montserrat.className} ${vastShadow.className} ${viaodaLibre.className} ${vesperLibre.className}`}
      >
         <StyledBody>
            <StyledComponentsRegistry>
               <Header />
               <StyledMain>{children}</StyledMain>
               <Footer />
            </StyledComponentsRegistry>
         </StyledBody>
      </html>
   );
}
