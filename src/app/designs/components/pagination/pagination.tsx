import {
   PaginationButton,
   PaginationControls,
   PaginationText,
} from './paginationStyled';

interface PaginationProps {
   currentPage: number;
   totalItems: number;
   itemsPerPage: number;
   onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
   currentPage,
   totalItems,
   itemsPerPage,
   onPageChange,
}) => {
   const totalPages = Math.ceil(totalItems / itemsPerPage);

   return (
      <PaginationControls>
         <PaginationButton
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
         >
            Previous
         </PaginationButton>
         <PaginationText>
            Page {currentPage} of {totalPages}
         </PaginationText>
         <PaginationButton
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
         >
            Next
         </PaginationButton>
      </PaginationControls>
   );
};
