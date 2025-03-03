import { DesignColumn } from '../design-column/DesingColumn';
import styled from 'styled-components';

const Grid = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 30px;
`;

interface DesignGridProps {
   japanImages: string[];
   realismImages: string[];
   graphicsImages: string[];
}

export const DesignGrid = ({
   japanImages,
   realismImages,
   graphicsImages,
}: DesignGridProps) => {
   return (
      <Grid>
         <DesignColumn title="Japan" images={japanImages} />
         <DesignColumn title="Realism" images={realismImages} />
         <DesignColumn title="Graphics" images={graphicsImages} />
      </Grid>
   );
};
