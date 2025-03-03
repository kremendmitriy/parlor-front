import {
   Montserrat,
   Vast_Shadow,
   Viaoda_Libre,
   Vesper_Libre,
} from 'next/font/google';

const montserrat = Montserrat({
   weight: ['400', '700'],
   subsets: ['latin'],
   variable: '--font-montserrat',
});

const vastShadow = Vast_Shadow({
   weight: '400',
   subsets: ['latin'],
   variable: '--font-vast-shadow',
});

const viaodaLibre = Viaoda_Libre({
   weight: '400',
   subsets: ['latin'],
   variable: '--font-viaoda-libre',
});

const vesperLibre = Vesper_Libre({
   weight: '400',
   subsets: ['latin'],
   variable: '--font-vesper-libre',
});

export { montserrat, vastShadow, viaodaLibre, vesperLibre };
