import React from "react";
import { Box, Button } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const goToPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <Box mt={15}>
      <Button
        mr={20}
        colorScheme="blue"
        onClick={goToPrevious}
        disabled={currentPage === 1}
      >
        Anterior
      </Button>
      <Box as="span">
        Página {currentPage} de {totalPages}
      </Box>
      <Button
        ml={20}
        colorScheme="blue"
        onClick={goToNext}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </Button>
    </Box>
  );
};

export default Pagination;
